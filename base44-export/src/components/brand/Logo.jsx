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
  // Use Galaxy (no gaming) white.svg from brand assets
  const wordmarkUrl = theme === "dark"
    ? "/assets/brand/logos/SVGs/Galaxy (no gaming) white.svg"
    : "/assets/brand/logos/SVGs/Galaxy (no gaming) white.svg";
  
  return (
    <img 
      src={wordmarkUrl} 
      alt="Galaxy" 
      className={`h-12 ${className}`}
    />
  );
}