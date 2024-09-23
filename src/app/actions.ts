// app/actions.ts
"use server";

import { RedeemService } from "@/services/index";
import { revalidatePath } from "next/cache";

export async function addPoints(amount: 1000 | 5000 | 7500) {
  await RedeemService.addPoints(amount);
  revalidatePath("/");
}

export async function redeemProduct(productId: string) {
  await RedeemService.redeemProduct(productId);
  revalidatePath("/");
}
