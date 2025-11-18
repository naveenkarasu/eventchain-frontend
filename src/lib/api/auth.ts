/**
 * API client for authentication service
 */

const getAuthApiUrl = (): string => {
    return process.env.NEXT_PUBLIC_AUTH_API_URL || 'https://localhost:7024';
  };
  
  /**
   * Initiates Google OAuth login by redirecting to backend endpoint
   */
  export const initiateGoogleLogin = (): void => {
    const authApiUrl = getAuthApiUrl();
    const googleAuthUrl = `${authApiUrl}/api/auth/google`;
    
    // Redirect to backend OAuth endpoint
    window.location.href = googleAuthUrl;
  };
  
  /**
   * Gets the auth service API base URL
   */
  export const getAuthServiceUrl = (): string => {
    return getAuthApiUrl();
  };