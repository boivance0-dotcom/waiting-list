import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { GradientButton } from './ui/gradient-button';
import { Input } from './ui/input';
import { Label } from './ui/label';

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError('Invalid credentials');
        return;
      }

      if (data.user) {
        onLogin();
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl shadow-purple-500/20 relative max-w-md w-full">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 blur-xl -z-10"></div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Biovance Admin</h1>
          <p className="text-gray-300">Secure access for team members</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@biovance.com"
              className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
              required
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
              required
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center bg-red-500/10 rounded-lg p-3">
              {error}
            </div>
          )}

          <GradientButton
            type="submit"
            variant="variant"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Access Dashboard'}
          </GradientButton>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Authorized personnel only
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;