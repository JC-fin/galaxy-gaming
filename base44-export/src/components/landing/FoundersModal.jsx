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
      // Create a unique container ID for ConvertKit to target
      const containerId = 'ck-form-container-' + Date.now();
      formContainerRef.current.id = containerId;
      
      // Load ConvertKit base script first
      const baseScript = document.createElement('script');
      baseScript.src = 'https://f.convertkit.com/ckjs/ck.5.js';
      baseScript.async = true;
      
      baseScript.onload = () => {
        // Then load the form script
        const formScript = document.createElement('script');
        formScript.async = true;
        formScript.setAttribute('data-uid', 'bc28e36a5e');
        formScript.src = 'https://galaxy-gaming-2.kit.com/bc28e36a5e/index.js';
        
        // ConvertKit will render the form - listen for it
        formScript.onload = () => {
          scriptLoaded.current = true;
          
          // Wait a bit for form to render, then check for success
          setTimeout(() => {
            const form = formContainerRef.current?.querySelector('.seva-form');
            if (form) {
              form.addEventListener('submit', (e) => {
                setTimeout(() => {
                  const success = formContainerRef.current?.querySelector('.formkit-alert-success');
                  if (success) {
                    setTimeout(() => {
                      onOpenChange(false);
                      localStorage.setItem('founders_modal_submitted', 'true');
                    }, 2000);
                  }
                }, 500);
              });
            }
          }, 1000);
        };
        
        document.body.appendChild(formScript);
      };
      
      document.body.appendChild(baseScript);

      return () => {
        if (baseScript.parentNode) baseScript.parentNode.removeChild(baseScript);
        const formScript = document.querySelector('script[data-uid="bc28e36a5e"]');
        if (formScript?.parentNode) formScript.parentNode.removeChild(formScript);
      };
    }
  }, [open, onOpenChange]);

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-transparent border-0 shadow-none p-6 max-w-4xl overflow-visible">
        {/* ConvertKit will render form here automatically */}
        <div 
          ref={formContainerRef}
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
