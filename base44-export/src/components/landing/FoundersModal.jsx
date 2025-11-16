import React, { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function FoundersModal({ open, onOpenChange }) {
  const formContainerRef = useRef(null);

  useEffect(() => {
    if (open && formContainerRef.current) {
      // Load ConvertKit base script for form functionality
      let baseScript = document.querySelector('script[src="https://f.convertkit.com/ckjs/ck.5.js"]');
      if (!baseScript) {
        baseScript = document.createElement('script');
        baseScript.src = 'https://f.convertkit.com/ckjs/ck.5.js';
        baseScript.async = true;
        document.body.appendChild(baseScript);
      }

      // Listen for form submission
      const handleSubmit = (e) => {
        if (e.target.closest('.seva-form')) {
          setTimeout(() => {
            const success = formContainerRef.current?.querySelector('.formkit-alert-success');
            if (success) {
              setTimeout(() => {
                onOpenChange(false);
                localStorage.setItem('founders_modal_submitted', 'true');
              }, 2000);
            }
          }, 500);
        }
      };

      document.addEventListener('submit', handleSubmit);

      return () => {
        document.removeEventListener('submit', handleSubmit);
      };
    }
  }, [open, onOpenChange]);

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-transparent border-0 shadow-none p-0 max-w-4xl overflow-visible">
        {/* ConvertKit HTML Form - full embed with all styling */}
        <div 
          ref={formContainerRef}
          className="w-full"
          dangerouslySetInnerHTML={{
            __html: `
              <form action="https://app.kit.com/forms/8746800/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="8746800" data-uid="bc28e36a5e" data-format="inline" data-version="5" data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}' min-width="400 500 600 700 800">
                <div data-style="full">
                  <div data-element="column" class="formkit-column" style="background-color: rgb(249, 250, 251);">
                    <div class="formkit-background" style="opacity: 0.3;"></div>
                    <div class="formkit-header" data-element="header" style="color: rgb(77, 77, 77); font-size: 20px; font-weight: 700;">
                      <h2>Founding Member Reservation</h2>
                    </div>
                    <div class="formkit-subheader" data-element="subheader" style="color: rgb(104, 104, 104); font-size: 15px;">
                      <p>The first <strong>100 founding members will receive a free MTG Collector Booster</strong> in their December Box. Starting at $35</p>
                    </div>
                  </div>
                  <div data-element="column" class="formkit-column">
                    <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                    <div data-element="fields" class="seva-fields formkit-fields">
                      <div class="formkit-field">
                        <input class="formkit-input" aria-label="First Name" name="fields[first_name]" placeholder="First Name" type="text" style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;">
                      </div>
                      <div class="formkit-field">
                        <input class="formkit-input" aria-label="Last Name" name="fields[last_name]" placeholder="Last Name" type="text" style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;">
                      </div>
                      <div class="formkit-field">
                        <input class="formkit-input" name="email_address" aria-label="Email" placeholder="Email" required="" type="email" style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;">
                      </div>
                      <div class="formkit-field">
                        <input class="formkit-input" aria-label="Phone Number" name="fields[phone_number]" placeholder="Phone Number" type="text" style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;">
                      </div>
                      <div class="formkit-field">
                        <input class="formkit-input" aria-label="Are you a collector, casual player, or competitive player?" name="fields[are_you_a_collector_casual_player_or_competitive_player]" placeholder="Are you a collector, casual player, or competitive player?" type="text" style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;">
                      </div>
                      <button data-element="submit" class="formkit-submit formkit-submit" style="color: rgb(255, 255, 255); background-color: rgb(136, 67, 137); border-radius: 24px; font-weight: 700;">
                        <div class="formkit-spinner"><div></div><div></div><div></div></div>
                        <span class="">Subscribe</span>
                      </button>
                    </div>
                    <div class="formkit-guarantee" data-element="guarantee" style="color: rgb(77, 77, 77); font-size: 13px; font-weight: 400;">
                      <p>We respect your privacy. Unsubscribe at any time.</p>
                    </div>
                  </div>
                </div>
              </form>
            `
          }}
        />
        
        {/* Close button */}
        <div className="absolute top-4 right-4 z-50">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="text-white/80 hover:text-white hover:bg-white/10 rounded-full w-8 h-8"
          >
            ✕
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
