import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  Sparkles,
  Trophy,
  Star,
  Gift,
  Zap,
  TrendingUp,
  CheckCircle2,
  Rocket
} from "lucide-react";

export default function AboutThePacks() {
  const perks = [
    {
      icon: Sparkles,
      title: "Comet Packs",
      description: "Every box includes a Comet Pack — your guaranteed chance at something rare, from premium MTG boosters to exclusive collectible singles.",
      color: "#7C3AED"
    },
    {
      icon: Zap,
      title: "Comet Boost",
      description: "Every box also carries a 5% chance to score an additional Comet Pack containing a legendary-level reward.",
      color: "#A78BFA"
    },
    {
      icon: Trophy,
      title: "Golden Ticket",
      description: "Each month, one Galaxy member will uncover the Golden Ticket, redeemable for a full booster box of their choice.",
      color: "#C8A84E"
    },
    {
      icon: TrendingUp,
      title: "Streaks",
      description: "The longer you stay a member, the more Galaxy perks you unlock — with milestone rewards like bonus packs, collector items, and exclusive merch.",
      color: "#22C55E"
    }
  ];

  const tiers = [
    {
      name: "Explorer",
      price: "$35",
      period: "month",
      tagline: "Perfect entry into the Galaxy experience",
      features: [
        "3 Play Boosters",
        "1 Standard Comet Pack",
        "Guaranteed variety and excitement"
      ],
      icon: Rocket,
      gradient: "from-[#2D6DF6] to-[#1E4FB8]"
    },
    {
      name: "Adventurer",
      price: "$59",
      period: "month",
      tagline: "For dedicated players and collectors",
      features: [
        "4 Play Boosters",
        "1 Epic Comet",
        "1 Curated single",
        "1 MTG accessory"
      ],
      icon: Star,
      gradient: "from-[#7C3AED] to-[#A78BFA]",
      popular: true
    },
    {
      name: "Legend",
      price: "$99",
      period: "month",
      tagline: "Ultimate collector's experience",
      features: [
        "5 Play Boosters",
        "1 Legendary Comet",
        "1 Premium single",
        "1 MTG accessory",
        "Maximum excitement & top-tier rewards"
      ],
      icon: Trophy,
      gradient: "from-[#C8A84E] to-[#A67C00]",
      premium: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0D10]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Archivo+Black&display=swap');
        
        .display-heading {
          font-family: 'Archivo Black', sans-serif;
          font-weight: 900;
          letter-spacing: -0.02em;
        }
        
        .starfield-bg {
          background-image: 
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(2px 2px at 90% 60%, white, transparent);
          background-size: 200% 200%;
          animation: twinkle 8s ease-in-out infinite;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .nebula-foil {
          position: relative;
          overflow: hidden;
        }
        
        /* REMOVED: nebula-shimmer animation (purple animation across screen) */
        .nebula-foil::before {
          display: none;
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(124, 58, 237, 0.3);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#12161C] starfield-bg py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#7C3AED]/20 text-[#A78BFA] border-[#7C3AED]/30 px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Premium Monthly TCG Boxes
            </Badge>
            
            <h1 className="display-heading text-4xl lg:text-6xl text-white mb-6 leading-tight">
              About Galaxy Boxes
            </h1>
            
            <p className="text-xl text-[#E6EAF0]/90 leading-relaxed mb-8">
              Galaxy Gaming Company brings the excitement of playing and collecting to life with a premium monthly box built for true TCG fans. Each Galaxy Box delivers a curated mix of Magic: The Gathering and collectible card game boosters — hand-selected from the latest releases and fan-favorite sets — all wrapped in sleek, cosmic packaging designed to make every delivery feel special.
            </p>

            <Link to={createPageUrl("Subscribe")}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white px-10 py-6 text-lg font-bold rounded-xl hover:opacity-90"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Galaxy Perks Section */}
      <section className="py-20 lg:py-28 bg-[#0B0D10]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="display-heading text-3xl lg:text-5xl text-white mb-4">
              Galaxy Gaming Perks
            </h2>
            <p className="text-xl text-[#E6EAF0]/80 max-w-3xl mx-auto">
              Galaxy is committed to bringing the best value and experience to its community, anchored on the following perks:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {perks.map((perk, index) => (
              <Card 
                key={index}
                className="card-hover bg-[#12161C] border-[#A78BFA]/20 rounded-2xl overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ 
                      background: `linear-gradient(135deg, ${perk.color}40 0%, ${perk.color}10 100%)`,
                      border: `1px solid ${perk.color}30`
                    }}
                  >
                    <perk.icon className="w-7 h-7" style={{ color: perk.color }} />
                  </div>
                  <CardTitle className="text-2xl text-white">{perk.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#E6EAF0]/80 leading-relaxed">
                    {perk.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="py-20 lg:py-28 bg-[#12161C]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="display-heading text-3xl lg:text-5xl text-white mb-4">
              Choose Your Tier
            </h2>
            <p className="text-xl text-[#E6EAF0]/80 max-w-3xl mx-auto">
              Every tier is built around the same promise — premium product, transparent value, and the thrill of discovery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <Card 
                key={index}
                className={`card-hover relative rounded-2xl overflow-hidden ${
                  tier.popular 
                    ? 'border-2 border-[#7C3AED] shadow-2xl shadow-[#7C3AED]/30' 
                    : tier.premium
                    ? 'border-2 border-[#C8A84E] nebula-foil'
                    : 'border border-[#A78BFA]/20'
                } bg-[#0B0D10]`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 z-10">
                    <div className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white text-center py-2 text-sm font-bold flex items-center justify-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className={`text-center ${tier.popular ? 'pt-16' : 'pt-8'} pb-6`}>
                  <div 
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br ${tier.gradient}`}
                  >
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-3xl text-white mb-2">{tier.name}</CardTitle>
                  
                  <div className="flex items-baseline justify-center gap-1 mb-3">
                    <span className="text-5xl font-bold text-white">{tier.price}</span>
                    <span className="text-[#E6EAF0]/60">/{tier.period}</span>
                  </div>
                  
                  <CardDescription className="text-[#E6EAF0]/70 text-base">
                    {tier.tagline}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-8">
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <span className="text-[#E6EAF0]/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={createPageUrl("Subscribe")}>
                    <Button 
                      className={`w-full py-6 text-lg font-semibold rounded-xl ${
                        tier.popular
                          ? 'bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white hover:opacity-90'
                          : 'border-2 border-[#A78BFA] bg-transparent text-[#A78BFA] hover:bg-[#7C3AED]/10'
                      }`}
                    >
                      Select {tier.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] starfield-bg relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <Package className="w-20 h-20 mx-auto mb-6 text-white opacity-90" />
          
          <h2 className="display-heading text-3xl lg:text-5xl text-white mb-6">
            Ready to Join the Galaxy?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your collection journey today and experience the most exciting way to enjoy trading card games.
          </p>

          <Link to={createPageUrl("Subscribe")}>
            <Button 
              size="lg"
              className="bg-white text-[#7C3AED] hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-xl shadow-2xl"
            >
              Choose Your Tier
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}