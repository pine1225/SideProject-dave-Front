import GameItem from "@/app/components/game-item";
import mockData from "@/app/mock/marinca.json";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params;

  // async function marincaDataFetch() {
  //   const response = await fetch(

  //   )
  // }

  return (
    <div>
      <GameItem {...mockData} />
    </div>
  );
}
