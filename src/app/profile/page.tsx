import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function ProfilePage() {
    const user = { 
        name: "Alex Ray", 
        email: "alex.ray@example.com", 
        avatar: "https://placehold.co/100x100.png",
        phone: "+1 234 567 890",
        homeAddress: "456 Oak Avenue, Anytown, USA 12345",
        workAddress: "789 Pine Street, Workville, USA 67890",
    }; // Mock user with new fields

    return (
        <div className="container mx-auto py-8">
            <Card className="max-w-2xl mx-auto">
                <CardHeader className="items-center text-center">
                    <Avatar className="w-24 h-24 mb-4">
                        <AvatarImage src={user.avatar} data-ai-hint="person avatar"/>
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="font-headline text-2xl">{user.name}</CardTitle>
                    <CardDescription>{user.email}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Alert>
                        <Info className="h-4 w-4" />
                        <AlertTitle>Your Information is Private</AlertTitle>
                        <AlertDescription>
                            The details below are for verification and fraud prevention purposes only. They will never be shared with other users.
                        </AlertDescription>
                    </Alert>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" defaultValue={user.name} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" defaultValue={user.email} disabled />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" defaultValue={user.phone} placeholder="e.g., +1 234 567 890" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="homeAddress">Home Address</Label>
                        <Input id="homeAddress" defaultValue={user.homeAddress} placeholder="Your home address" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="workAddress">Work Address</Label>
                        <Input id="workAddress" defaultValue={user.workAddress} placeholder="Your work address" />
                    </div>

                </CardContent>
                <CardFooter>
                    <Button className="w-full" size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>Save Changes</Button>
                </CardFooter>
            </Card>
        </div>
    );
}