
"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, Car, PlusCircle, Trash2, Edit } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Car {
    id: string;
    name: string;
    model: string;
    color: string;
    numberPlate: string;
}

const mockUser = { 
    name: "Alex Ray", 
    email: "alex.ray@example.com", 
    avatar: "https://placehold.co/100x100.png",
    phone: "+1 234 567 890",
    homeAddress: "456 Oak Avenue, Anytown, USA 12345",
    workAddress: "789 Pine Street, Workville, USA 67890",
};

const initialCars: Car[] = [
    { id: "car1", name: "Primary Sedan", model: "Toyota Camry", color: "Silver", numberPlate: "S123 ABC" },
    { id: "car2", name: "Weekend SUV", model: "Ford Explorer", color: "Black", numberPlate: "F456 XYZ" },
];

export default function ProfilePage() {
    const [cars, setCars] = useState(initialCars);
    const [defaultCar, setDefaultCar] = useState("car1");

    return (
        <div className="container mx-auto py-8 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                 <Card>
                    <CardHeader className="items-center text-center">
                        <Avatar className="w-24 h-24 mb-4">
                            <AvatarImage src={mockUser.avatar} data-ai-hint="person avatar"/>
                            <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <CardTitle className="font-headline text-2xl">{mockUser.name}</CardTitle>
                        <CardDescription>{mockUser.email}</CardDescription>
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
                                <Input id="name" defaultValue={mockUser.name} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" defaultValue={mockUser.email} disabled />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" defaultValue={mockUser.phone} placeholder="e.g., +1 234 567 890" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="homeAddress">Home Address</Label>
                            <Input id="homeAddress" defaultValue={mockUser.homeAddress} placeholder="Your home address" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="workAddress">Work Address</Label>
                            <Input id="workAddress" defaultValue={mockUser.workAddress} placeholder="Your work address" />
                        </div>

                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>Save Changes</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">My Cars</CardTitle>
                        <CardDescription>Manage your vehicles for carpooling.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RadioGroup value={defaultCar} onValueChange={setDefaultCar} className="space-y-4">
                            {cars.map((car) => (
                                <div key={car.id} className="flex items-start p-4 border rounded-lg">
                                    <RadioGroupItem value={car.id} id={car.id} className="mt-1" />
                                    <Label htmlFor={car.id} className="flex-1 ml-4 cursor-pointer">
                                        <div className="font-semibold">{car.name}</div>
                                        <div className="text-sm text-muted-foreground">
                                            {car.model} - {car.color}
                                        </div>
                                        <div className="text-sm font-mono text-muted-foreground">{car.numberPlate}</div>
                                    </Label>
                                    <div className="flex gap-1">
                                      <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="h-4 w-4" /></Button>
                                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive"><Trash2 className="h-4 w-4" /></Button>
                                    </div>
                                </div>
                            ))}
                        </RadioGroup>
                    </CardContent>
                    <CardFooter>
                         <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" className="w-full">
                                    <PlusCircle className="mr-2" /> Add New Car
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add a New Car</DialogTitle>
                                    <DialogDescription>
                                        Enter your vehicle's details below.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="car-name" className="text-right">Nickname</Label>
                                        <Input id="car-name" placeholder="e.g. My Sedan" className="col-span-3" />
                                    </div>
                                     <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="car-model" className="text-right">Model</Label>
                                        <Input id="car-model" placeholder="e.g. Toyota Camry" className="col-span-3" />
                                    </div>
                                     <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="car-color" className="text-right">Color</Label>
                                        <Input id="car-color" placeholder="e.g. Silver" className="col-span-3" />
                                    </div>
                                     <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="car-plate" className="text-right">Number Plate</Label>
                                        <Input id="car-plate" placeholder="e.g. ABC-123" className="col-span-3" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button type="submit">Add Car</Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
    