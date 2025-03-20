"use server";

import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  customer_id: z.string(),
  amount: z.number(),
  date: z.string(),
  status: z.enum(["pending", "paid"]),
});
const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  const { customer_id, amount, status } = CreateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
}
