import React, { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function FoundersModal({ open, onOpenChange }) {
  const formContainerRef = useRef(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (open && formContainerRef.current && !scriptLoaded.current) {
      // Load ConvertKit script - it will automatically render the form
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-uid', 'bc28e36a5e');
      script.src = 'https://galaxy-gaming-2.kit.com/bc28e36a5e/index.js';
      
      // Script will automatically find and render form in container
      script.onload = () => {
        scriptLoaded.current = true;
        
        // Listen for successful submission
        const checkForSuccess = setInterval(() => {
          const successMessage = formContainerRef.current?.querySelector('.formkit-alert-success');
          if (successMessage) {
            setTimeout(() => {
              onOpenChange(false);
              localStorage.setItem('founders_modal_submitted', 'true');
            }, 2000);
            clearInterval(checkForSuccess);
          }
        }, 500);
        
        // Cleanup interval after 30 seconds
        setTimeout(() => clearInterval(checkForSuccess), 30000);
      };
      
      document.body.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, [open, onOpenChange]);

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-transparent border-0 shadow-none p-0 max-w-4xl overflow-visible">
        {/* ConvertKit will render form here automatically */}
        <div 
          ref={formContainerRef}
          id="convertkit-form-container"
          className="w-full"
        />
        
        {/* Close button */}
        <div className="mt-4 flex justify-center">
          <Button
            variant="ghost"
            onClick={handleClose}
            className="text-white/80 hover:text-white hover:bg-white/10"
          >
            No Thanks
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
