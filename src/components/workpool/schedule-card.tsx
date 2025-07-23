"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, Users, MapPin, ShieldAlert, Star, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

export type Schedule = {
  id: string;
  driver: {
    name: string;
    rating: number;
    avatarUrl: string;
  };
  origin: string;
  destination: string;
  departureTime: string;
  availableSeats: number;
  days: string[];
  route: {
    points: { lat: number, lng: number }[]
  },
  alerts: {
    type: "Traffic" | "Toll",
    message: string;
  }[]
};

type ScheduleCardProps = {
  schedule: Schedule;
  isSelected?: boolean;
};

export function ScheduleCard({ schedule, isSelected = false }: ScheduleCardProps) {
  const { toast } = useToast();

  const handleRequestJoin = () => {
    toast({
      title: "Request Sent!",
      description: `Your request to join ${schedule.driver.name}'s ride has been sent.`,
    });
  }

  return (
    <Card className={cn("transition-all duration-300 cursor-pointer hover:shadow-lg", isSelected ? "border-primary ring-2 ring-primary" : "")}>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={schedule.driver.avatarUrl} alt={schedule.driver.name} data-ai-hint="person avatar" />
            <AvatarFallback>{schedule.driver.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold font-headline">{schedule.driver.name}</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>{schedule.driver.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-2 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-muted-foreground" /> 
          <span className="font-semibold">From:</span> {schedule.origin}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span className="font-semibold">To:</span> {schedule.destination}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="font-semibold">Departs:</span> {schedule.departureTime}
        </div>
         <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-muted-foreground" />
          <div className="flex flex-wrap gap-1">
            {schedule.days.map(day => <Badge key={day} variant="secondary">{day}</Badge>)}
          </div>
        </div>
        {schedule.alerts.map((alert, index) => (
           <div key={index} className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
             <ShieldAlert className="w-4 h-4" />
             <span>{alert.message}</span>
           </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Users className="w-4 h-4 text-muted-foreground" />
          <span>{schedule.availableSeats} seats available</span>
        </div>
        <Button size="sm" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} onClick={handleRequestJoin}>
          <Send className="mr-2 h-4 w-4" />
          Request to Join
        </Button>
      </CardFooter>
    </Card>
  )
}
