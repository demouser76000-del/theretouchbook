import React from 'react';
import { MapPin } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenContact,
}) => {
  return (
    <header className="w-full px-6 sm:px-12 md:px-16 pt-7 pb-5 flex items-center justify-between border-b border-[#dad5cb]/50 bg-[#eae6df]">
      {/* Brand Logo: RAHUL NANDA RETOUCHING */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setActiveTab('about');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex flex-col group cursor-pointer select-none"
      >
        <span className="font-sans text-[15px] sm:text-[16.5px] tracking-[0.16em] font-extrabold text-[#191816] uppercase leading-none">
          RAHUL NANDA
        </span>
        <span className="font-sans text-[9.5px] sm:text-[10.5px] tracking-[0.38em] font-light text-[#191816] uppercase leading-none mt-1">
          RETOUCHING
        </span>
      </a>

      {/* Nav Links: HOME   WORK   ABOUT   CONTACT */}
      <nav className="flex items-center space-x-6 sm:space-x-9 md:space-x-11 text-[11.5px] sm:text-[12.5px] tracking-[0.18em] text-[#191816] font-medium uppercase">
        {/* HOME */}
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="relative py-1 cursor-pointer focus:outline-none group"
        >
          <span className={`tracking-[0.18em] ${activeTab === 'home' ? 'text-[#191816]' : 'text-[#36332f] hover:text-[#191816]'} transition-colors`}>
            HOME
          </span>
          {activeTab === 'home' ? (
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#191816]" />
          ) : (
            <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1.5px] bg-[#191816] transition-all duration-300" />
          )}
        </button>

        {/* WORK */}
        <button
          onClick={() => {
            setActiveTab('work');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="relative py-1 cursor-pointer focus:outline-none group"
        >
          <span className={`tracking-[0.18em] ${activeTab === 'work' ? 'text-[#191816]' : 'text-[#36332f] hover:text-[#191816]'} transition-colors`}>
            WORK
          </span>
          {activeTab === 'work' ? (
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#191816]" />
          ) : (
            <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1.5px] bg-[#191816] transition-all duration-300" />
          )}
        </button>

        {/* ABOUT */}
        <button
          onClick={() => {
            setActiveTab('about');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="relative py-1 cursor-pointer focus:outline-none group"
        >
          <span className={`tracking-[0.18em] ${activeTab === 'about' ? 'text-[#191816]' : 'text-[#36332f] hover:text-[#191816]'} transition-colors`}>
            ABOUT
          </span>
          {activeTab === 'about' ? (
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#191816]" />
          ) : (
            <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1.5px] bg-[#191816] transition-all duration-300" />
          )}
        </button>

        {/* CONTACT */}
        <button
          onClick={onOpenContact}
          className="relative py-1 cursor-pointer focus:outline-none group"
        >
          <span className="tracking-[0.18em] text-[#36332f] hover:text-[#191816] transition-colors">
            CONTACT
          </span>
          <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1.5px] bg-[#191816] transition-all duration-300" />
        </button>
      </nav>

      {/* Right Location: 📍 Ahmedabad, India */}
      <div className="hidden md:flex items-center space-x-1.5 text-[12px] text-[#555048] font-normal tracking-wide">
        <MapPin className="w-3.5 h-3.5 stroke-[1.6] text-[#6b655d]" />
        <span>Ahmedabad, India</span>
      </div>
    </header>
  );
};
