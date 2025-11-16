import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68df51ac1ddb88e340d9a5c1", 
  requiresAuth: true // Ensure authentication is required for all operations
});
