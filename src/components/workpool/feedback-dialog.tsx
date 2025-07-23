
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface FeedbackDialogProps {
  tripId: string;
  otherUserName: string;
  isDriver: boolean;
  onFeedbackSubmit: (tripId: string) => void;
}

const feedbackCategories = [
  { id: "friendliness", label: "Friendly" },
  { id: "punctuality", label: "Punctual" },
  { id: "behavior", label: "Behavior" },
  { id: "cleanliness", label: "Cleanliness" },
  { id: "driving", label: "Driving Skills" },
];

export function FeedbackDialog({ tripId, otherUserName, isDriver, onFeedbackSubmit }: FeedbackDialogProps) {
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleRating = (category: string, value: number) => {
    setRatings(prev => ({ ...prev, [category]: value }));
  };

  const handleSubmit = () => {
    // Here you would typically send the feedback to your backend
    console.log("Feedback submitted for trip", tripId, ratings);
    toast({
      title: "Feedback Submitted!",
      description: "Thank you for helping us improve our community.",
    });
    onFeedbackSubmit(tripId);
    setOpen(false);
  };
  
  const categoriesToShow = isDriver 
    ? feedbackCategories.filter(c => c.id !== 'driving') 
    : feedbackCategories;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">Leave Feedback</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Rate Your Experience</DialogTitle>
          <DialogDescription>
            Provide feedback for your trip with {otherUserName}. Your ratings are anonymous.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {categoriesToShow.map(category => (
            <div key={category.id} className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor={category.id} className="text-right">
                {category.label}
              </Label>
              <div className="col-span-2 flex">
                {[1, 2, 3, 4, 5].map(star => (
                  <button key={star} onClick={() => handleRating(category.id, star)}>
                    <Star
                      className={cn(
                        "w-6 h-6 cursor-pointer",
                        star <= (ratings[category.id] || 0)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>Submit Feedback</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

