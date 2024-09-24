import { RedeemService } from "@/services/index";
import AeroCoinsClient from "./AeroCoinsClient";

export default async function AeroCoins() {
  const user = await RedeemService.getUser();

  return <AeroCoinsClient user={user} />;
}
