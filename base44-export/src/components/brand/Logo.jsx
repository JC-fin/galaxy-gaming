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
  const wordmarkUrl = "https://raw.githubusercontent.com/JC-fin/galaxy-gaming/main/Brand%20Pack/SVGs/Galaxy%20(no%20gaming)%20white.svg";
  
  return (
    <img 
      src={wordmarkUrl} 
      alt="Galaxy" 
      className={`h-8 ${className}`}
    />
  );
}