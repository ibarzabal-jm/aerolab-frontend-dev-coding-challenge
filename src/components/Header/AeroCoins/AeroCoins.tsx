import AeroCoinsClient from "./AeroCoinsClient";
import { getUserData } from "@/lib/getUserData";

export default async function AeroCoins() {
  const user = await getUserData();

  return <AeroCoinsClient user={user} />;
}
