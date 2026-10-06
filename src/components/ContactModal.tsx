import React, { useState } from 'react';
import { X, Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: 'Fashion Retouching',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#141312]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#ece9e3] text-[#191816] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#dad5cc] flex items-center justify-between bg-[#e5e1d9]">
          <span className="font-editorial text-[16px] tracking-[0.2em] uppercase font-medium text-[#191816]">
            CONTACT &bull; RAHUL NANDA RETOUCHING
          </span>
          <button
            onClick={onClose}
            className="p-1 hover:bg-black/10 transition-colors cursor-pointer text-[#191816]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="border-b border-[#dad4cb] pb-5">
            <h3 className="font-editorial text-[30px] sm:text-[34px] leading-tight text-[#191816] mb-2">
              Let's Create Together.
            </h3>
            <p className="text-[13.5px] text-[#4d4842] leading-relaxed">
              Available for high-fashion campaigns, commercial product stories, editorial beauty, and creative composite projects globally from Ahmedabad, India.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-[#dfd9ce] border border-[#beb6a8] flex items-start space-x-3.5">
              <CheckCircle2 className="w-5 h-5 text-[#24211e] mt-0.5 shrink-0" />
              <div>
                <h4 className="font-medium text-[#191816] text-[15px] mb-1">Inquiry Sent Successfully</h4>
                <p className="text-[13.5px] text-[#555048]">
                  Thank you! Rahul Nanda will review your brief and get back to you with timelines and availability within 24 hours.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#68635b] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Maya Chen"
                    className="w-full bg-[#f4f2ee] border border-[#d2ccc1] px-3.5 py-2.5 text-[13px] text-[#191816] focus:outline-none focus:border-[#191816]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#68635b] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="maya@brand.com"
                    className="w-full bg-[#f4f2ee] border border-[#d2ccc1] px-3.5 py-2.5 text-[13px] text-[#191816] focus:outline-none focus:border-[#191816]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#68635b] mb-1">
                  Creative Vertical
                </label>
                <select
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  className="w-full bg-[#f4f2ee] border border-[#d2ccc1] px-3.5 py-2.5 text-[13px] text-[#191816] focus:outline-none focus:border-[#191816]"
                >
                  <option>Fashion Retouching</option>
                  <option>Beauty &amp; Hair</option>
                  <option>Commercial Advertising</option>
                  <option>Food &amp; Luxury Product</option>
                  <option>Surreal Compositing</option>
                  <option>Automotive Retouching</option>
                  <option>AI-Powered Post-Production</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#68635b] mb-1">
                  Project Scope &amp; Timing
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Share details on number of frames, intended platform, delivery deadline..."
                  className="w-full bg-[#f4f2ee] border border-[#d2ccc1] px-3.5 py-2.5 text-[13px] text-[#191816] focus:outline-none focus:border-[#191816]"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-[11.5px] text-[#736e67] flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Ahmedabad, Gujarat, India</span>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 bg-[#1e1d1b] hover:bg-black text-[#f4f3ef] text-[11.5px] uppercase tracking-[0.2em] font-medium px-6 py-3 cursor-pointer transition-colors"
                >
                  <span>SEND MESSAGE</span>
                  <span>→</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
