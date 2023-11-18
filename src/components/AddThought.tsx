"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui//button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import SubmitButton from "./SubmitButton";
import { addThought } from "@/app/actions/thoughtActions";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { X } from "lucide-react";

const initFormState = {
  status: 0,
  errors: {},
};

export default function AddThought() {
  const [state, formAction] = useFormState(addThought, initFormState);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (state?.status == 200) {
      toast.success("Thought created successfully", { theme: "colored" });
      setOpen(false);
    }
  }, [state]);
  return (
    <Dialog modal open={open}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Add Thought</Button>
      </DialogTrigger>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="flex justify-between ">
            <p>What's your today thought?</p>{" "}
            <X className="cursor-pointer" onClick={() => setOpen(false)} />
          </DialogTitle>
        </DialogHeader>
        <form action={formAction}>
          <div className="mt-5">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter your title" name="title" />
            <span className="text-red-400">{state?.errors?.title}</span>
          </div>
          <div className="mt-5">
            <Label htmlFor="thought">Thought</Label>
            <Textarea
              id="thought"
              placeholder="Enter your thought"
              name="thought"
            />
            <span className="text-red-400">{state?.errors?.thought}</span>
          </div>
          <div className="mt-5">
            <SubmitButton text="Submit" />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
