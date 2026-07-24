import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  company: z.string().trim().optional(),
  project: z.string().trim().min(10, "Give a short description of the project."),
  budget: z.string().optional(),
  message: z.string().trim().min(10, "Message is a bit short — add a few more details."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;