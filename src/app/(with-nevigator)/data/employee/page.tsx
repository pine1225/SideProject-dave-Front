import GameDataTag from "@/app/components/game-data-tag";
import GameItemEmployee from "@/app/components/game-item-employee";
import { notFound } from "next/navigation";

export default async function Page() {
  const response = await fetch(
    `${process.env.BOOT_API_SERVER_URL}/api/data/employee`
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
      <GameDataTag />
      <div>
        <GameItemEmployee {...allData} />
      </div>
    </div>
  );
}
