import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formateDate } from "@/helper";
import DeleteForm from "./DeleteForm";

export default function ThoughtCard({ thought }: { thought: ThoughtType }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{thought.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{thought.thought}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>{formateDate(thought.createdAt)}</p>
        <DeleteForm id={thought.id} />
      </CardFooter>
    </Card>
  );
}
