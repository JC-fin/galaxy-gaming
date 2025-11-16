
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Shield, Truck, RotateCcw } from "lucide-react";
import { createPageUrl } from "@/utils";
import PricingCard from "../components/landing/PricingCard";

// Define image paths for the pricing cards
const images = {
  starterBox: "/images/starter-box.png", // Assuming images are in the public directory
  collectorBox: "/images/collector-box.png",
  mythicBox: "/images/mythic-box.png",
};

export default function Subscribe() {
  return (
    <div className="min-h-screen bg-[#F7F7F8]">
      {/* SEO Meta Tags */}
      <title>Subscribe to MTG Subscription Box - Choose Your Plan</title>
      <meta name="description" content="Subscribe to our monthly Magic the Gathering subscription box. Choose from Starter, Collector, or Mythic plans. Cancel anytime, free shipping." />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2D6DF6] to-[#1E4FB8] text-white py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="display-heading text-4xl lg:text-5xl mb-6">
            Choose Your MTG Subscription Plan
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Get curated booster packs, exclusive promos, and premium accessories delivered monthly
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-white/90">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Sealed & Authentic</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-5 h-5" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              <span>Free U.S. Shipping</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <PricingCard
              title="Explorer"
              price="$35"
              period="month"
              features={[
                "3 Play Boosters",
                "1 Standard Comet Pack",
                "Guaranteed variety and excitement"
              ]}
              buttonText="Select Plan"
              buttonVariant="outline"
              imageUrl={images.starterBox}
            />

            <PricingCard
              title="Adventurer"
              price="$59"
              period="month"
              features={[
                "4 Play Boosters",
                "1 Epic Comet",
                "1 Curated single",
                "1 MTG accessory"
              ]}
              buttonText="Select Plan"
              buttonVariant="primary"
              popular={true}
              imageUrl={images.collectorBox}
            />

            <PricingCard
              title="Legend"
              price="$99"
              period="month"
              features={[
                "5 Play Boosters",
                "1 Legendary Comet",
                "1 Premium single",
                "1 MTG accessory"
              ]}
              buttonText="Select Plan"
              buttonVariant="outline"
              premium={true}
              imageUrl={images.mythicBox}
            />
          </div>

          {/* Plan Comparison */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <h2 className="display-heading text-3xl text-center mb-8">
              What's Included in Each Plan
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Starter</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Collector</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Mythic</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">Booster Packs</td>
                    <td className="py-4 px-4 text-center text-gray-700">3</td>
                    <td className="py-4 px-4 text-center text-gray-700">6</td>
                    <td className="py-4 px-4 text-center text-gray-700">6+</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">Promo Cards</td>
                    <td className="py-4 px-4 text-center text-gray-700">1</td>
                    <td className="py-4 px-4 text-center text-gray-700">2</td>
                    <td className="py-4 px-4 text-center text-gray-700">2+</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">Collector Packs</td>
                    <td className="py-4 px-4 text-center"><span className="text-gray-400">—</span></td>
                    <td className="py-4 px-4 text-center"><span className="text-gray-400">—</span></td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">Rare Pull Guaranteed</td>
                    <td className="py-4 px-4 text-center"><span className="text-gray-400">—</span></td>
                    <td className="py-4 px-4 text-center"><span className="text-gray-400">—</span></td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">Premium Accessories</td>
                    <td className="py-4 px-4 text-center"><span className="text-gray-400">—</span></td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-gray-700">Free Shipping</td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="display-heading text-3xl mb-6">Have Questions?</h2>
          <p className="text-gray-600 mb-8">Check out our comprehensive FAQ section</p>
          <Button 
            onClick={() => window.location.href = createPageUrl("Landing") + "#faq"}
            variant="outline"
            className="border-2 border-[#2D6DF6] text-[#2D6DF6] hover:bg-[#2D6DF6] hover:text-white px-8 py-6 text-lg rounded-xl"
          >
            View All FAQs
          </Button>
        </div>
      </section>
    </div>
  );
}
