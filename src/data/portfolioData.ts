export interface ProjectDiscipline {
  id: string;
  number: string;
  title: string;
  hasLine: boolean;
  image: string;
  category: string;
  client: string;
  year: string;
  description: string;
  deliverables: string[];
}

export interface CollageItem {
  id: string;
  title: string;
  category: string[];
  image: string;
  client: string;
  year: string;
  description: string;
  deliverables: string[];
}

// Turned 1 assets
import heroModelImg from '@/src/assets/images/hero_retoucher_model_1791263583676.jpg';
import workFashionImg from '@/src/assets/images/work_fashion_1791263599481.jpg';
import workBeautyHairImg from '@/src/assets/images/work_beauty_hair_1791263613232.jpg';
import workFoodProductImg from '@/src/assets/images/work_food_product_1791263627710.jpg';
import workAdvertisingImg from '@/src/assets/images/work_advertising_1791263642464.jpg';
import workCompositesImg from '@/src/assets/images/work_composites_1791263656380.jpg';
import workAutomobilesImg from '@/src/assets/images/work_automobiles_1791263673019.jpg';
import workAiPoweredImg from '@/src/assets/images/work_ai_powered_1791263685613.jpg';
import darkMountainBgImg from '@/src/assets/images/dark_mountain_bg_1791263700363.jpg';
import architectureShadowImg from '@/src/assets/images/architecture_shadow_1791263719908.jpg';

// Turned 2 Collage assets
import collageSilkModelImg from '@/src/assets/images/collage_silk_model_1791264068227.jpg';
import collagePerfumeImg from '@/src/assets/images/collage_perfume_1791264109817.jpg';
import collageWetBeautyImg from '@/src/assets/images/collage_wet_beauty_1791264131966.jpg';
import collageSportsCarImg from '@/src/assets/images/collage_sports_car_1791264149650.jpg';
import collageCocktailImg from '@/src/assets/images/collage_cocktail_1791264167299.jpg';
import collageWhiteSuitImg from '@/src/assets/images/collage_white_suit_1791264183060.jpg';
import collageRedDressImg from '@/src/assets/images/collage_red_dress_1791264204073.jpg';
import collageSmartphoneImg from '@/src/assets/images/collage_smartphone_1791264231066.jpg';
import collageTiltedHeadImg from '@/src/assets/images/collage_tilted_head_1791264249216.jpg';
import collageUnderwaterImg from '@/src/assets/images/collage_underwater_1791264270510.jpg';
import collageSkincareImg from '@/src/assets/images/collage_skincare_1791264290660.jpg';
import collageDarkProfileImg from '@/src/assets/images/collage_dark_profile_1791264305796.jpg';

// About Page assets
import rahulNandaHeroImg from '@/src/assets/images/rahul_nanda_hero_1791264598736.jpg';
import retouchingWorkstationImg from '@/src/assets/images/retouching_workstation_1791264617943.jpg';

export const ASSETS = {
  heroModel: heroModelImg,
  workFashion: workFashionImg,
  workBeautyHair: workBeautyHairImg,
  workFoodProduct: workFoodProductImg,
  workAdvertising: workAdvertisingImg,
  workComposites: workCompositesImg,
  workAutomobiles: workAutomobilesImg,
  workAiPowered: workAiPoweredImg,
  darkMountainBg: darkMountainBgImg,
  architectureShadow: architectureShadowImg,
  // Collage assets
  collageSilkModel: collageSilkModelImg,
  collagePerfume: collagePerfumeImg,
  collageWetBeauty: collageWetBeautyImg,
  collageSportsCar: collageSportsCarImg,
  collageCocktail: collageCocktailImg,
  collageWhiteSuit: collageWhiteSuitImg,
  collageRedDress: collageRedDressImg,
  collageSmartphone: collageSmartphoneImg,
  collageTiltedHead: collageTiltedHeadImg,
  collageUnderwater: collageUnderwaterImg,
  collageSkincare: collageSkincareImg,
  collageDarkProfile: collageDarkProfileImg,
  // About page assets
  rahulNandaHero: rahulNandaHeroImg,
  retouchingWorkstation: retouchingWorkstationImg,
};

export const COLLAGE_ITEMS: Record<string, CollageItem> = {
  silkModel: {
    id: 'silk-model',
    title: 'SILK & SHADOW STUDY',
    category: ['FASHION', 'BEAUTY & HAIR'],
    image: collageSilkModelImg,
    client: 'Maison D’Or',
    year: '2026',
    description: 'High fashion editorial lighting study capturing raw sunlight geometry across textured stucco, gold luster, and drape folds.',
    deliverables: ['Dodge & Burn Sculpting', 'Skin Radiance Balancing', 'Shadow Sharpness Grading']
  },
  perfume: {
    id: 'perfume',
    title: 'ATELIER AMBER FRAGRANCE',
    category: ['FOOD & PRODUCT', 'ADVERTISING'],
    image: collagePerfumeImg,
    client: 'Nobile Parfumerie',
    year: '2026',
    description: 'Minimalist product still life with amber flacon perched upon travertine stones in direct sun.',
    deliverables: ['Glass Specular Cleanup', 'Fluid Caustics Grading', 'Stone Texture Amplification']
  },
  wetBeauty: {
    id: 'wet-beauty',
    title: 'DEWY BOTANICAL BEAUTY',
    category: ['BEAUTY & HAIR'],
    image: collageWetBeautyImg,
    client: 'Aura Skincare',
    year: '2026',
    description: 'Macro beauty portrait capturing wet hair micro-strands, authentic skin pores, and natural freckle patterns.',
    deliverables: ['High-Frequency Separation', 'Pore Micro-Contrast', 'Iris Color Calibration']
  },
  sportsCar: {
    id: 'sports-car',
    title: 'TURISMO GT ARCHITECTURAL',
    category: ['AUTOMOBILES', 'ADVERTISING'],
    image: collageSportsCarImg,
    client: 'Stuttgart Dynamics',
    year: '2026',
    description: 'Sleek sports car positioned on raw concrete terrace beneath brutalist overhang at sunset.',
    deliverables: ['Metallic Paint Highlight Sculpting', 'Sky Gradient Replacement', 'Reflection Integration']
  },
  cocktail: {
    id: 'cocktail',
    title: 'AMBER CITRUS NEGRONI',
    category: ['FOOD & PRODUCT', 'ADVERTISING'],
    image: collageCocktailImg,
    client: 'Heritage Distillers',
    year: '2025',
    description: 'High-speed shutter liquid freeze capturing droplet trajectories and ice clarity in crystal glassware.',
    deliverables: ['Droplet Sharpening', 'Fluid Clarity Retouching', 'Amber Liquid Glow Mapping']
  },
  whiteSuit: {
    id: 'white-suit',
    title: 'SOLAR LINEN TAILORING',
    category: ['FASHION', 'ADVERTISING'],
    image: collageWhiteSuitImg,
    client: 'Sartoria Riviera',
    year: '2026',
    description: 'Double-breasted cream suit in Mediterranean sun with angular architectural shadows.',
    deliverables: ['Textile Weave Restoration', 'Shadow Gradient Smoothing', 'Color Uniformity']
  },
  redDress: {
    id: 'red-dress',
    title: 'ALPINE CRIMSON DRIFT',
    category: ['FASHION', 'COMPOSITES'],
    image: collageRedDressImg,
    client: 'Vogue Alpine',
    year: '2025',
    description: 'Dramatic silk gown billowing over summit ridge above mountain lake at golden hour.',
    deliverables: ['Plate Compositing', 'Atmospheric Haze Integration', 'Fabric Trajectory Sculpting']
  },
  smartphone: {
    id: 'smartphone',
    title: 'LUMEN TITANIUM PRO',
    category: ['ADVERTISING', 'FOOD & PRODUCT'],
    image: collageSmartphoneImg,
    client: 'Apex Mobile',
    year: '2026',
    description: 'Studio commercial photography highlighting brushed titanium bevels and camera sapphire rings against lunar crescent backlight.',
    deliverables: ['Metal Edge Honing', 'Dust Erasure', 'Sub-Pixel Rim Light Gradients']
  },
  tiltedHead: {
    id: 'tilted-head',
    title: 'AURA SENSUAL PROFILE',
    category: ['BEAUTY & HAIR', 'FASHION'],
    image: collageTiltedHeadImg,
    client: 'Velvet Noir',
    year: '2025',
    description: 'Warm rim lighting on collarbone, loose cascading waves, and warm skin undertones.',
    deliverables: ['Hair Stray Re-alignment', 'Skin Glow Balancing', 'Tone Mapping']
  },
  underwater: {
    id: 'underwater',
    title: 'AQUATIC ELYSIUM',
    category: ['COMPOSITES', 'AI-POWERED', 'FASHION'],
    image: collageUnderwaterImg,
    client: 'Abyssal Collective',
    year: '2026',
    description: 'Submerged dreamscape balancing caustics, weightless organza, and deep turquoise gradients.',
    deliverables: ['Underwater Color De-turbidity', 'Caustic Overlay Mapping', 'Air Bubble Removal']
  },
  skincare: {
    id: 'skincare',
    title: 'BOTANICAL SERUM ELIXIR',
    category: ['FOOD & PRODUCT', 'BEAUTY & HAIR'],
    image: collageSkincareImg,
    client: 'Verdant Organics',
    year: '2026',
    description: 'Amber glass dropper and peptide cream jar resting upon rough travertine stone.',
    deliverables: ['Glass Specular Control', 'Botanical Leaf Color Fidelity', 'Label Typography Sharpening']
  },
  darkProfile: {
    id: 'dark-profile',
    title: 'BRUTALIST MONOLITH PROFILE',
    category: ['FASHION', 'ADVERTISING'],
    image: collageDarkProfileImg,
    client: 'Atelier Noir',
    year: '2026',
    description: 'Sharp silhouette and textured matte fabric against overcast concrete structure.',
    deliverables: ['Facial Contour Sharpening', 'Fabric Micro-Texture Retention', 'Cloud Atmosphere Tuning']
  }
};

export const DISCIPLINES: ProjectDiscipline[] = [
  {
    id: 'fashion',
    number: '01',
    title: 'FASHION',
    hasLine: false,
    image: workFashionImg,
    category: 'Fashion & Editorial',
    client: 'Maison D’Automne',
    year: '2026',
    description: 'High-fashion campaign post-production emphasizing natural movement, garment textile micro-contrast, and cinematic desert color balance.',
    deliverables: ['Editorial Color Grading', 'Fabric Retouching', 'Atmospheric Blending', 'Skin Texture Preservation']
  },
  {
    id: 'beauty-hair',
    number: '02',
    title: 'BEAUTY & HAIR',
    hasLine: false,
    image: workBeautyHairImg,
    category: 'Beauty & Cosmetics',
    client: 'Lumière Paris',
    year: '2026',
    description: 'Micro-retouching beauty close-up capturing radiant skin pores, pristine catchlights, sculpted brow geometry, and natural lip sheen.',
    deliverables: ['Frequency Separation', 'Dodge & Burn', 'Hair Cleanup & Stray Control', 'Digital Makeup Refinement']
  },
  {
    id: 'food-product',
    number: '03',
    title: 'FOOD & PRODUCT',
    hasLine: false,
    image: workFoodProductImg,
    category: 'Product & Still Life',
    client: 'Atelier Parfums',
    year: '2026',
    description: 'Commercial still life featuring amber glass flacon against tactile travertine stone, with calibrated specular reflections and label fidelity.',
    deliverables: ['Glass Caustics & Reflection Matching', 'Stone Texture Amplification', 'Bottle Symmetry Alignment', 'Dust & Imperfection Removal']
  },
  {
    id: 'advertising',
    number: '04',
    title: 'ADVERTISING',
    hasLine: true,
    image: workAdvertisingImg,
    category: 'Commercial Advertising',
    client: 'Vanguard Horlogerie',
    year: '2025',
    description: 'Luxury horology campaign photograph showcasing stainless steel chamfers, emerald dial guilloché textures, and precise rim illumination.',
    deliverables: ['Metal Edge Sharpening', 'Dial Reflection Grading', 'Multi-plate Assembly', 'Print Color Separation']
  },
  {
    id: 'composites',
    number: '05',
    title: 'COMPOSITES',
    hasLine: true,
    image: workCompositesImg,
    category: 'Surreal & Environmental Composites',
    client: 'Summit Collective',
    year: '2025',
    description: 'Cinematic scale composite combining geological rock ridges with towering alpine cumulus cloudscapes to establish heroic scale.',
    deliverables: ['Multi-Plate Masking', 'Atmospheric Depth Haze', 'Shadow & Lighting Direction Matching', 'Dynamic Sky Integration']
  },
  {
    id: 'automobiles',
    number: '06',
    title: 'AUTOMOBILES',
    hasLine: true,
    image: workAutomobilesImg,
    category: 'Automotive & Mobility',
    client: 'Gran Turismo Studio',
    year: '2026',
    description: 'Brutalist concrete showroom setting for a sleek dark performance sports car, with mirror body curves and rim reflection sculpting.',
    deliverables: ['Bodyline Highlight Sculpting', 'Wheel & Tire Retouching', 'Concrete Floor Spill Light Control', 'Rim Light Extraction']
  },
  {
    id: 'ai-powered',
    number: '07',
    title: 'AI-POWERED',
    hasLine: true,
    image: workAiPoweredImg,
    category: 'Generative Synthesis & AI Post-Production',
    client: 'Future Form Arts',
    year: '2026',
    description: 'Avant-garde portrait synthesising physical model photography with generative fluid ribbon optics and hyper-real caustics.',
    deliverables: ['Generative Asset Synthesis', 'Refraction & Distortion Mapping', 'Color Harmonic Balancing', 'Hybrid Photoreal Finishing']
  }
];
