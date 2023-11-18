// import { type } from "os";
// import zod from "zod";

// export const ThoughtSchema = zod.object({
//   title: zod.string().min(4).max(50),
//   thought: zod.string().min(10).max(500),
// });

// type ThoughtSchema = zod.infer<typeof ThoughtSchema>;

import vine from "@vinejs/vine";
import { CustomErrorReporter } from "./CustomErrorReporter";

vine.errorReporter = () => new CustomErrorReporter();

export const thoughtSchema = vine.object({
  title: vine.string().minLength(4).maxLength(50),
  thought: vine.string().minLength(10).maxLength(1000),
});
