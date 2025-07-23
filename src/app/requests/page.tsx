"use client"

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Car, User } from "lucide-react";
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

type RequestStatus = 'Pending' | 'Approved' | 'Rejected';

interface RideRequest {
  id: string;
  requester: {
    name: string;
    avatarUrl: string;
  };
  ride: {
    origin: string;
    destination: string;
    date: string;
  };
  status: RequestStatus;
}

const initialRequests: RideRequest[] = [
  {
    id: 'req1',
    requester: { name: 'Charlie Brown', avatarUrl: 'https://placehold.co/100x100.png' },
    ride: { origin: '123 Main St, Springfield', destination: '456 Market St, Metropolis', date: '2024-07-25' },
    status: 'Pending',
  },
  {
    id: 'req2',
    requester: { name: 'Lucy van Pelt', avatarUrl: 'https://placehold.co/100x100.png' },
    ride: { origin: '123 Main St, Springfield', destination: '456 Market St, Metropolis', date: '2024-07-25' },
    status: 'Approved',
  },
  {
    id: 'req3',
    requester: { name: 'Linus van Pelt', avatarUrl: 'https://placehold.co/100x100.png' },
    ride: { origin: '789 Oak Ave, Gotham', destination: '101 Financial District, Metropolis', date: '2024-07-26' },
    status: 'Rejected',
  },
];

export default function RequestsPage() {
  const [requests, setRequests] = useState<RideRequest[]>(initialRequests);
  const { toast } = useToast();

  const handleRequest = (id: string, newStatus: 'Approved' | 'Rejected') => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: newStatus } : req));
    toast({
      title: `Request ${newStatus}`,
      description: `The ride request has been successfully ${newStatus.toLowerCase()}.`,
    })
  };

  const getStatusBadge = (status: RequestStatus) => {
    switch (status) {
      case 'Approved':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Approved</Badge>;
      case 'Rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">Pending</Badge>;
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Ride Requests</CardTitle>
          <CardDescription>Manage incoming requests from other users to join your rides.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {requests.map(request => (
            <Card key={request.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4">
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={request.requester.avatarUrl} data-ai-hint="person avatar" />
                  <AvatarFallback>{request.requester.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold"><User className="inline-block mr-2 h-4 w-4" />{request.requester.name} has requested to join your ride.</p>
                  <p className="text-sm text-muted-foreground"><Car className="inline-block mr-2 h-4 w-4" />{request.ride.origin} to {request.ride.destination} on {request.ride.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-center">
                {request.status === 'Pending' ? (
                  <>
                    <Button size="sm" variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700" onClick={() => handleRequest(request.id, 'Approved')}>
                      <Check className="mr-2 h-4 w-4" /> Approve
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700" onClick={() => handleRequest(request.id, 'Rejected')}>
                      <X className="mr-2 h-4 w-4" /> Reject
                    </Button>
                  </>
                ) : (
                  getStatusBadge(request.status)
                )}
              </div>
            </Card>
          ))}
           {requests.length === 0 && (
            <div className="text-center text-muted-foreground py-12">
              <Inbox className="mx-auto h-12 w-12" />
              <p className="mt-4">You have no pending ride requests.</p>
            </div>
           )}
        </CardContent>
      </Card>
    </div>
  );
}
