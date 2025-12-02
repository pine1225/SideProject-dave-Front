import GameItemWeapon from "@/app/components/game-item-weapon";
import SearchbarWeapon from "@/app/components/searchbar-weapon";
import { WeaponItem } from "@/types";
import { notFound } from "next/navigation";

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
      <SearchbarWeapon />
      <SearchResult q={q || ""} />
    </div>
  );
}
