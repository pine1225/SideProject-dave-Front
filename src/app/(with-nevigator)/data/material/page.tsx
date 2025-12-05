import GameDataTag from "@/app/components/game-data-tag";
import GameItemMaterial from "@/app/components/game-item-material";
import SearchbarMaterial from "@/app/components/searchbar-material";
import { notFound } from "next/navigation";
import style from "./page.module.css";

export default async function Page() {
  const response = await fetch(
    `${process.env.BOOT_API_SERVER_URL}/api/data/material`
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
        <SearchbarMaterial />
        <GameItemMaterial {...allData} />
      </div>
    </div>
  );
}
