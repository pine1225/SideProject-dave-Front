import { MarincaData, MarincaItem } from "@/types";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import Searchbar from "@/app/components/searchbar";
import { handleClick } from "@/app/util/handleSearch";
import style from "./page.module.css";
import GameItem from "@/app/components/game-item";

async function SearchResult({ q }: { q: string }) {
  const response = await fetch(
    `${process.env.BOOT_API_SERVER_URL}/api/data/marinca`
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
  }

  const allData = await response.json();
  //   console.log(allData);

  const { data, count, message, category } = allData;

  const normalize = (s: string) => s.replace(/\s+/g, "");

  const result = data.filter((item: MarincaItem) =>
    normalize(item.marineName).includes(normalize(q))
  );

  allData.data = result;

  return (
    // <div className={style.container}>
    //   {result.map((item: MarincaItem) => (
    //     <div key={item.idx}>
    //       <Image
    //         src={item.marineImg}
    //         alt={item.marineName}
    //         width={150}
    //         height={150}
    //       />
    //       <h3>{item.marineName}</h3>
    //     </div>
    //   ))}
    // </div>
    <GameItem {...allData} q={q} />
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  //   console.log(q);

  return (
    <div>
      <Searchbar />
      <SearchResult q={q || ""} />
    </div>
  );
}
