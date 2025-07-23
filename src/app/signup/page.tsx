
import Link from "next/link";
import { Car } from "lucide-react";
import { UserAuthForm } from "@/components/auth/user-auth-form";

export default function SignupPage() {
  return (
    <div className="container grid h-[calc(100vh-4rem)] flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight font-headline">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your details below to create your WorkPool account
            </p>
          </div>
          <UserAuthForm formType="signup" />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage:
              "url(https://placehold.co/1200x800.png)",
          }}
          data-ai-hint="commute people car"
        />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Car className="mr-2 h-6 w-6" />
          <span className="font-headline">WorkPool</span>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;My daily commute became a way to meet new people and save a lot on fuel. Highly recommended!&rdquo;
            </p>
            <footer className="text-sm">A Happy Carpooler</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
