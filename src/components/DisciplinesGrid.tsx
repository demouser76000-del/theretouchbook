import React from 'react';
import { DISCIPLINES, ProjectDiscipline } from '../data/portfolioData';

interface DisciplinesGridProps {
  onSelectProject: (project: ProjectDiscipline) => void;
  onViewAllClick: () => void;
}

export const DisciplinesGrid: React.FC<DisciplinesGridProps> = ({
  onSelectProject,
  onViewAllClick,
}) => {
  return (
    <section id="work" className="w-full bg-[#eae7e1] py-20 sm:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 sm:mb-20 items-start">
          {/* Left Title */}
          <div className="lg:col-span-6">
            <p className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.24em] text-[#78726b] font-medium mb-4">
              OUR WORK
            </p>
            <h2 className="font-editorial text-[44px] sm:text-[52px] lg:text-[58px] font-normal text-[#191816] leading-[1.08] tracking-[-0.01em]">
              Crafted Across
              <br />
              Creative Disciplines
            </h2>
          </div>

          {/* Right Description & View All */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-2 lg:pt-6">
            <p className="text-[14px] sm:text-[15px] text-[#4d4943] leading-[1.65] max-w-[430px] font-normal mb-6">
              From fashion campaigns to product stories, we bring precision, depth and emotion to every frame. Explore our work across a range of creative verticals.
            </p>
            <div>
              <button
                onClick={onViewAllClick}
                className="inline-flex items-center space-x-2 text-[11px] sm:text-[11.5px] uppercase tracking-[0.22em] text-[#191816] font-medium hover:text-[#504c45] transition-colors group cursor-pointer focus:outline-none"
              >
                <span>VIEW ALL WORK</span>
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-7 gap-y-12 sm:gap-y-14">
          {DISCIPLINES.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProject(item)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container (1:1 Square) */}
              <div className="w-full aspect-square overflow-hidden bg-[#dedad2] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                {/* Subtle highlight overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Title & Number Bar */}
              <div className="mt-3.5 flex items-center justify-between text-[11.5px] sm:text-[12px] font-medium tracking-[0.2em] text-[#191816]">
                <span className="uppercase whitespace-nowrap">{item.title}</span>

                {item.hasLine ? (
                  <>
                    <div className="flex-1 h-[1px] bg-[#bab2a3] mx-3.5" />
                    <span className="text-[#68635c] font-normal">{item.number}</span>
                  </>
                ) : (
                  <span className="text-[#68635c] font-normal ml-auto">{item.number}</span>
                )}
              </div>
            </div>
          ))}

          {/* 8th Slot left empty to match 7-item layout from reference image */}
          <div className="hidden lg:block aspect-square pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
