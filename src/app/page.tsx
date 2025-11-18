export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          EventChain
        </h1>
        <p className="text-lg text-muted-foreground max-w-md">
          Decentralized event management and attendance tracking with NFT verification
        </p>
        <div className="flex gap-4">
          <a
            href="/events"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Browse Events
          </a>
          <a
            href="/login"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
          >
            Sign In
          </a>
        </div>
      </main>
    </div>
  );
}
