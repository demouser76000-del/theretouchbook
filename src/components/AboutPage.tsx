import React from 'react';
import { MapPin } from 'lucide-react';
import { ASSETS } from '../data/portfolioData';
import { Signature } from './Signature';

interface AboutPageProps {
  onOpenApproach: () => void;
  onSelectService: (serviceName: string) => void;
}

const SERVICES_LIST = [
  { num: '01', title: 'Fashion Retouching' },
  { num: '02', title: 'Beauty & Hair' },
  { num: '03', title: 'Advertising' },
  { num: '04', title: 'Food & Product' },
  { num: '05', title: 'Compositing' },
  { num: '06', title: 'Automobiles' },
  { num: '07', title: 'AI-Powered Visuals' },
];

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenApproach,
  onSelectService,
}) => {
  return (
    <div className="w-full bg-[#eae6df] text-[#191816] flex flex-col">
      {/* 1. TOP HERO SECTION */}
      <section className="w-full px-6 sm:px-12 md:px-16 pt-4 sm:pt-8 pb-14 sm:pb-20 border-b border-[#d8d3c9]/70">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Story & Bio */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            {/* Kicker with horizontal line */}
            <div className="flex items-center space-x-3 mb-5 sm:mb-6">
              <span className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.24em] text-[#78726b] font-medium">
                ABOUT US
              </span>
              <div className="w-10 sm:w-12 h-[1px] bg-[#beb7ab]" />
            </div>

            {/* 3-Line Headline */}
            <h1 className="font-editorial text-[44px] sm:text-[54px] lg:text-[62px] font-normal text-[#191816] leading-[1.08] tracking-[-0.01em] mb-6 sm:mb-7">
              Hi, I’m Rahul Nanda.
              <br />
              A Retoucher &amp; Visual
              <br />
              Storyteller.
            </h1>

            {/* Bio Paragraph */}
            <p className="text-[14px] sm:text-[14.5px] text-[#4a4640] leading-[1.68] max-w-[440px] font-normal mb-8 sm:mb-9">
              I’m a passionate retoucher and editing professional with over 13 years of experience in the field. My journey began at the age of 17 when I discovered my love for photography and editing. What started as a hobby quickly evolved into a fulfilling career as I embraced the world of visual storytelling.
            </p>

            {/* Signature */}
            <div className="pt-1">
              <Signature />
            </div>
          </div>

          {/* Right Column: 3D Pixar Avatar of Rahul Nanda */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-[620px] aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-[#dcd7ce] shadow-sm">
              <img
                src={ASSETS.rahulNandaHero}
                alt="Rahul Nanda 3D Character at retouching studio desk"
                className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-[1.01]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE-COLUMN BOTTOM SECTION */}
      <section className="w-full px-6 sm:px-12 md:px-16 py-14 sm:py-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Column 1: OUR PHILOSOPHY (Col-span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Kicker */}
              <div className="flex items-center space-x-3 mb-5">
                <span className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.24em] text-[#78726b] font-medium">
                  OUR PHILOSOPHY
                </span>
                <div className="w-10 sm:w-12 h-[1px] bg-[#beb7ab]" />
              </div>

              {/* Headline */}
              <h2 className="font-editorial text-[36px] sm:text-[42px] font-normal text-[#191816] leading-[1.12] tracking-[-0.01em] mb-5">
                Precision
                <br />
                Creates Emotion.
              </h2>

              {/* Paragraph */}
              <p className="text-[13.5px] sm:text-[14px] text-[#4d4842] leading-[1.65] max-w-[340px] font-normal mb-7">
                For me, retouching is not just about making images look perfect — it’s about bringing out the emotion, detail and intention behind every frame. I believe in clean, natural, impactful edits that enhance the story, not overpower it.
              </p>
            </div>

            {/* MY APPROACH Link */}
            <div>
              <button
                onClick={onOpenApproach}
                className="inline-flex items-center space-x-2 text-[11px] sm:text-[11.5px] uppercase tracking-[0.2em] text-[#191816] font-medium group cursor-pointer focus:outline-none"
              >
                <span className="border-b border-[#191816] pb-0.5">MY APPROACH</span>
                <span className="inline-block transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Column 2: WHAT I DO + WORKSPACE PHOTO (Col-span 5) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            {/* Left part: 7 Services List (5 cols) */}
            <div className="sm:col-span-5 flex flex-col">
              <div className="flex items-center space-x-3 mb-5">
                <span className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.24em] text-[#78726b] font-medium">
                  WHAT I DO
                </span>
                <div className="w-8 sm:w-10 h-[1px] bg-[#beb7ab]" />
              </div>

              <div className="space-y-3.5">
                {SERVICES_LIST.map((srv) => (
                  <div
                    key={srv.num}
                    onClick={() => onSelectService(srv.title)}
                    className="flex items-center text-[13.5px] text-[#22201d] font-normal cursor-pointer hover:text-black group transition-colors"
                  >
                    <span className="text-[12px] text-[#868077] w-6 mr-3 font-normal group-hover:text-[#191816] transition-colors">
                      {srv.num}
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {srv.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right part: Workstation Photo (7 cols) */}
            <div className="sm:col-span-7 aspect-[4/3] bg-[#22201e] overflow-hidden shadow-sm mt-2 sm:mt-0">
              <img
                src={ASSETS.retouchingWorkstation}
                alt="Retouching studio workstation with monitor and pen tablet"
                className="w-full h-full object-cover object-center filter contrast-105"
              />
            </div>
          </div>

          {/* Column 3: THE STUDIO (Col-span 3) */}
          <div className="lg:col-span-3 flex flex-col justify-between pl-0 lg:pl-4">
            <div>
              {/* Kicker */}
              <div className="flex items-center space-x-3 mb-5">
                <span className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.24em] text-[#78726b] font-medium">
                  THE STUDIO
                </span>
                <div className="w-8 sm:w-10 h-[1px] bg-[#beb7ab]" />
              </div>

              {/* 4-Line Headline */}
              <h3 className="font-editorial text-[32px] sm:text-[38px] font-normal text-[#191816] leading-[1.1] tracking-[-0.01em] mb-5">
                Better
                <br />
                Images.
                <br />
                Bigger
                <br />
                Ideas.
              </h3>

              {/* Description */}
              <p className="text-[13px] sm:text-[13.5px] text-[#524d46] leading-[1.62] max-w-[220px] font-normal mb-8">
                At The Retoucher Book, we combine technical expertise with creative vision to deliver visuals that make an impact.
              </p>
            </div>

            {/* Location Tag */}
            <div className="flex items-center space-x-2 text-[#6e6860] text-[12px]">
              <MapPin className="w-3.5 h-3.5 stroke-[1.6] text-[#78726b]" />
              <span className="font-light">Ahmedabad, Gujarat, India</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
