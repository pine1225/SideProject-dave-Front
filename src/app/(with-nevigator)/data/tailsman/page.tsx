import GameDataTag from "@/app/components/game-data-tag";
import GameItemTailsman from "@/app/components/game-item-tailsman";
import { notFound } from "next/navigation";
import style from "./page.module.css";
import Image from "next/image";

export default async function Page() {
  const response = await fetch(
    `${process.env.BOOT_API_SERVER_URL}/api/data/tailsman`
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
      <div className={style.banner_outer}>
        <div className={style.image_wrap}>
          <Image
            fill
            priority
            alt="img"
            quality={90}
            src="/assets/game-img-download/No_Logo_Ver/DaveTheDiver_ScreenShot_013.png"
          />
        </div>
      </div>
      <div className={style.container}>
        <GameDataTag />
        <div>
          <GameItemTailsman {...allData} />
        </div>
      </div>
    </div>
  );
}
