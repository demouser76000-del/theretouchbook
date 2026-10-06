import React from 'react';
import { MapPin } from 'lucide-react';
import { ASSETS } from '../data/portfolioData';

interface DarkFeatureBannerProps {
  onOpenAbout: () => void;
}

export const DarkFeatureBanner: React.FC<DarkFeatureBannerProps> = ({ onOpenAbout }) => {
  return (
    <section id="about" className="relative w-full bg-[#141312] overflow-hidden py-20 sm:py-28 text-[#edeae3]">
      {/* Background Rocky Mountain Texture */}
      <div className="absolute inset-0 z-0 opacity-45 mix-blend-luminosity pointer-events-none">
        <img
          src={ASSETS.darkMountainBg}
          alt="Dark textured mountain cliff background"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141312]/90 via-[#141312]/60 to-[#141312]/80" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Mission & Location */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Kicker */}
              <p className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.24em] text-[#8e877e] font-medium mb-6 sm:mb-8">
                THE RETOUCHER BOOK
              </p>

              {/* 3-line Headline */}
              <h2 className="font-editorial text-[38px] sm:text-[46px] lg:text-[54px] font-normal text-[#eeebe4] leading-[1.14] tracking-[-0.01em] mb-12 sm:mb-16">
                Precision retouching.
                <br />
                Thoughtful post-production.
                <br />
                Images with intention.
              </h2>
            </div>

            {/* Location Pin */}
            <div className="flex items-center space-x-2.5 text-[#9e978d] text-[12px] sm:text-[12.5px] tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-[#9e978d] stroke-[1.6]" />
              <span className="font-light">Ahmedabad, Gujarat, India</span>
            </div>
          </div>

          {/* Right Column: Architectural Inset Image & About Us Link */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end">
            <div className="w-full max-w-[420px]">
              {/* Architectural Light Study Inset */}
              <div className="w-full aspect-[4/3] bg-[#22201e] overflow-hidden mb-6 shadow-2xl relative">
                <img
                  src={ASSETS.architectureShadow}
                  alt="Architectural light and geometric shadow study"
                  className="w-full h-full object-cover object-center filter contrast-110"
                />
              </div>

              {/* ABOUT US Link */}
              <div className="flex items-center justify-end w-full">
                <div className="flex items-center space-x-4 group cursor-pointer" onClick={onOpenAbout}>
                  <div className="w-12 sm:w-16 h-[1px] bg-[#666057] group-hover:bg-[#d9d5ce] transition-colors" />
                  <span className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.22em] text-[#d9d5ce] font-medium group-hover:text-white transition-colors">
                    ABOUT US
                  </span>
                  <span className="text-[13px] text-[#d9d5ce] group-hover:text-white transform group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
