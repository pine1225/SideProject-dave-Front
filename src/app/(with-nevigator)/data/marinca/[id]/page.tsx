import GameDataTag from "@/app/components/game-data-tag";
import GameItem from "@/app/components/game-item";
import GameMarincaCategory from "@/app/components/game-marinca-category";
import Searchbar from "@/app/components/searchbar";
import { notFound, useSearchParams } from "next/navigation";
import style from "./page.module.css";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.BOOT_API_SERVER_URL}/api/data/marinca/${id}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
  }

  const categoryData = await response.json();

  const { data, count, message, category } = categoryData;

  return (
    <div className={style.container}>
      <GameDataTag />
      <div className={style.item_container}>
        <GameMarincaCategory id={id} />
        <Searchbar />
        <GameItem {...categoryData} />
      </div>
    </div>
  );
}
