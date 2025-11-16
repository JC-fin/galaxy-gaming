import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Sparkles } from "lucide-react";

export default function SubscribeCTA() {
  return (
    <Card className="border-2 border-[#C8A84E] bg-gradient-to-br from-[#C8A84E]/5 to-white shadow-xl foil-shimmer">
      <CardContent className="p-8 lg:p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Package className="w-16 h-16 text-[#2D6DF6]" />
            <Sparkles className="w-6 h-6 text-[#C8A84E] absolute -top-2 -right-2" />
          </div>
        </div>
        
        <h3 className="display-heading text-2xl lg:text-3xl text-gray-900 mb-4">
          Ready to Level Up Your Collection?
        </h3>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Get curated MTG booster packs, exclusive promos, and premium accessories delivered monthly. Check out our latest MTG box subscription!
        </p>
        
        <Link to={createPageUrl("Subscribe")}>
          <Button 
            size="lg"
            className="bg-[#2D6DF6] hover:bg-[#2558CC] text-white px-10 py-6 text-lg font-bold rounded-xl shadow-lg"
          >
            View Subscription Plans
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}