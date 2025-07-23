
"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FeedbackDialog } from "@/components/workpool/feedback-dialog";

const mockTrips = [
  {
    id: "trip1",
    date: "2024-07-20",
    origin: "123 Main St, Springfield",
    destination: "456 Market St, Metropolis",
    driver: "John Doe",
    status: "Completed",
    feedbackGiven: false,
  },
  {
    id: "trip2",
    date: "2024-07-19",
    origin: "789 Oak Ave, Gotham",
    destination: "101 Financial District, Metropolis",
    driver: "You",
    status: "Completed",
    feedbackGiven: true,
  },
  {
    id: "trip3",
    date: "2024-07-18",
    origin: "212 Park Ave, Star City",
    destination: "202 Tech Park, Central City",
    driver: "Peter Jones",
    status: "Completed",
    feedbackGiven: false,
  },
  {
    id: "trip4",
    date: "2024-07-17",
    origin: "123 Main St, Springfield",
    destination: "456 Market St, Metropolis",
    driver: "John Doe",
    status: "Completed",
    feedbackGiven: true,
  },
];

export default function HistoryPage() {
  const [trips, setTrips] = useState(mockTrips);
  const [selectedTripId, setSelectedTripId] = useState<string | null>(null);

  const handleFeedbackSubmit = (tripId: string) => {
    setTrips(trips.map(trip => trip.id === tripId ? { ...trip, feedbackGiven: true } : trip));
    setSelectedTripId(null);
  };

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Trip History</CardTitle>
          <CardDescription>A record of all your completed carpool journeys.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Origin</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trips.map((trip) => (
                <TableRow key={trip.id}>
                  <TableCell>{trip.date}</TableCell>
                  <TableCell>{trip.origin}</TableCell>
                  <TableCell>{trip.destination}</TableCell>
                  <TableCell>{trip.driver === "You" ? "Driver" : "Passenger"}</TableCell>
                  <TableCell>
                    <Badge variant={trip.status === "Completed" ? "default" : "secondary"} className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {trip.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {trip.feedbackGiven ? (
                      <span className="text-sm text-muted-foreground">Feedback Sent</span>
                    ) : (
                      <FeedbackDialog 
                        tripId={trip.id} 
                        otherUserName={trip.driver === "You" ? "the passenger" : trip.driver} 
                        isDriver={trip.driver === "You"}
                        onFeedbackSubmit={handleFeedbackSubmit} 
                      />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
