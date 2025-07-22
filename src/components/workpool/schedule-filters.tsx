"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Search } from "lucide-react"

type ScheduleFiltersProps = {
    onFilterChange: (filters: any) => void;
}

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


export function ScheduleFilters({ onFilterChange }: ScheduleFiltersProps) {
  return (
    <form className="grid gap-6">
      <div className="grid gap-2">
        <Label htmlFor="origin">Origin</Label>
        <Input id="origin" placeholder="e.g., Downtown" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="destination">Destination</Label>
        <Input id="destination" placeholder="e.g., Tech Park" />
      </div>
      <div className="grid gap-2">
        <Label>Days of the week</Label>
        <div className="grid grid-cols-4 gap-2">
            {daysOfWeek.map(day => (
                <div key={day} className="flex items-center space-x-2">
                    <Checkbox id={day.toLowerCase()} />
                    <Label htmlFor={day.toLowerCase()} className="text-sm font-normal">{day}</Label>
                </div>
            ))}
        </div>
      </div>
      <Button type="submit" className="w-full" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
        <Search className="mr-2 h-4 w-4" />
        Search
      </Button>
    </form>
  )
}
