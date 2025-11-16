import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to your email provider (Mailchimp, ConvertKit, Beehiiv)
    // For now, just show success message
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="bg-gradient-to-br from-[#2D6DF6] to-[#1E4FB8] rounded-3xl p-8 lg:p-12 text-center text-white shadow-2xl">
          <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="display-heading text-3xl lg:text-4xl mb-4">
            Join the MTG Collector's Newsletter
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get sneak peeks of upcoming boxes, exclusive deals, and expert MTG tips delivered to your inbox
          </p>
          
          {subscribed ? (
            <div className="flex items-center justify-center gap-3 text-lg">
              <CheckCircle className="w-6 h-6" />
              <span>Thanks for subscribing! Check your email.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 py-6 px-6 text-lg rounded-xl border-0 text-gray-900"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-white text-[#2D6DF6] hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-xl shadow-lg whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-white/70 mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}