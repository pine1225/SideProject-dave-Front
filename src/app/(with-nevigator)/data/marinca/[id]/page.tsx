import GameDataTag from "@/app/components/game-data-tag";
import GameItem from "@/app/components/game-item";
import GameMarincaCategory from "@/app/components/game-marinca-category";
import Searchbar from "@/app/components/searchbar";
import { notFound, useSearchParams } from "next/navigation";
import style from "./page.module.css";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.BOOT_API_SERVER_URL}/api/data/marinca/${id}`,
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
  }

  const categoryData = await response.json();

  const { data, count, message, category } = categoryData;

  return (
    <div>
      <div className={style.banner_outer}>
        <div className={style.image_wrap}>
          <Image
            fill
            priority
            alt="img"
            quality={90}
            src="/assets/game-img-download/No_Logo_Ver/DaveTheDiver_ScreenShot_003.png"
          />
        </div>
      </div>
      <div className={style.container}>
        <GameDataTag />
        <div className={style.item_container}>
          <GameMarincaCategory />
          <Searchbar />
          <GameItem {...categoryData} />
        </div>
      </div>
    </div>
  );
}
