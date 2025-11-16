import React from "react";
import { Package } from "lucide-react";

export default function HeroVisual({ imageUrl }) {
  // Use Hero Image 3.png from brand assets, sized 800x800
  const heroImageUrl = imageUrl || "/assets/brand/images/Hero Image 3.png";
  
  return (
    <div className="relative hero-glow">
      {heroImageUrl ? (
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={heroImageUrl} 
              alt="MTG Subscription Box" 
              className="w-full max-w-[800px] h-auto aspect-square object-contain"
            />
          </div>
        </div>
      ) : (
        <div className="aspect-square bg-gradient-to-br from-[#7C3AED]/20 via-[#12161C] to-[#A78BFA]/20 rounded-3xl flex flex-col items-center justify-center border-4 border-dashed border-[#A78BFA]/30 p-8">
          <Package className="w-32 h-32 text-[#7C3AED] opacity-40 mb-6" />
          <div className="text-center space-y-2">
            <p className="text-lg font-semibold text-[#E6EAF0]/80">Hero Image Placeholder</p>
            <p className="text-sm text-[#E6EAF0]/60">Upload your subscription box product photo</p>
            <p className="text-xs text-[#E6EAF0]/40 mt-4">Recommended: 800x800px, transparent background</p>
          </div>
        </div>
      )}
    </div>
  );
}