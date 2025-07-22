"use client";

import React, { useEffect, useState } from "react";
import { APIProvider, Map, AdvancedMarker, Pin, useMapsLibrary } from "@vis.gl/react-google-maps";
import type { Schedule } from "./schedule-card";

// IMPORTANT: You need to add your Google Maps API Key to a .env.local file.
// NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_API_KEY_HERE
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

type MapViewProps = {
  schedules: Schedule[];
  selectedSchedule: Schedule | null;
};

function Polylines({schedules, selectedSchedule}: MapViewProps) {
  const maps = useMapsLibrary('maps');
  const [polylines, setPolylines] = useState<google.maps.Polyline[]>([]);

  useEffect(() => {
    if (!maps) return;

    // clear old polylines
    polylines.forEach(p => p.setMap(null));

    const newPolylines = schedules.map(schedule => {
      const p = new maps.Polyline({
        path: schedule.route.points,
        strokeColor: selectedSchedule?.id === schedule.id ? 'hsl(var(--primary))' : 'grey',
        strokeOpacity: selectedSchedule?.id === schedule.id ? 1 : 0.5,
        strokeWeight: selectedSchedule?.id === schedule.id ? 6 : 3,
      });
      return p;
    });

    setPolylines(newPolylines);

    // Add a cleanup function to remove polylines from the map when the component unmounts.
    return () => {
      newPolylines.forEach(p => p.setMap(null));
    };
  }, [maps, schedules, selectedSchedule]);

  useEffect(() => {
    if(!maps) return;
    polylines.forEach(p => p.setMap(maps.Map.prototype));
  }, [maps, polylines]);


  return null;
}

export function MapView({ schedules, selectedSchedule }: MapViewProps) {
  const [center, setCenter] = useState({ lat: 40.7128, lng: -74.0060 }); // Default to NYC

  useEffect(() => {
    if (selectedSchedule && selectedSchedule.route.points.length > 0) {
      setCenter(selectedSchedule.route.points[0]);
    }
  }, [selectedSchedule]);
  
  if (!API_KEY) {
    return (
        <div className="w-full h-full bg-muted flex items-center justify-center">
            <p className="text-muted-foreground text-center p-8">
                Google Maps API Key is not configured. Please set <code className="font-code bg-gray-200 dark:bg-gray-700 p-1 rounded">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> in your environment variables.
            </p>
        </div>
    )
  }

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        center={center}
        zoom={12}
        mapId="workpool_map"
        className="w-full h-full"
        gestureHandling="greedy"
        disableDefaultUI
        transitionDuration={500}
      >
        {schedules.map((schedule) => (
          <React.Fragment key={schedule.id}>
            {schedule.route.points.length > 0 && (
                <AdvancedMarker position={schedule.route.points[0]} title={`Origin: ${schedule.origin}`}>
                    <Pin
                        background={selectedSchedule?.id === schedule.id ? 'var(--primary)' : 'grey'}
                        borderColor={selectedSchedule?.id === schedule.id ? 'hsl(var(--primary))' : 'darkgrey'}
                        glyphColor={selectedSchedule?.id === schedule.id ? 'hsl(var(--primary-foreground))' : '#fff'}
                    />
                </AdvancedMarker>
            )}
            {schedule.route.points.length > 1 && (
                 <AdvancedMarker position={schedule.route.points[schedule.route.points.length-1]} title={`Destination: ${schedule.destination}`}>
                    <span className="text-2xl">🏁</span>
                </AdvancedMarker>
            )}
          </React.Fragment>
        ))}
        <Polylines schedules={schedules} selectedSchedule={selectedSchedule} />
      </Map>
    </APIProvider>
  );
}
