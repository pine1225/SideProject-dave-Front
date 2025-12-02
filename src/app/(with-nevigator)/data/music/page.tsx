import GameDataTag from "@/app/components/game-data-tag";
import GameItemMusic from "@/app/components/game-item-music";
import { notFound } from "next/navigation";
import style from "./page.module.css";

export default async function Page() {
  const response = await fetch(
    `${process.env.BOOT_API_SERVER_URL}/api/data/music`
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
      <div className={style.music_content}>
        <GameItemMusic {...allData} />
      </div>
    </div>
  );
}
