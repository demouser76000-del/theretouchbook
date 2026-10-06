import React, { useState } from 'react';
import { ASSETS, COLLAGE_ITEMS, CollageItem } from '../data/portfolioData';

interface CollageViewProps {
  onSelectCollageItem: (item: CollageItem) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const CATEGORIES = [
  'ALL',
  'FASHION',
  'ADVERTISING',
  'BEAUTY & HAIR',
  'FOOD & PRODUCT',
  'COMPOSITES',
  'AUTOMOBILES',
  'AI-POWERED',
];

export const CollageView: React.FC<CollageViewProps> = ({
  onSelectCollageItem,
  activeFilter,
  setActiveFilter,
}) => {
  const isItemActive = (categories: string[]) => {
    if (activeFilter === 'ALL') return true;
    return categories.includes(activeFilter);
  };

  return (
    <div className="w-full flex flex-col bg-[#eae6df]">
      {/* Sub-Header Filter Bar */}
      <div className="w-full px-6 sm:px-10 md:px-14 pb-3 sm:pb-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-[#79736c]">
        {/* Left: SELECTED WORK / 2024 — 2026 */}
        <div className="text-[10.5px] sm:text-[11px] uppercase tracking-[0.22em] font-medium text-[#736c64] whitespace-nowrap">
          SELECTED WORK &nbsp;/&nbsp; 2024 &nbsp;—&nbsp; 2026
        </div>

        {/* Right: Filter Tabs */}
        <div className="flex flex-wrap items-center gap-x-5 sm:gap-x-7 gap-y-2 text-[10.5px] sm:text-[11px] uppercase tracking-[0.18em] font-medium">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="relative py-1 cursor-pointer transition-colors focus:outline-none whitespace-nowrap group"
            >
              <span
                className={`${
                  activeFilter === cat ? 'text-[#191816]' : 'text-[#79736c] hover:text-[#191816]'
                } transition-colors`}
              >
                {cat}
              </span>
              {activeFilter === cat ? (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#191816]" />
              ) : (
                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1.5px] bg-[#191816] transition-all duration-300" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 12-Image Full-Bleed Flush Collage Grid */}
      <div className="w-full select-none overflow-hidden bg-[#1a1917] flex flex-col min-h-[680px] md:min-h-[820px] lg:min-h-[880px]">
        {/* ROW 1: 4 Images Across Top (49% Height) */}
        <div className="w-full flex flex-row flex-nowrap h-[340px] sm:h-[410px] lg:h-[440px]">
          {/* 1. Silk Model (27.0%) */}
          <div
            onClick={() => onSelectCollageItem(COLLAGE_ITEMS.silkModel)}
            style={{ width: '27.0%' }}
            className={`h-full relative overflow-hidden group cursor-pointer transition-opacity duration-300 ${
              isItemActive(COLLAGE_ITEMS.silkModel.category) ? 'opacity-100' : 'opacity-25 grayscale'
            }`}
          >
            <img
              src={ASSETS.collageSilkModel}
              alt="Silk Model Portrait"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
          </div>

          {/* 2. Perfume Bottle (19.8%) */}
          <div
            onClick={() => onSelectCollageItem(COLLAGE_ITEMS.perfume)}
            style={{ width: '19.8%' }}
            className={`h-full relative overflow-hidden group cursor-pointer transition-opacity duration-300 ${
              isItemActive(COLLAGE_ITEMS.perfume.category) ? 'opacity-100' : 'opacity-25 grayscale'
            }`}
          >
            <img
              src={ASSETS.collagePerfume}
              alt="Perfume Bottle on Travertine"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
          </div>

          {/* 3. Wet Beauty Macro (25.2%) */}
          <div
            onClick={() => onSelectCollageItem(COLLAGE_ITEMS.wetBeauty)}
            style={{ width: '25.2%' }}
            className={`h-full relative overflow-hidden group cursor-pointer transition-opacity duration-300 ${
              isItemActive(COLLAGE_ITEMS.wetBeauty.category) ? 'opacity-100' : 'opacity-25 grayscale'
            }`}
          >
            <img
              src={ASSETS.collageWetBeauty}
              alt="Wet Hair Beauty Macro"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
          </div>

          {/* 4. Sports Car at Sunset (28.0%) */}
          <div
            onClick={() => onSelectCollageItem(COLLAGE_ITEMS.sportsCar)}
            style={{ width: '28.0%' }}
            className={`h-full relative overflow-hidden group cursor-pointer transition-opacity duration-300 ${
              isItemActive(COLLAGE_ITEMS.sportsCar.category) ? 'opacity-100' : 'opacity-25 grayscale'
            }`}
          >
            <img
              src={ASSETS.collageSportsCar}
              alt="Sports Car in Concrete Architecture"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
          </div>
        </div>

        {/* LOWER SECTION: Rows 2 & 3 (51% Height) */}
        <div className="w-full flex flex-row flex-nowrap h-[350px] sm:h-[420px] lg:h-[450px]">
          {/* Left Block (46.8% Width): Cocktail (18.4%) + White Suit (28.4%) */}
          <div style={{ width: '46.8%' }} className="h-full flex flex-row flex-nowrap">
            {/* 5. Cocktail Splash (18.4% of total = ~39.3% of left block) */}
            <div
              onClick={() => onSelectCollageItem(COLLAGE_ITEMS.cocktail)}
              style={{ width: '39.3%' }}
              className={`h-full relative overflow-hidden group cursor-pointer transition-opacity duration-300 ${
                isItemActive(COLLAGE_ITEMS.cocktail.category) ? 'opacity-100' : 'opacity-25 grayscale'
              }`}
            >
              <img
                src={ASSETS.collageCocktail}
                alt="Whiskey Cocktail Splash"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            </div>

            {/* 6. Man in White Linen Suit (28.4% of total = ~60.7% of left block) */}
            <div
              onClick={() => onSelectCollageItem(COLLAGE_ITEMS.whiteSuit)}
              style={{ width: '60.7%' }}
              className={`h-full relative overflow-hidden group cursor-pointer transition-opacity duration-300 ${
                isItemActive(COLLAGE_ITEMS.whiteSuit.category) ? 'opacity-100' : 'opacity-25 grayscale'
              }`}
            >
              <img
                src={ASSETS.collageWhiteSuit}
                alt="Man in White Suit"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            </div>
          </div>

          {/* Right Block (53.2% Width): 3 Columns Split into 2 Rows */}
          <div style={{ width: '53.2%' }} className="h-full flex flex-row flex-nowrap">
            {/* Column 3: Red Dress Top (50% H) + Underwater Bottom (50% H) (42.3% of right block = 22.5% of total) */}
            <div style={{ width: '42.3%' }} className="h-full flex flex-col">
              {/* 7. Red Dress on Mountain Peak */}
              <div
                onClick={() => onSelectCollageItem(COLLAGE_ITEMS.redDress)}
                className={`w-full h-1/2 relative overflow-hidden group cursor-pointer transition-opacity duration-300 ${
                  isItemActive(COLLAGE_ITEMS.redDress.category) ? 'opacity-100' : 'opacity-25 grayscale'
                }`}
              >
                <img
                  src={ASSETS.collageRedDress}
                  alt="Woman in Red Gown on Mountain"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              </div>

              {/* 10. Underwater Woman */}
              <div
                onClick={() => onSelectCollageItem(COLLAGE_ITEMS.underwater)}
                className={`w-full h-1/2 relative overflow-hidden group cursor-pointer transition-opacity duration-300 ${
                  isItemActive(COLLAGE_ITEMS.underwater.category) ? 'opacity-100' : 'opacity-25 grayscale'
                }`}
              >
                <img
                  src={ASSETS.collageUnderwater}
                  alt="Underwater Fashion Composite"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              </div>
            </div>

            {/* Column 4: Smartphone Top (50% H) + Skincare Bottom (50% H) (30.1% of right block = 16.0% of total) */}
            <div style={{ width: '30.1%' }} className="h-full flex flex-col">
              {/* 8. Smartphone with Crescent Rim Light */}
              <div
                onClick={() => onSelectCollageItem(COLLAGE_ITEMS.smartphone)}
                className={`w-full h-1/2 relative overflow-hidden group cursor-pointer transition-opacity duration-300 ${
                  isItemActive(COLLAGE_ITEMS.smartphone.category) ? 'opacity-100' : 'opacity-25 grayscale'
                }`}
              >
                <img
                  src={ASSETS.collageSmartphone}
                  alt="Smartphone Advertising"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              </div>

              {/* 11. Skincare Dropper & Cream on Travertine */}
              <div
                onClick={() => onSelectCollageItem(COLLAGE_ITEMS.skincare)}
                className={`w-full h-1/2 relative overflow-hidden group cursor-pointer transition-opacity duration-300 ${
                  isItemActive(COLLAGE_ITEMS.skincare.category) ? 'opacity-100' : 'opacity-25 grayscale'
                }`}
              >
                <img
                  src={ASSETS.collageSkincare}
                  alt="Skincare Cosmetics on Stone"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              </div>
            </div>

            {/* Column 5: Tilted Head Top (50% H) + Dark Profile Bottom (50% H) (27.6% of right block = 14.7% of total) */}
            <div style={{ width: '27.6%' }} className="h-full flex flex-col">
              {/* 9. Woman Head Tilted Back */}
              <div
                onClick={() => onSelectCollageItem(COLLAGE_ITEMS.tiltedHead)}
                className={`w-full h-1/2 relative overflow-hidden group cursor-pointer transition-opacity duration-300 ${
                  isItemActive(COLLAGE_ITEMS.tiltedHead.category) ? 'opacity-100' : 'opacity-25 grayscale'
                }`}
              >
                <img
                  src={ASSETS.collageTiltedHead}
                  alt="Sensual Beauty Profile"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              </div>

              {/* 12. Man in Dark Jacket Profile */}
              <div
                onClick={() => onSelectCollageItem(COLLAGE_ITEMS.darkProfile)}
                className={`w-full h-1/2 relative overflow-hidden group cursor-pointer transition-opacity duration-300 ${
                  isItemActive(COLLAGE_ITEMS.darkProfile.category) ? 'opacity-100' : 'opacity-25 grayscale'
                }`}
              >
                <img
                  src={ASSETS.collageDarkProfile}
                  alt="Brutalist Menswear Profile"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
