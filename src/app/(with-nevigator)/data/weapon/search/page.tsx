import GameItemWeapon from "@/app/components/game-item-weapon";
import SearchbarWeapon from "@/app/components/searchbar-weapon";
import { WeaponItem } from "@/types";
import { notFound } from "next/navigation";
import style from "./page.module.css";
import GameDataTag from "@/app/components/game-data-tag";
import Image from "next/image";

async function SearchResult({ q }: { q: string }) {
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

  const normalize = (s: string) => s.replace(/\s+/g, "");
  const fields = ["weaponName", "weaponDetail", "weaponMaterialName"] as const;
  const nq = normalize(q);

  const result = data.filter((item: WeaponItem) =>
    fields.some((fields) => normalize(item[fields]).includes(nq))
  );

  // const result = data.filter((item: WeaponItem) => {
  //   const name = normalize(item.weaponName);
  //   const detail = normalize(item.weaponDetail);
  //   const material = normalize(item.weaponMaterialName);

  //   return name.includes(nq) || detail.includes(nq) || material.includes(nq);

  // });

  if (result.length === 0) {
    return <div>검색결과가 없습니다.</div>;
  }

  allData.data = result;

  return <GameItemWeapon {...allData} q={q} />;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  // console.log(q);

  return (
    <div>
      <div className={style.banner_outer}>
        <div className={style.image_wrap}>
          <Image
            fill
            priority
            alt="img"
            quality={90}
            src="/assets/game-img-download/DaveTheDiver_ScreenShot04.jpg"
          />
        </div>
      </div>
      <div className={style.container}>
        <GameDataTag />
        <div className={style.item_container}>
          <SearchbarWeapon />
          <SearchResult q={q || ""} />
        </div>
      </div>
    </div>
  );
}
