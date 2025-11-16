import React from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ question, answer, isExpanded, onToggle }) {
  return (
    <Card 
      className="border-2 border-[#A78BFA]/20 bg-[#12161C] rounded-xl overflow-hidden cursor-pointer hover:border-[#7C3AED]/50 transition-all duration-200"
      onClick={onToggle}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
          <ChevronDown 
            className={`w-5 h-5 text-[#7C3AED] flex-shrink-0 transition-transform duration-200 ${
              isExpanded ? 'transform rotate-180' : ''
            }`}
          />
        </div>
        
        <div 
          className={`transition-all duration-200 overflow-hidden ${
            isExpanded ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          {answer ? (
            <p className="text-[#E6EAF0]/80 leading-relaxed">{answer}</p>
          ) : (
            <div className="h-2 bg-[#A78BFA]/10 rounded-full w-full"></div>
          )}
        </div>
      </div>
    </Card>
  );
}