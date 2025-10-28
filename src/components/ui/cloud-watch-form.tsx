"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { GradientButton } from "./gradient-button";
import { supabase } from "../../lib/supabase";

export default function CloudWatchForm() {
  const [isTyping, setIsTyping] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });

  useEffect(() => {
    const handleMouse = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const offsetX = ((cursor.x / window.innerWidth) - 0.5) * 40; // bigger range
    const offsetY = ((cursor.y / window.innerHeight) - 0.5) * 20;
    setEyePos({ x: offsetX, y: offsetY });
  }, [cursor]);

  // Blinking every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('bookings')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            interest: formData.interest,
            message: formData.message,
            status: 'pending',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      // Reset form
      setFormData({
        name: '',
        email: '',
        interest: '',
        message: ''
      });

      alert('Successfully joined the waitlist!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white/30 backdrop-blur-md rounded-xl shadow-xl p-8 flex flex-col items-center gap-6 w-md border">

        {/* Cartoon Face */}
          <div className="relative w-70 h-40">
            <img
              src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/cloud.jpg"
              alt="cartoon"
              className="w-full h-full"
            />

            {["left", "right"].map((side, idx) => (
              <div
                key={side}
                className="absolute flex justify-center items-end overflow-hidden"
                style={{
                  top: 60,
                  left: idx === 0 ? 80 : 150,
                  width: 28,
                  height: isTyping
                    ? 4 // fully closed when typing password
                    : blink
                    ? 6 // temporary blink
                    : 40, // open eye
                  borderRadius: isTyping || blink ? "2px" : "50% / 60%",
                  backgroundColor: isTyping ? "black" : "white", // black line when typing
                  transition: "all 0.15s ease",
                }}
              >
                {!isTyping && (
                  <div
                    className="bg-black"
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      marginBottom: 4, // pupil at bottom
                      transform: `translate(${eyePos.x}px, 0px)`,
                      transition: "all 0.1s ease",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

        {/* Form */}
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col">
            <Label>Name</Label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col">
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col">
            <Label>Interest</Label>
            <Input
              name="interest"
              value={formData.interest}
              onChange={handleInputChange}
              placeholder="What interests you about Biovance?"
            />
          </div>
          <div className="flex flex-col">
            <Label>Message (Optional)</Label>
            <Input
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Any additional message..."
            />
          </div>
          <div className="mt-6">
            <GradientButton
              variant="variant"
              className="w-full"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Join Waitlist'}
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
}