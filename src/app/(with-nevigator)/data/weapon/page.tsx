import { notFound } from "next/navigation";
import style from "./page.module.css";
import GameDataTag from "@/app/components/game-data-tag";
import GameMarincaCategory from "@/app/components/game-marinca-category";
import Searchbar from "@/app/components/searchbar";
import GameItemCategory from "@/app/components/game-item-category";
import GameItemWeapon from "@/app/components/game-item-weapon";
import SearchbarWeapon from "@/app/components/searchbar-weapon";

export default async function Page() {
  const response = await fetch(
    `${process.env.BOOT_API_SERVER_URL}/api/data/weapon`
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
      <div className={style.main_data}>
        <SearchbarWeapon />
        <GameItemWeapon {...allData} />
      </div>
    </div>
  );
}
