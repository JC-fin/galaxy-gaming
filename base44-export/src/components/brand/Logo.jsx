import React from "react";

export function LogoGlyph({ theme = "dark", className = "" }) {
  const logoUrl = theme === "dark" 
    ? "https://raw.githubusercontent.com/JC-fin/galaxy-gaming/main/Brand%20Pack/SVGs/G%20White.svg"
    : "https://raw.githubusercontent.com/JC-fin/galaxy-gaming/main/Brand%20Pack/SVGs/G%20Blue.svg";
  
  return (
    <img 
      src={logoUrl} 
      alt="Galaxy Gaming Logo" 
      className={`w-10 h-10 ${className}`}
    />
  );
}

export function LogoWordmark({ theme = "dark", className = "" }) {
  // Use Full Wordmark - White.svg from brand assets
  const wordmarkUrl = theme === "dark"
    ? "/assets/brand/logos/SVGs/Full Wordmark - White.svg"
    : "/assets/brand/logos/SVGs/Full Wordmark - Blue.svg";
  
  return (
    <img 
      src={wordmarkUrl} 
      alt="Galaxy Gaming Co." 
      className={`h-8 ${className}`}
    />
  );
}