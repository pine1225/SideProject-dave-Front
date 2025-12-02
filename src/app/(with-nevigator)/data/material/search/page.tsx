import GameItemFarm from "@/app/components/game-item-farm";
import GameItemMaterial from "@/app/components/game-item-material";
import SearchbarMaterial from "@/app/components/searchbar-material";
import { MaterialItem } from "@/types";
import { notFound } from "next/navigation";

async function SearchResult({ q }: { q: string }) {
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

  const normalize = (s: string) => s.replace(/\s+/g, "");
  const fields = [
    "materialName",
    "materialCategory",
    "materialDetail",
    "materialMenu",
  ] as const;
  const nq = normalize(q);

  const result = data.filter((item: MaterialItem) =>
    fields.some((fields) => normalize(item[fields]).includes(nq))
  );

  if (result.length === 0) {
    return <div>검색결과가 없습니다.</div>;
  }

  allData.data = result;

  return <GameItemMaterial {...allData} q={q} />;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return (
    <div>
      <SearchbarMaterial />
      <SearchResult q={q || ""} />
    </div>
  );
}
