
import Link from "next/link";
import { Car, TrendingUp, Users, Smile, Leaf, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background to-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Share Your Commute. Save Your Planet.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    WorkPool is the smart carpooling app that connects you with coworkers and neighbors to make your daily commute cheaper, greener, and more enjoyable.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                    <Link href="/signup">
                      Get Started for Free
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="Hero"
                data-ai-hint="happy people carpooling"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Why You'll Love WorkPool</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We've built a platform focused on trust, convenience, and community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
              <div className="grid gap-1 text-center">
                <Leaf className="h-10 w-10 mx-auto text-green-500" />
                <h3 className="text-lg font-bold">Save Money &amp; Planet</h3>
                <p className="text-sm text-muted-foreground">Cut down on fuel costs, reduce vehicle wear and tear, and shrink your carbon footprint with every shared ride.</p>
              </div>
              <div className="grid gap-1 text-center">
                <Users className="h-10 w-10 mx-auto text-blue-500" />
                <h3 className="text-lg font-bold">Build Your Community</h3>
                <p className="text-sm text-muted-foreground">Connect with colleagues and neighbors. Turn a boring commute into an opportunity to network and make friends.</p>
              </div>
              <div className="grid gap-1 text-center">
                <ShieldCheck className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-lg font-bold">Verified &amp; Secure</h3>
                <p className="text-sm text-muted-foreground">Your safety is our priority. We verify users and provide a secure platform for you to plan your trips with confidence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Three Easy Steps to a Better Commute</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Getting started with WorkPool is simple.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">1</span> Find a Ride</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Enter your commute route and schedule to find drivers heading your way.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                   <CardTitle className="flex items-center gap-2"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">2</span> Offer a Ride</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Got empty seats? Publish your ride details and let passengers join your route.</p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">3</span> Travel Together</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Coordinate, meet up, and enjoy a smarter, more connected commute.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl font-headline mb-12">What Our Users Say</h2>
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                    <Card>
                        <CardContent className="pt-6">
                            <blockquote className="text-lg leading-relaxed">
                            &ldquo;Using WorkPool has cut my fuel bill in half! I've also met some great people from other departments at my company. It's a win-win.&rdquo;
                            </blockquote>
                        </CardContent>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Image src="https://placehold.co/100x100.png" width={48} height={48} alt="User Avatar" data-ai-hint="person avatar" className="w-12 h-12 rounded-full" />
                            <div>
                                <p className="font-semibold">Sarah L.</p>
                                <p className="text-sm text-muted-foreground">Marketing Manager</p>
                            </div>
                        </CardHeader>
                    </Card>
                     <Card>
                        <CardContent className="pt-6">
                            <blockquote className="text-lg leading-relaxed">
                            &ldquo;I was skeptical about carpooling, but WorkPool's safety features made me feel secure. Now, I can't imagine going back to driving alone.&rdquo;
                            </blockquote>
                        </CardContent>
                        <CardHeader className="flex flex-row items-center gap-4">
                             <Image src="https://placehold.co/100x100.png" width={48} height={48} alt="User Avatar" data-ai-hint="person avatar" className="w-12 h-12 rounded-full" />
                            <div>
                                <p className="font-semibold">Mike T.</p>
                                <p className="text-sm text-muted-foreground">Software Engineer</p>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 WorkPool. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
