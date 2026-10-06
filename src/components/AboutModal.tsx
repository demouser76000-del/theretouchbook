import React, { useState } from 'react';
import { X, MapPin, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../data/portfolioData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discipline: 'Fashion & Editorial',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#141312]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#ece9e3] text-[#191816] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#dad5cc] flex items-center justify-between bg-[#e5e1d9]">
          <span className="font-editorial text-[16px] tracking-[0.2em] uppercase font-medium text-[#191816]">
            ABOUT THE RETOUCHER BOOK
          </span>
          <button
            onClick={onClose}
            className="p-1 hover:bg-black/10 transition-colors cursor-pointer text-[#191816]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
          {/* Studio Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#78726b] font-medium mb-3">
                STUDIO MANIFESTO
              </p>
              <h3 className="font-editorial text-[36px] sm:text-[42px] leading-[1.12] text-[#191816] mb-5">
                Where the image becomes an idea.
              </h3>
              <p className="text-[14.5px] text-[#4d4842] leading-relaxed mb-4">
                The Retoucher Book is an elite creative post-production studio operating out of Ahmedabad, Gujarat, India. We collaborate with international fashion houses, luxury automotive marques, perfumeries, and visionary photographers worldwide.
              </p>
              <p className="text-[14.5px] text-[#4d4842] leading-relaxed">
                Rather than treating retouching as a mechanical cleanup step, we approach every frame as fine art—balancing microscopic pigment texture, lighting geometry, color science, and evocative mood.
              </p>
            </div>

            <div className="md:col-span-5 aspect-[4/3] bg-[#22201e] overflow-hidden shadow-md">
              <img
                src={ASSETS.architectureShadow}
                alt="Studio space"
                className="w-full h-full object-cover filter contrast-105"
              />
            </div>
          </div>

          {/* Pillars */}
          <div className="border-t border-[#dad5cc] pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#e4dfd7] p-5">
              <h4 className="font-editorial text-[20px] text-[#191816] mb-2">Color Mastery</h4>
              <p className="text-[13px] text-[#555049] leading-relaxed">
                Calibrated Eizo ColorEdge 4K color suites conforming to Rec.709, DCI-P3, and Adobe RGB proofing for international print & digital campaigns.
              </p>
            </div>
            <div className="bg-[#e4dfd7] p-5">
              <h4 className="font-editorial text-[20px] text-[#191816] mb-2">Non-Destructive Craft</h4>
              <p className="text-[13px] text-[#555049] leading-relaxed">
                Pristine 16-bit workflow preserving organic skin micro-pores, authentic fabric weaves, and natural optical depth without synthetic plasticizing.
              </p>
            </div>
            <div className="bg-[#e4dfd7] p-5">
              <h4 className="font-editorial text-[20px] text-[#191816] mb-2">Hybrid Synthesis</h4>
              <p className="text-[13px] text-[#555049] leading-relaxed">
                Bridging multi-plate physical camera captures with cutting-edge optical fluid simulations and generative post-production layers.
              </p>
            </div>
          </div>

          {/* Studio Contact / Inquiry Form */}
          <div className="border-t border-[#dad5cc] pt-8">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#78726b] font-medium mb-2">
                COMMISSIONS & INQUIRIES
              </p>
              <h4 className="font-editorial text-[28px] text-[#191816] mb-4">
                Work With The Studio
              </h4>

              {inquirySent ? (
                <div className="p-6 bg-[#ded8ce] border border-[#beb6a8] flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#24211e]" />
                  <p className="text-[14px] text-[#191816]">
                    Thank you. Your project brief has been received. Our senior retouching director will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#6a645b] mb-1">
                        Name / Agency
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Elena Rostova / Vogue"
                        className="w-full bg-[#f4f2ee] border border-[#d2ccc1] px-3.5 py-2.5 text-[13px] text-[#191816] focus:outline-none focus:border-[#191816]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#6a645b] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@studio.com"
                        className="w-full bg-[#f4f2ee] border border-[#d2ccc1] px-3.5 py-2.5 text-[13px] text-[#191816] focus:outline-none focus:border-[#191816]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#6a645b] mb-1">
                      Vertical
                    </label>
                    <select
                      value={formData.discipline}
                      onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                      className="w-full bg-[#f4f2ee] border border-[#d2ccc1] px-3.5 py-2.5 text-[13px] text-[#191816] focus:outline-none focus:border-[#191816]"
                    >
                      <option>Fashion & Editorial</option>
                      <option>Beauty & Cosmetics</option>
                      <option>Food & Luxury Product</option>
                      <option>Advertising & Commercial</option>
                      <option>Composites & Matte Painting</option>
                      <option>Automotive & Mobility</option>
                      <option>AI-Powered Post-Production</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#6a645b] mb-1">
                      Project Notes / Scope
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project details, number of frames, timeline, or color reference..."
                      className="w-full bg-[#f4f2ee] border border-[#d2ccc1] px-3.5 py-2.5 text-[13px] text-[#191816] focus:outline-none focus:border-[#191816]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 bg-[#1e1d1b] hover:bg-black text-[#f4f3ef] text-[11.5px] uppercase tracking-[0.2em] font-medium px-6 py-3 cursor-pointer transition-colors"
                  >
                    <span>SEND INQUIRY</span>
                    <span>→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
