import Link from "next/link";
import { Car } from "lucide-react";
import { UserAuthForm } from "@/components/auth/user-auth-form";

export default function LoginPage() {
  return (
    <div className="container grid h-[calc(100vh-4rem)] flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage:
              "url(https://placehold.co/1200x800.png)",
          }}
          data-ai-hint="city traffic highway"
        />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Car className="mr-2 h-6 w-6" />
          <span className="font-headline">WorkPool</span>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Sharing a ride is not just about saving money, it's about building a community and a greener planet.&rdquo;
            </p>
            <footer className="text-sm">A WorkPool User</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight font-headline">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and password to sign in to your account
            </p>
          </div>
          <UserAuthForm formType="login" />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
