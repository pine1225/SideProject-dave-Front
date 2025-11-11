import GameItem from "@/app/components/game-item";
import Searchbar from "@/app/components/searchbar";
import { notFound, useSearchParams } from "next/navigation";

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
    <div>
      <Searchbar />
      <GameItem {...categoryData} />
    </div>
  );
}
