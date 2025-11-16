import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client - DISABLED AUTH REQUIREMENT to prevent redirects to Base44 hosting
// Set requiresAuth to false to prevent automatic redirects
export const base44 = createClient({
  appId: "68df51ac1ddb88e340d9a5c1", 
  requiresAuth: false // Changed to false to prevent redirects to Base44 hosting
});
