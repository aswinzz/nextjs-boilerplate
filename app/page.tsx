import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ApiDemo } from "@/app/components/ApiDemo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <div className="flex flex-col items-center gap-6 max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Next.js Boilerplate
        </h1>
        <p className="text-lg text-muted-foreground">
          A reusable frontend boilerplate designed to accelerate project setup using Next.js, Clerk for authentication, TailwindCSS with ShadCN UI, TypeScript, and a robust API client.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <SignUpButton mode="modal">
            <Button size="lg">Sign Up</Button>
          </SignUpButton>
          <SignInButton mode="modal">
            <Button size="lg" variant="outline">Sign In</Button>
          </SignInButton>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3">
        <FeatureCard
          title="Next.js App Router"
          description="Built with the latest Next.js App Router for optimal performance and SEO."
        />
        <FeatureCard
          title="Clerk Authentication"
          description="Secure and simple authentication with Clerk, including sign up and sign in buttons."
        />
        <FeatureCard
          title="ShadCN UI + TailwindCSS"
          description="Beautiful UI components with ShadCN and the flexibility of TailwindCSS."
        />
      </div>
      
      <div className="w-full max-w-3xl mt-12">
        <ApiDemo />
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
