import React, { useState } from 'react';
import { ASSETS } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 xl:col-span-6 z-10 flex flex-col justify-between pt-4 sm:pt-8 lg:pt-12">
          <div>
            {/* Kicker */}
            <p className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.24em] text-[#78726b] font-medium mb-6 sm:mb-8">
              PREMIUM PHOTO RETOUCHING & CREATIVE POST-PRODUCTION
            </p>

            {/* Headline */}
            <h1 className="font-editorial text-[48px] sm:text-[62px] md:text-[68px] xl:text-[75px] font-normal text-[#191816] leading-[1.05] tracking-[-0.01em] mb-7 sm:mb-8">
              Where the image
              <br />
              becomes an idea.
            </h1>

            {/* Paragraph */}
            <p className="text-[14.5px] sm:text-[15.5px] text-[#48443e] leading-[1.68] max-w-[435px] font-normal mb-8 sm:mb-10">
              We are a creative post-production studio based in Ahmedabad, working with brands and creators to craft striking, refined and intentional visuals.
            </p>

            {/* CTA Button */}
            <div className="mb-14 sm:mb-20">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center space-x-3 bg-[#1e1d1b] hover:bg-[#2d2c29] text-[#f4f3ef] text-[11px] sm:text-[11.5px] uppercase tracking-[0.22em] font-medium px-7 py-3.5 transition-all duration-200 cursor-pointer shadow-sm group"
              >
                <span>EXPLORE OUR WORK</span>
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200 font-light">
                  —&gt;
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Left Pagination: 01 ——— 03 */}
          <div className="flex items-center space-x-3 pt-4 sm:pt-8">
            <span
              onClick={() => setCurrentSlide(1)}
              className={`text-[12.5px] tracking-wider font-medium cursor-pointer transition-colors ${
                currentSlide === 1 ? 'text-[#191816]' : 'text-[#8c867e]'
              }`}
            >
              01
            </span>
            <div
              onClick={() => setCurrentSlide((prev) => (prev === 1 ? 2 : 1))}
              className="w-14 sm:w-16 h-[1.5px] bg-[#191816] cursor-pointer"
            />
            <span
              onClick={() => setCurrentSlide(3)}
              className={`text-[12.5px] tracking-wider cursor-pointer transition-colors ${
                currentSlide === 3 ? 'text-[#191816] font-medium' : 'text-[#8c867e] font-normal'
              }`}
            >
              03
            </span>
          </div>
        </div>

        {/* Right Column: Hero Model */}
        <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col justify-end">
          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] aspect-[4/5] sm:aspect-[3.6/4.5] overflow-hidden">
              <img
                src={ASSETS.heroModel}
                alt="High-end beauty retouching portrait"
                className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-[1.01]"
              />
              {/* Subtle vignette/edge blending if needed to match natural background */}
              <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-5 bg-gradient-to-t from-transparent via-transparent to-stone-200" />
            </div>
          </div>

          {/* Bottom Right Category Tags & Horizontal Rule */}
          <div className="w-full flex items-center justify-between sm:justify-end mt-4 sm:mt-6 pt-2">
            <span className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.22em] text-[#8c8375] font-medium whitespace-nowrap">
              FASHION &nbsp;/&nbsp; BEAUTY &nbsp;/&nbsp; ADVERTISING
            </span>
            <div className="hidden sm:block flex-1 max-w-[200px] lg:max-w-[240px] h-[1px] bg-[#b8b0a3] ml-6" />
          </div>
        </div>
      </div>
    </section>
  );
};
