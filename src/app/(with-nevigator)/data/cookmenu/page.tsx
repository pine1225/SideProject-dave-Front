import GameDataTag from "@/app/components/game-data-tag";
import GameItemCookmenu from "@/app/components/game-item-cookmenu";
import SearchCookmenu from "@/app/components/searchbar-cookmenu";
import { notFound } from "next/navigation";
import style from "./page.module.css";

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
    <div className={style.container}>
      <GameDataTag />
      <div className={style.item_container}>
        <SearchCookmenu />
        <GameItemCookmenu {...allData} />
      </div>
    </div>
  );
}
