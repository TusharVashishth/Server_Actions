"use client";

import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { useFormState } from "react-dom";
import { deleteThought } from "@/app/actions/thoughtActions";
import { toast } from "react-toastify";

const initState = {
  status: 0,
};

export default function DeleteForm({ id }: { id: number }) {
  const [state, formAction] = useFormState(deleteThought, initState);

  useEffect(() => {
    if (state?.status == 200) {
      toast.success("Thought deleted successfully!", { theme: "colored" });
    } else if (state?.status == 500) {
      toast.error("Something went wrong!please try again!", {
        theme: "colored",
      });
    }
  }, [state]);
  return (
    <form action={formAction}>
      <input type="hidden" value={id} name="id" />
      <Button variant="destructive">
        <Trash />
      </Button>
    </form>
  );
}
