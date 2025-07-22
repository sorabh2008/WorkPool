"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { PlusCircle, Trash2 } from "lucide-react";

export default function PublishRidePage() {
  const [waypoints, setWaypoints] = useState<string[]>([]);
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const addWaypoint = () => {
    if (waypoints.length < 5) {
      setWaypoints([...waypoints, ""]);
    }
  };

  const removeWaypoint = (index: number) => {
    const newWaypoints = waypoints.filter((_, i) => i !== index);
    setWaypoints(newWaypoints);
  };
  
  const handleWaypointChange = (index: number, value: string) => {
    const newWaypoints = [...waypoints];
    newWaypoints[index] = value;
    setWaypoints(newWaypoints);
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Offer a Ride</CardTitle>
          <CardDescription>Share your commute details with the WorkPool community.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="origin">Origin</Label>
                <Input id="origin" placeholder="e.g., 123 Main St, Springfield" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Input id="destination" placeholder="e.g., 456 Market St, Metropolis" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Pick-up / Drop-off Points (up to 5)</Label>
              {waypoints.map((waypoint, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input 
                    value={waypoint}
                    onChange={(e) => handleWaypointChange(index, e.target.value)}
                    placeholder={`Stop ${index + 1}`}
                  />
                  <Button type="button" variant="ghost" size="icon" onClick={() => removeWaypoint(index)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              {waypoints.length < 5 && (
                <Button type="button" variant="outline" size="sm" onClick={addWaypoint}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add a stop
                </Button>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="time">Departure Time</Label>
                <Input id="time" type="time" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="seats">Available Seats</Label>
                <Input id="seats" type="number" min="1" max="8" placeholder="e.g., 3" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price per Seat ($)</Label>
                <Input id="price" type="number" min="0" placeholder="e.g., 5.00" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Days of the Week</Label>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
                {daysOfWeek.map(day => (
                  <div key={day} className="flex items-center space-x-2">
                    <Checkbox id={day.toLowerCase()} />
                    <Label htmlFor={day.toLowerCase()} className="font-normal">{day}</Label>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full" size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
            Publish Ride
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
