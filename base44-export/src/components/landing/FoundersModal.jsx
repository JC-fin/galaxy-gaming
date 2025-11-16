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
      // Load ConvertKit base script first
      let baseScript = document.querySelector('script[src="https://f.convertkit.com/ckjs/ck.5.js"]');
      if (!baseScript) {
        baseScript = document.createElement('script');
        baseScript.src = 'https://f.convertkit.com/ckjs/ck.5.js';
        baseScript.async = true;
        document.body.appendChild(baseScript);
      }

      // Load form script
      let formScript = document.querySelector('script[data-uid="bc28e36a5e"]');
      if (!formScript) {
        formScript = document.createElement('script');
        formScript.async = true;
        formScript.setAttribute('data-uid', 'bc28e36a5e');
        formScript.src = 'https://galaxy-gaming-2.kit.com/bc28e36a5e/index.js';
        document.body.appendChild(formScript);
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
        {/* ConvertKit form container - scripts will render form here */}
        <div 
          ref={formContainerRef}
          className="w-full"
          style={{ minHeight: '400px' }}
        />
        
        {/* Close button - positioned absolutely to not interfere */}
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
