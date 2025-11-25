import { FarmData } from "@/types";
import Image from "next/image";
import { it } from "node:test";

export default function GameItemFarm({ data, message }: FarmData) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.fidx}>
          <div>
            <Image
              src={item.farmImg}
              alt={item.farmName}
              width={200}
              height={200}
            />
            <div>
              <div>{item.farmName}</div>
              <div>{item.farmCategory}</div>
            </div>
          </div>
          <div>{item.farmDetail}</div>
        </div>
      ))}
    </div>
  );
}
