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

const mockTrips = [
  {
    id: "trip1",
    date: "2024-07-20",
    origin: "123 Main St, Springfield",
    destination: "456 Market St, Metropolis",
    driver: "John Doe",
    status: "Completed",
  },
  {
    id: "trip2",
    date: "2024-07-19",
    origin: "789 Oak Ave, Gotham",
    destination: "101 Financial District, Metropolis",
    driver: "You",
    status: "Completed",
  },
  {
    id: "trip3",
    date: "2024-07-18",
    origin: "212 Park Ave, Star City",
    destination: "202 Tech Park, Central City",
    driver: "Peter Jones",
    status: "Completed",
  },
  {
    id: "trip4",
    date: "2024-07-17",
    origin: "123 Main St, Springfield",
    destination: "456 Market St, Metropolis",
    driver: "John Doe",
    status: "Completed",
  },
];

export default function HistoryPage() {
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTrips.map((trip) => (
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
