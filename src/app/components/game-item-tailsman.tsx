import { TailsmanData } from "@/types";
import Image from "next/image";
import { it } from "node:test";

export default function GameItemTailsman({ data, message }: TailsmanData) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.tidx}>
          <Image
            src={item.talismanImg}
            alt={item.talismanName}
            width={200}
            height={200}
          />
          <div>{item.talismanName}</div>
          <div>{item.talismanDetail}</div>
        </div>
      ))}
    </div>
  );
}
