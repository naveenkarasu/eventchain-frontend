import { GoogleLoginButton } from "@/components/GoogleLoginButton";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome to EventChain
          </h1>
          <p className="text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
          <div className="space-y-6">
            {/* Google Login Button */}
            <GoogleLoginButton />

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Placeholder for other login methods */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground text-center">
                Other login methods coming soon:
              </p>
              <div className="flex flex-col gap-2">
                <button
                  disabled
                  className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground opacity-50 cursor-not-allowed"
                >
                  Email / Password
                </button>
                <button
                  disabled
                  className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground opacity-50 cursor-not-allowed"
                >
                  Web3 Wallet
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground">
          By continuing, you agree to EventChain's Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}