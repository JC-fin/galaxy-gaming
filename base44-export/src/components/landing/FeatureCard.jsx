import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeatureCard({ icon: Icon, title, items, accentColor, imageUrl }) {
  return (
    <Card className="card-hover border border-[#A78BFA]/20 shadow-lg bg-[#12161C] rounded-2xl overflow-hidden">
      {imageUrl ? (
        <div className="h-56 overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#12161C]"></div>
        </div>
      ) : (
        <div 
          className="h-56 flex flex-col items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${accentColor}30 0%, ${accentColor}10 100%)`
          }}
        >
          <Icon className="w-16 h-16 opacity-30" style={{ color: accentColor }} />
          <p className="mt-4 text-sm text-[#E6EAF0]/40">Upload {title.toLowerCase()} image</p>
        </div>
      )}
      
      <CardHeader className="text-center pb-4 pt-6">
        <div 
          className="w-16 h-16 mx-auto -mt-14 mb-4 rounded-2xl flex items-center justify-center shadow-xl border-4 border-[#12161C]"
          style={{ 
            background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}AA 100%)` 
          }}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-6">
        <ul className="space-y-2 text-center">
          {items.map((item, index) => (
            <li key={index} className="text-[#E6EAF0]/80 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}