import React, { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function FoundersModal({ open, onOpenChange }) {
  const scriptLoaded = useRef(false);
  const formContainerRef = useRef(null);

  useEffect(() => {
    if (open && !scriptLoaded.current) {
      // Create and load the ConvertKit script
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-uid', 'bc28e36a5e');
      script.src = 'https://galaxy-gaming-2.kit.com/bc28e36a5e/index.js';
      
      // Append to body
      document.body.appendChild(script);
      scriptLoaded.current = true;

      // Optional: Listen for form submission to close modal
      script.onload = () => {
        // ConvertKit forms typically trigger a success event
        // You can listen for it and close the modal
        window.addEventListener('convertkit:subscribed', () => {
          // Close modal after successful submission
          setTimeout(() => {
            onOpenChange(false);
            // Mark as submitted so it doesn't show again
            localStorage.setItem('founders_modal_submitted', 'true');
          }, 2000); // Give user time to see success message
        });
      };

      return () => {
        // Cleanup on unmount
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, [open, onOpenChange]);

  const handleClose = () => {
    onOpenChange(false);
    // Optional: Mark as dismissed (won't show again this session)
    // localStorage.setItem('founders_modal_dismissed', 'true');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#12161C] border-[#A78BFA]/20 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-white">
            Founding Member Reservation
          </DialogTitle>
        </DialogHeader>
        
        {/* ConvertKit form will render here */}
        <div 
          ref={formContainerRef}
          id="convertkit-form-container"
          className="mt-4"
        />

        {/* Close button at bottom */}
        <div className="mt-4 pt-4 border-t border-[#A78BFA]/20 flex justify-center">
          <Button
            variant="ghost"
            onClick={handleClose}
            className="text-[#E6EAF0]/80 hover:text-white hover:bg-[#A78BFA]/10"
          >
            No Thanks
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

