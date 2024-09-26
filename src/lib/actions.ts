// app/actions.ts
"use server";

import { RedeemService } from "@/services/index";
import { PossibleAmountOfPoints } from "@/services/types";
import { revalidatePath } from "next/cache";

export async function addPoints(amount: PossibleAmountOfPoints) {
  await RedeemService.addPoints(amount);
  revalidatePath("/");
}

export async function redeemProduct(productId: string) {
  await RedeemService.redeemProduct(productId);
  revalidatePath("/");
}
