
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  Sparkles,
  Gift,
  Users,
  Target,
  Trophy,
  Check,
  ChevronDown,
  Shield,
  Truck,
  RotateCcw,
  Zap,
  Star
} from "lucide-react";
import PricingCard from "../components/landing/PricingCard";
import FeatureCard from "../components/landing/FeatureCard";
import FAQItem from "../components/landing/FAQItem";
import HeroVisual from "../components/landing/HeroVisual";
import FoundersModal from "../components/landing/FoundersModal";
import { Link } from 'react-router-dom';

const createPageUrl = (pageName) => {
  switch (pageName) {
    case "AboutThePacks":
      return "/about-the-packs";
    default:
      return "/";
  }
};

export default function Landing() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [showFoundersModal, setShowFoundersModal] = useState(false);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  // Show founders modal on first visit
  useEffect(() => {
    const hasSubmitted = localStorage.getItem('founders_modal_submitted');
    const hasDismissed = localStorage.getItem('founders_modal_dismissed');
    
    if (!hasSubmitted && !hasDismissed) {
      // Show after a short delay
      const timer = setTimeout(() => {
        setShowFoundersModal(true);
      }, 1000); // 1 second delay
      
      return () => clearTimeout(timer);
    }
  }, []);

  const faqData = [
    {
      question: "Can I cancel anytime?",
      answer: "Yes, subscriptions are flexible — pause or cancel anytime."
    },
    {
      question: "Are the cards sealed & authentic?",
      answer: "Absolutely. All Magic the Gathering booster packs are factory-sealed and sourced from official distributors."
    },
    {
      question: "What payment methods do you accept for MTG subscription boxes?",
      answer: null
    },
    {
      question: "Can I buy just one MTG monthly box without subscribing?",
      answer: null
    },
    {
      question: "What makes this the best MTG subscription box?",
      answer: "Our curation includes rotating sets, exclusive foils, and themed accessories – all handpicked by competitive players. We're ranked among the best MTG subscription box services for value and variety."
    },
    {
      question: "Do you include cards from the latest sets?",
      answer: "Yes! Each MTG monthly box includes packs from current and recent sets. You'll always get fresh content for your collection or deck builds."
    },
    {
      question: "How does a booster pack subscription work?",
      answer: "You subscribe, we deliver. Every month, you'll receive a booster pack subscription with a curated selection of new packs, promos, and surprises — shipped directly to you."
    },
    {
      question: "Is this just for collectors, or do competitive players benefit too?",
      answer: "Both! Our MTG box subscription offers value whether you're a collector, drafter, or tournament player. Every box is designed for gameplay and collecting."
    },
    {
      question: "Can I gift a trading card subscription box?",
      answer: "Yes — we offer gift subscriptions! Perfect for anyone who loves trading card subscription boxes or is new to Magic the Gathering."
    },
    {
      question: "What's the difference between an MTG subscription box and a booster box?",
      answer: "A booster box contains 30+ packs of a single set. Our MTG subscription box delivers 3–6 curated packs from multiple sets, plus promo cards and accessories — monthly and affordable."
    },
    {
      question: "Will I get repeats or duplicates?",
      answer: "Our curators aim to minimize duplicates and include diverse sets in every box subscription of Magic cards."
    }
  ];

  const images = {
    heroBox: "/assets/brand/images/Hero Image 3.png",
    collectorCard: null,
    casualCard: null,
    competitorCard: null,
    boosterPacks: null,
    promoCards: null,
    accessories: null,
    starterBox: null,
    collectorBox: null,
    mythicBox: null
  };

  return (
    <div className="min-h-screen bg-[#0B0D10]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Archivo+Black&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
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
            radial-gradient(2px 2px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent);
          background-size: 200% 200%;
          background-position: 0% 0%;
          animation: twinkle 8s ease-in-out infinite;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        /* REMOVED: nebula-shimmer animation (purple animation across screen) */
        .nebula-foil::before {
          display: none;
        }
        
        .constellation-dots {
          background-image: radial-gradient(circle at 2px 2px, rgba(167, 139, 250, 0.2) 1px, transparent 0);
          background-size: 40px 40px;
        }
        
        /* REMOVED: hero-glow animation - keeping hero always bright */
        .hero-glow {
          /* No filter - hero stays bright without dimming/brightening effect */
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(124, 58, 237, 0.2);
        }
        
        .btn-primary {
          transition: all 0.2s ease;
          background: linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(124, 58, 237, 0.4);
          background: linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%);
        }
        
        .btn-primary:active {
          transform: translateY(0);
        }

        .starburst-ribbon {
          position: relative;
        }

        .starburst-ribbon::before {
          content: '⭐';
          position: absolute;
          left: -8px;
          top: 50%;
          transform: translateY(-50%);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: translateY(-50%) scale(1); }
          50% { opacity: 0.7; transform: translateY(-50%) scale(1.1); }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-transparent starfield-bg">
        {/* Galaxy Background all over the site */}
        <div 
          className="fixed inset-0 bg-center bg-cover opacity-30 pointer-events-none z-0"
          style={{
            backgroundImage: "url('/assets/brand/logos/SVGs/Galaxy Background.svg')"
          }}
        ></div>
        <div className="absolute inset-0 constellation-dots opacity-20"></div>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 lg:py-24 relative z-10">
          {/* Left: Copy & CTAs */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 relative z-20 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="display-heading text-4xl lg:text-5xl xl:text-6xl leading-tight text-white font-bold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                  Curated Monthly MTG Boxes
                </h2>
                <p className="text-lg leading-relaxed text-white" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                  Get exclusive MTG booster packs, promos, and accessories with our monthly Magic the Gathering subscription box. Curated for collectors, casuals, and competitors.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="btn-primary text-white px-8 py-6 text-lg font-semibold rounded-xl border-0"
                >
                  Subscribe Today
                </Button>
                <Link to={createPageUrl("AboutThePacks")}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-[#A78BFA] text-[#A78BFA] hover:bg-[#7C3AED]/10 px-8 py-6 text-lg font-semibold rounded-xl w-full sm:w-auto"
                  >
                    What's Inside
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <HeroVisual imageUrl={images.heroBox} />
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-[#A78BFA]/20 relative z-10">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-6">
            <div className="flex flex-wrap justify-center gap-6 lg:gap-12 text-sm font-medium" style={{ color: '#FFFFFF' }}>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#22C55E]" />
                <span>Sealed & Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-[#22C55E]" />
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#22C55E]" />
                <span>Free U.S. Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Player Types Section */}
      <section className="py-16 lg:py-24 bg-[#12161C]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h1 className="display-heading text-3xl lg:text-4xl text-center text-white mb-12">
            MTG Subscription Box – Monthly Magic the Gathering Booster Packs
          </h1>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-hover border border-[#A78BFA]/20 shadow-lg bg-[#12161C] rounded-2xl overflow-hidden">
              {images.collectorCard ? (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={images.collectorCard} 
                    alt="Collector MTG Cards" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-48 nebula-foil bg-gradient-to-br from-[#C8A84E]/20 to-[#7C3AED]/20 flex items-center justify-center">
                  <p className="text-sm text-[#E6EAF0]/60">Upload collector card image</p>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto -mt-8 mb-4 bg-gradient-to-br from-[#C8A84E] to-[#A78BFA] rounded-2xl flex items-center justify-center shadow-xl border-4 border-[#12161C]">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Collector</CardTitle>
              </CardHeader>
            </Card>

            <Card className="card-hover border border-[#A78BFA]/20 shadow-lg bg-[#12161C] rounded-2xl overflow-hidden">
              {images.casualCard ? (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={images.casualCard} 
                    alt="Casual MTG Cards" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-[#7C3AED]/20 to-[#A78BFA]/20 flex items-center justify-center">
                  <p className="text-sm text-[#E6EAF0]/60">Upload casual card image</p>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto -mt-8 mb-4 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-2xl flex items-center justify-center shadow-xl border-4 border-[#12161C]">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Casual</CardTitle>
              </CardHeader>
            </Card>

            <Card className="card-hover border border-[#A78BFA]/20 shadow-lg bg-[#12161C] rounded-2xl overflow-hidden">
              {images.competitorCard ? (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={images.competitorCard} 
                    alt="Competitor MTG Cards" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-[#A78BFA]/20 to-[#7C3AED]/20 flex items-center justify-center">
                  <p className="text-sm text-[#E6EAF0]/60">Upload competitor card image</p>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto -mt-8 mb-4 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-2xl flex items-center justify-center shadow-xl border-4 border-[#12161C]">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Competitor</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 lg:py-24 bg-[#0B0D10] constellation-dots">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="display-heading text-3xl lg:text-4xl text-center text-white mb-12">
            What's Inside Each MTG Monthly Box?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Package}
              title="Booster Packs"
              items={[
                "3–6 sealed MTG booster packs",
                "Standard, Draft & Collector editions"
              ]}
              accentColor="#7C3AED"
              imageUrl={images.boosterPacks}
            />

            <FeatureCard
              icon={Sparkles}
              title="Promo & Rare Cards"
              items={[
                "1–2 exclusive foils or promotional cards"
              ]}
              accentColor="#C8A84E"
              imageUrl={images.promoCards}
            />

            <FeatureCard
              icon={Gift}
              title="Accessories & Extras"
              items={[
                "Deck sleeves, dice, tokens & more",
                "Themed inserts with each release"
              ]}
              accentColor="#7C3AED"
              imageUrl={images.accessories}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-[#0B0D10]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="display-heading text-3xl lg:text-4xl text-center text-white mb-12">
            Subscription Plans
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Starter"
              price="$24.99"
              period="month"
              features={[
                "3 boosters, 1 promo, basic accessories"
              ]}
              buttonText="Select Plan"
              imageUrl={images.starterBox}
            />

            <PricingCard
              title="Collector"
              price="$39.99"
              period="month"
              features={[
                "6 boosters, 2 foils, premium extras"
              ]}
              buttonText="Select Plan"
              popular={true}
              imageUrl={images.collectorBox}
            />

            <PricingCard
              title="Mythic"
              price="$59.99"
              period="month"
              features={[
                "6+ boosters (incl. Collector Packs), rare pull guaranteed"
              ]}
              buttonText="Select Plan"
              imageUrl={images.mythicBox}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 lg:py-24 bg-[#0B0D10]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="display-heading text-3xl lg:text-4xl text-center text-white mb-12">
            Why Choose Our MTG Box Subscription?
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-6 bg-[#0B0D10] border border-[#A78BFA]/20 rounded-2xl p-6 card-hover">
                <div className="w-14 h-14 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold text-white mb-2">Curated by Magic players</h3>
                  <p className="text-[#E6EAF0]/70 leading-relaxed">
                    Every box is hand-selected by competitive players who understand what collectors and gamers want most.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-[#0B0D10] border border-[#A78BFA]/20 rounded-2xl p-6 card-hover">
                <div className="w-14 h-14 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold text-white mb-2">New sets monthly</h3>
                  <p className="text-[#E6EAF0]/70 leading-relaxed">
                    Stay current with the latest releases and discover cards from both new and classic sets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-[#0B0D10] border border-[#A78BFA]/20 rounded-2xl p-6 card-hover">
                <div className="w-14 h-14 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold text-white mb-2">Cancel anytime</h3>
                  <p className="text-[#E6EAF0]/70 leading-relaxed">
                    No long-term commitments. Pause or cancel your subscription whenever you want with no penalties.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-[#0B0D10] border border-[#A78BFA]/20 rounded-2xl p-6 card-hover">
                <div className="w-14 h-14 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold text-white mb-2">Ships fast & free in the U.S.</h3>
                  <p className="text-[#E6EAF0]/70 leading-relaxed">
                    Get your monthly box delivered quickly with free shipping across all 50 states.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-[#0B0D10]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="display-heading text-3xl lg:text-4xl text-center text-white mb-12">
            MTG Subscription FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isExpanded={expandedFAQ === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] overflow-hidden starfield-bg">
        <div className="absolute inset-0 constellation-dots opacity-20"></div>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="display-heading text-3xl lg:text-4xl mb-6" style={{ color: '#FFFFFF' }}>
            Subscribe Now – Start Your MTG Monthly Subscription
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#FFFFFF' }}>
            Join thousands of fans and level up your collection with the best trading card subscription box for MTG.
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-[#7C3AED] hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-xl shadow-2xl"
          >
            👉 Subscribe Today
          </Button>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12 text-sm font-medium mt-12" style={{ color: '#FFFFFF' }}>
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

      {/* Founders Modal */}
      <FoundersModal 
        open={showFoundersModal} 
        onOpenChange={setShowFoundersModal} 
      />
    </div>
  );
}
