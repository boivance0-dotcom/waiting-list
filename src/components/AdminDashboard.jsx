import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';
import { Search, Filter, LogOut, CheckCircle, XCircle, Clock } from 'lucide-react';
import { GradientButton } from './ui/gradient-button';
import { Input } from './ui/input';

const AdminDashboard = ({ onLogout }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      showToast('Error loading bookings', 'error');
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (id, status) => {
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;

      setBookings(bookings.map(booking =>
        booking.id === id ? { ...booking, status } : booking
      ));

      showToast(`Booking ${status} successfully`, 'success');
    } catch (error) {
      console.error('Error updating booking:', error);
      showToast('Error updating booking', 'error');
    }
  };

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'rejected':
        return <XCircle className="w-4 h-4 text-red-400" />;
      default:
        return <Clock className="w-4 h-4 text-yellow-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'rejected':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-white text-xl">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-md border-b border-white/10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">Biovance Admin Dashboard</h1>
            <p className="text-gray-400">Manage booking submissions</p>
          </div>
          <GradientButton onClick={handleLogout} variant="variant">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </GradientButton>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Filters */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 w-4 h-4" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Interest</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Message</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredBookings.map((booking, index) => (
                  <motion.tr
                    key={booking.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-white/5"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-white">{booking.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">{booking.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">{booking.interest || 'General'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300 max-w-xs truncate">{booking.message || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                      {new Date(booking.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status || 'pending')}`}>
                        {getStatusIcon(booking.status || 'pending')}
                        {(booking.status || 'pending').charAt(0).toUpperCase() + (booking.status || 'pending').slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        {(!booking.status || booking.status === 'pending') && (
                          <>
                            <button
                              onClick={() => updateBookingStatus(booking.id, 'approved')}
                              className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded-lg transition-colors"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => updateBookingStatus(booking.id, 'rejected')}
                              className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded-lg transition-colors"
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredBookings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No bookings found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`fixed bottom-6 right-6 px-6 py-3 rounded-lg shadow-lg ${
            toast.type === 'success'
              ? 'bg-green-600 text-white'
              : 'bg-red-600 text-white'
          }`}
        >
          {toast.message}
        </motion.div>
      )}
    </div>
  );
};

export default AdminDashboard;