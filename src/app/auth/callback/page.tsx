"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function AuthCallbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParams.get("token");
    const refreshToken = searchParams.get("refreshToken");
    const error = searchParams.get("error");

    if (error) {
      // Handle error - redirect to login with error message
      router.push(`/login?error=${error}`);
      return;
    }

    if (token && refreshToken) {
      // Store tokens (localStorage, cookies, or secure storage)
      localStorage.setItem("authToken", token);
      localStorage.setItem("refreshToken", refreshToken);

      // Redirect to home or dashboard
      router.push("/");
    } else {
      // Handle missing tokens
      router.push("/login?error=authentication_failed");
    }
  }, [searchParams, router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="text-muted-foreground">Completing authentication...</p>
      </div>
    </div>
  );
}

