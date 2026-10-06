import React from 'react';
import { X, CheckCircle, Layers, Sliders, Palette, ShieldCheck } from 'lucide-react';

interface ApproachModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApproachModal: React.FC<ApproachModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#141312]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#ece9e3] text-[#191816] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#dad5cc] flex items-center justify-between bg-[#e5e1d9]">
          <span className="font-editorial text-[16px] tracking-[0.2em] uppercase font-medium text-[#191816]">
            MY APPROACH &amp; PHILOSOPHY
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
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#78726b] font-medium mb-2">
              RAHUL NANDA'S MANIFESTO
            </p>
            <h3 className="font-editorial text-[32px] sm:text-[38px] leading-tight text-[#191816] mb-4">
              Precision Creates Emotion.
            </h3>
            <p className="text-[14px] text-[#4d4842] leading-relaxed">
              "Over 13 years in the commercial retouching realm, I've observed that great post-production is invisible. It doesn't scream 'retouched'; it commands attention through subtle lighting balance, organic texture preservation, and emotional resonance."
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#e4dfd7] p-4.5 border border-[#dad4cb]">
              <div className="flex items-center space-x-2.5 mb-2 text-[#191816]">
                <Layers className="w-4 h-4" />
                <h4 className="font-editorial text-[18px]">Non-Destructive Craft</h4>
              </div>
              <p className="text-[12.5px] text-[#555048] leading-relaxed">
                Separating high-frequency micro-pores from low-frequency skin tones ensures portraits retain genuine human warmth without artificial plastic smoothing.
              </p>
            </div>

            <div className="bg-[#e4dfd7] p-4.5 border border-[#dad4cb]">
              <div className="flex items-center space-x-2.5 mb-2 text-[#191816]">
                <Palette className="w-4 h-4" />
                <h4 className="font-editorial text-[18px]">Color Harmonization</h4>
              </div>
              <p className="text-[12.5px] text-[#555048] leading-relaxed">
                Hardware-calibrated color matching conforms strictly across digital campaigns, outdoor print billboards, and luxury print publication standards.
              </p>
            </div>

            <div className="bg-[#e4dfd7] p-4.5 border border-[#dad4cb]">
              <div className="flex items-center space-x-2.5 mb-2 text-[#191816]">
                <Sliders className="w-4 h-4" />
                <h4 className="font-editorial text-[18px]">Micro Dodge &amp; Burn</h4>
              </div>
              <p className="text-[12.5px] text-[#555048] leading-relaxed">
                Sculpting light down to individual specular catchlights and bone contours to amplify natural three-dimensional depth and focal hierarchy.
              </p>
            </div>

            <div className="bg-[#e4dfd7] p-4.5 border border-[#dad4cb]">
              <div className="flex items-center space-x-2.5 mb-2 text-[#191816]">
                <ShieldCheck className="w-4 h-4" />
                <h4 className="font-editorial text-[18px]">Client-First Partnership</h4>
              </div>
              <p className="text-[12.5px] text-[#555048] leading-relaxed">
                Transparent revision rounds, rapid turnaround, and dedicated direct communication with photographers, art directors, and creative leads.
              </p>
            </div>
          </div>

          <div className="pt-2 text-right">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-[#1e1d1b] hover:bg-black text-white text-xs uppercase tracking-widest cursor-pointer transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
