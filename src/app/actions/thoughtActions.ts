"use server";

import prisma from "@/DB/db.config";
import { thoughtSchema } from "@/validations/thoughtValidation";
import vine, { errors } from "@vinejs/vine";
import { revalidatePath } from "next/cache";

export async function addThought(prevState: any, formData: FormData) {
  const payload = {
    title: formData.get("title"),
    thought: formData.get("thought"),
  };
  try {
    const validator = vine.compile(thoughtSchema);
    const output = await validator.validate(payload);
    console.log("The output is", output);
    await prisma.thoughts.create({
      data: {
        title: output.title,
        thought: output.thought,
      },
    });
    revalidatePath("/");
    return { status: 200, errors: {} };
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return { status: 400, errors: error.messages };
    }
  }
}

// * Delete the though
export async function deleteThought(prevState: any, formData: FormData) {
  try {
    const id = formData.get("id") as string;
    await prisma.thoughts.delete({
      where: {
        id: Number(id),
      },
    });
    revalidatePath("/");
    return { status: 200 };
  } catch (error) {
    return { status: 500 };
  }
}
