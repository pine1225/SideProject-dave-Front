import GameItemCategory from "@/app/components/game-item-category";
import style from "./page.module.css";
import { notFound } from "next/navigation";
import Searchbar from "@/app/components/searchbar";
import GameDataTag from "@/app/components/game-data-tag";
import GameMarincaCategory from "@/app/components/game-marinca-category";

export default async function Page() {
  const response = await fetch(
    `${process.env.BOOT_API_SERVER_URL}/api/data/marinca`
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
  }

  const allData = await response.json();

  const { data, count, message, category } = allData;

  return (
    <div className={style.main_content}>
      <GameDataTag />
      <div className={style.main_data}>
        <GameMarincaCategory />
        <Searchbar />
        <GameItemCategory {...allData} />
      </div>
    </div>
  );
}
