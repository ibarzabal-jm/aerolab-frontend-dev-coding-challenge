import { RedeemService } from "@/services";
import { User } from "@/services/types";
import { cache } from "react";

export const getUserData = cache(async (): Promise<User> => {
  return await RedeemService.getUser();
});
