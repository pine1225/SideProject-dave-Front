import GameDataTag from "@/app/components/game-data-tag";
import GameItemCookmenu from "@/app/components/game-item-cookmenu";
import SearchCookmenu from "@/app/components/searchbar-cookmenu";
import { notFound } from "next/navigation";

export default async function Page() {
  const response = await fetch(
    `${process.env.BOOT_API_SERVER_URL}/api/data/cookmenu`
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
  }

  const allData = await response.json();

  const { data, message } = allData;

  return (
    <div>
      <GameDataTag />
      <SearchCookmenu />
      <div>
        <GameItemCookmenu {...allData} />
      </div>
    </div>
  );
}
