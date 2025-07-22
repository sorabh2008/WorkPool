"use client";

import React from "react";
import { ScheduleCard, type Schedule } from "./schedule-card";
import { ScheduleFilters } from "./schedule-filters";
import { MapView } from "./map-view";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockSchedules: Schedule[] = [
  {
    id: "1",
    driver: { name: "John Doe", rating: 4.8, avatarUrl: "https://placehold.co/100x100.png" },
    origin: "123 Main St, Springfield",
    destination: "456 Market St, Metropolis",
    departureTime: "08:00 AM",
    availableSeats: 3,
    days: ["Mon", "Wed", "Fri"],
    route: {
      points: [
        { lat: 34.0522, lng: -118.2437 },
        { lat: 34.055, lng: -118.25 },
        { lat: 34.059, lng: -118.255 },
      ],
    },
    alerts: [{ type: "Toll", message: "Toll road ahead" }],
  },
  {
    id: "2",
    driver: { name: "Jane Smith", rating: 4.9, avatarUrl: "https://placehold.co/100x100.png" },
    origin: "789 Oak Ave, Gotham",
    destination: "101 Financial District, Metropolis",
    departureTime: "09:00 AM",
    availableSeats: 2,
    days: ["Tue", "Thu"],
    route: {
      points: [
        { lat: 40.7128, lng: -74.0060 },
        { lat: 40.715, lng: -73.998 },
        { lat: 40.706, lng: -73.997 },
      ],
    },
    alerts: [{ type: "Traffic", message: "Heavy traffic expected" }],
  },
  {
    id: "3",
    driver: { name: "Peter Jones", rating: 4.5, avatarUrl: "https://placehold.co/100x100.png" },
    origin: "212 Park Ave, Star City",
    destination: "202 Tech Park, Central City",
    departureTime: "07:30 AM",
    availableSeats: 1,
    days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    route: {
      points: [
        { lat: 39.9526, lng: -75.1652 },
        { lat: 39.955, lng: -75.17 },
        { lat: 39.95, lng: -75.18 },
      ],
    },
    alerts: [],
  },
];


export default function Dashboard() {
  const [schedules, setSchedules] = React.useState(mockSchedules);
  const [selectedSchedule, setSelectedSchedule] = React.useState<Schedule | null>(mockSchedules[0]);

  return (
    <div className="grid md:grid-cols-12 gap-4 p-4 h-[calc(100vh-4rem)]">
      <div className="md:col-span-4 lg:col-span-3 h-full flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <ScheduleFilters onFilterChange={() => {}} />
          </CardContent>
        </Card>
        <ScrollArea className="flex-grow">
          <div className="space-y-4 pr-4">
            {schedules.map((schedule) => (
              <div key={schedule.id} onClick={() => setSelectedSchedule(schedule)}>
                <ScheduleCard schedule={schedule} isSelected={selectedSchedule?.id === schedule.id} />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="md:col-span-8 lg:col-span-9 h-full w-full rounded-xl overflow-hidden shadow-lg border">
        <MapView schedules={schedules} selectedSchedule={selectedSchedule} />
      </div>
    </div>
  );
}
