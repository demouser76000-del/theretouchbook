import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';

export interface ModalProjectItem {
  id: string;
  number?: string;
  title: string;
  category: string;
  image: string;
  client: string;
  year: string;
  description: string;
  deliverables: string[];
}

interface ProjectModalProps {
  project: ModalProjectItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onPrev,
  onNext,
}) => {
  if (!project) return null;

  const [compareMode, setCompareMode] = useState<'after' | 'before'>('after');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#141312]/85 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#ece9e3] text-[#191816] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-[#dad5cc] flex items-center justify-between bg-[#e5e1d9]">
          <div className="flex items-center space-x-3 text-[11.5px] uppercase tracking-[0.2em] text-[#69635a]">
            {project.number && <span>{project.number}</span>}
            {project.number && <span>/</span>}
            <span className="text-[#191816] font-medium">{project.title}</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCompareMode(compareMode === 'after' ? 'before' : 'after')}
              className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#1e1d1b] text-white text-[11px] uppercase tracking-wider transition-colors hover:bg-black cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{compareMode === 'after' ? 'Show Raw Plate' : 'Show Retouched'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:bg-black/10 transition-colors cursor-pointer text-[#191816]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
          {/* Main Showcase Image */}
          <div className="lg:col-span-7 bg-[#23211f] flex items-center justify-center relative min-h-[360px] sm:min-h-[460px] select-none">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover max-h-[600px] transition-all duration-300 ${
                compareMode === 'before' ? 'filter grayscale contrast-90 brightness-90' : 'filter contrast-105'
              }`}
            />
            {compareMode === 'before' && (
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 text-[10.5px] tracking-widest text-[#f5f4f0] uppercase font-mono">
                [RAW / UNGRADED PLATE]
              </div>
            )}
            {compareMode === 'after' && (
              <div className="absolute top-4 left-4 bg-[#191816]/70 backdrop-blur-sm px-3 py-1 text-[10.5px] tracking-widest text-[#f5f4f0] uppercase flex items-center space-x-1.5">
                <Sparkles className="w-3 h-3 text-[#ded8cc]" />
                <span>FINAL MASTER RETOUCH</span>
              </div>
            )}

            {/* Navigation arrows */}
            {onPrev && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                  setCompareMode('after');
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/75 text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {onNext && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                  setCompareMode('after');
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/75 text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Project Details Sidebar */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#ece9e3]">
            <div>
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-[0.24em] text-[#7a746c] font-medium">
                  {project.category}
                </span>
                <h3 className="font-editorial text-[30px] sm:text-[36px] font-normal text-[#191816] leading-tight mt-1">
                  {project.title}
                </h3>
              </div>

              <p className="text-[14px] text-[#48443e] leading-relaxed mb-6 font-normal">
                {project.description}
              </p>

              {/* Specs */}
              <div className="border-t border-[#d8d3c9] pt-4 mb-6 space-y-2.5 text-[12px]">
                <div className="flex justify-between">
                  <span className="text-[#78726b] uppercase tracking-wider">Client</span>
                  <span className="text-[#191816] font-medium">{project.client}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#78726b] uppercase tracking-wider">Year</span>
                  <span className="text-[#191816] font-medium">{project.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#78726b] uppercase tracking-wider">Studio</span>
                  <span className="text-[#191816] font-medium">Ahmedabad, Gujarat</span>
                </div>
              </div>

              {/* Post-Production Deliverables */}
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#78726b] font-medium block mb-2.5">
                  Studio Post-Production:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[11.5px] bg-[#dfd9ce] text-[#2c2925] px-2.5 py-1 tracking-wide font-normal"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            {(onPrev || onNext) && (
              <div className="mt-8 pt-4 border-t border-[#d8d3c9] flex items-center justify-end space-x-2">
                {onPrev && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onPrev();
                      setCompareMode('after');
                    }}
                    className="px-3 py-1.5 bg-[#dfd9ce] hover:bg-[#d4cdbf] text-xs uppercase tracking-wider text-[#191816] transition-colors cursor-pointer"
                  >
                    Prev
                  </button>
                )}
                {onNext && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNext();
                      setCompareMode('after');
                    }}
                    className="px-3 py-1.5 bg-[#1e1d1b] hover:bg-black text-xs uppercase tracking-wider text-white transition-colors cursor-pointer"
                  >
                    Next
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
