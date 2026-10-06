/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { AboutPage } from './components/AboutPage';
import { CollageView } from './components/CollageView';
import { Hero } from './components/Hero';
import { DisciplinesGrid } from './components/DisciplinesGrid';
import { DarkFeatureBanner } from './components/DarkFeatureBanner';
import { ProjectModal, ModalProjectItem } from './components/ProjectModal';
import { ApproachModal } from './components/ApproachModal';
import { ContactModal } from './components/ContactModal';
import {
  DISCIPLINES,
  COLLAGE_ITEMS,
  CollageItem,
  ProjectDiscipline,
} from './data/portfolioData';

export default function App() {
  // Default to 'about' to match "Rahul Nanda Retouching Studio About Page.png" as PRIMARY SOURCE OF TRUTH
  const [activeTab, setActiveTab] = useState<string>('about');
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [selectedModalItem, setSelectedModalItem] = useState<ModalProjectItem | null>(null);
  const [isApproachOpen, setIsApproachOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  // Convert CollageItem to ModalProjectItem
  const handleSelectCollageItem = (item: CollageItem) => {
    setSelectedModalItem({
      id: item.id,
      title: item.title,
      category: item.category.join(' / '),
      image: item.image,
      client: item.client,
      year: item.year,
      description: item.description,
      deliverables: item.deliverables,
    });
  };

  // Convert ProjectDiscipline to ModalProjectItem
  const handleSelectDiscipline = (item: ProjectDiscipline) => {
    setSelectedModalItem({
      id: item.id,
      number: item.number,
      title: item.title,
      category: item.category,
      image: item.image,
      client: item.client,
      year: item.year,
      description: item.description,
      deliverables: item.deliverables,
    });
  };

  const collageItemList = Object.values(COLLAGE_ITEMS);

  const handlePrevCollage = () => {
    if (!selectedModalItem) return;
    const currentIndex = collageItemList.findIndex((c) => c.id === selectedModalItem.id);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + collageItemList.length) % collageItemList.length;
    handleSelectCollageItem(collageItemList[prevIndex]);
  };

  const handleNextCollage = () => {
    if (!selectedModalItem) return;
    const currentIndex = collageItemList.findIndex((c) => c.id === selectedModalItem.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % collageItemList.length;
    handleSelectCollageItem(collageItemList[nextIndex]);
  };

  const handleServiceSelect = (serviceTitle: string) => {
    // Navigate to work with relevant filter
    if (serviceTitle.includes('Fashion')) setActiveFilter('FASHION');
    else if (serviceTitle.includes('Beauty')) setActiveFilter('BEAUTY & HAIR');
    else if (serviceTitle.includes('Advertising')) setActiveFilter('ADVERTISING');
    else if (serviceTitle.includes('Food') || serviceTitle.includes('Product')) setActiveFilter('FOOD & PRODUCT');
    else if (serviceTitle.includes('Compositing')) setActiveFilter('COMPOSITES');
    else if (serviceTitle.includes('Automobiles')) setActiveFilter('AUTOMOBILES');
    else if (serviceTitle.includes('AI')) setActiveFilter('AI-POWERED');
    else setActiveFilter('ALL');

    setActiveTab('work');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#eae6df] text-[#191816] selection:bg-[#191816] selection:text-white flex flex-col font-sans">
      {/* 1. Header & Navigation (Exact Rahul Nanda Retouching Navbar) */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 2. Main Page Content based on activeTab */}
      <main className="w-full flex-1 flex flex-col">
        {activeTab === 'about' && (
          /* ABOUT VIEW: Pixel-accurate recreation of "Rahul Nanda Retouching Studio About Page.png" */
          <AboutPage
            onOpenApproach={() => setIsApproachOpen(true)}
            onSelectService={handleServiceSelect}
          />
        )}

        {activeTab === 'work' && (
          /* WORK VIEW: The 12-image Portfolio Collage with category filters */
          <CollageView
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            onSelectCollageItem={handleSelectCollageItem}
          />
        )}

        {activeTab === 'home' && (
          /* HOME VIEW: Full Editorial Studio Homepage */
          <div className="w-full flex flex-col">
            <Hero
              onExploreClick={() => {
                setActiveTab('work');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <DisciplinesGrid
              onSelectProject={handleSelectDiscipline}
              onViewAllClick={() => {
                setActiveTab('work');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <DarkFeatureBanner onOpenAbout={() => setActiveTab('about')} />
          </div>
        )}
      </main>

      {/* Interactive Lightbox / Retouching Inspector Modal */}
      <ProjectModal
        project={selectedModalItem}
        onClose={() => setSelectedModalItem(null)}
        onPrev={activeTab === 'work' ? handlePrevCollage : undefined}
        onNext={activeTab === 'work' ? handleNextCollage : undefined}
      />

      {/* Approach & Philosophy Deep Dive Modal */}
      <ApproachModal
        isOpen={isApproachOpen}
        onClose={() => setIsApproachOpen(false)}
      />

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
