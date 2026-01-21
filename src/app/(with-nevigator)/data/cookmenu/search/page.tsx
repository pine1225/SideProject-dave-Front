import GameItemCategory from "@/app/components/game-item-category";
import GameItemCookmenu from "@/app/components/game-item-cookmenu";
import SearchCookmenu from "@/app/components/searchbar-cookmenu";
import { CookmenuItem } from "@/types";
import { notFound } from "next/navigation";
import style from "./page.module.css";
import GameDataTag from "@/app/components/game-data-tag";
import Image from "next/image";

async function SearchResult({ q }: { q: string }) {
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

  const normalize = (s: string) => s.replace(/\s+/g, "");
  const fields = ["cookName", "cookDetail", "cookMaterialName"] as const;
  const nq = normalize(q);

  const result = data.filter((item: CookmenuItem) =>
    fields.some((fields) => normalize(item[fields]).includes(nq))
  );

  if (result.length === 0) {
    return <div>검색결과가 없습니다.</div>;
  }

  allData.data = result;

  return <GameItemCookmenu {...allData} q={q} />;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <div>
      <div className={style.banner_outer}>
        <div className={style.image_wrap}>
          <Image
            fill
            priority
            alt="img"
            quality={90}
            src="/assets/game-img-download/DaveTheDiver_ScreenShot14.jpg"
          />
        </div>
      </div>
      <div className={style.container}>
        <GameDataTag />
        <div className={style.item_container}>
          <SearchCookmenu />
          <SearchResult q={q || ""} />
        </div>
      </div>
    </div>
  );
}
