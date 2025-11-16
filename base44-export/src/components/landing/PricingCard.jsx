import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function PricingCard({ 
  title, 
  price, 
  period, 
  features, 
  buttonText, 
  popular = false,
  imageUrl
}) {
  return (
    <Card className={`
      card-hover relative border-2 rounded-2xl overflow-hidden
      ${popular ? 'border-[#7C3AED] shadow-2xl shadow-[#7C3AED]/30' : 'border-[#A78BFA]/20 shadow-lg'}
      bg-[#12161C] flex flex-col
    `}>
      {popular && (
        <div className="absolute top-0 right-0 left-0 z-10">
          <div className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white text-center py-2 px-4 text-sm font-bold flex items-center justify-center gap-2">
            <Star className="w-4 h-4 fill-current" />
            Most Popular
          </div>
        </div>
      )}
      
      {imageUrl && (
        <div className="h-32 overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={`${title} subscription box`} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#12161C]"></div>
        </div>
      )}
      
      <CardHeader className={`text-center pb-3 ${popular ? 'pt-12' : imageUrl ? 'pt-3' : 'pt-6'} ${imageUrl && !popular ? '-mt-4' : ''}`}>
        <CardTitle className="text-xl text-white mb-1">{title}</CardTitle>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-[#E6EAF0]/60 text-sm">/{period}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 flex flex-col flex-1 pb-6">
        <ul className="space-y-2 flex-1 text-center">
          {features.map((feature, index) => (
            <li key={index} className="text-[#E6EAF0]/80 text-sm leading-relaxed">
              {feature}
            </li>
          ))}
        </ul>
        
        <Button 
          className="w-full py-5 text-base font-semibold rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white hover:opacity-90 border-0 mt-auto"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}