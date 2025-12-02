import { TailsmanData } from "@/types";
import Image from "next/image";
import style from "./game-item-tailsman.module.css";

export default function GameItemTailsman({ data, message }: TailsmanData) {
  return (
    <div className={style.container}>
      {data.map((item) => (
        <div key={item.tidx} className={style.item_container}>
          <Image
            src={item.talismanImg}
            alt={item.talismanName}
            width={180}
            height={180}
          />
          <div className={style.item_info}>
            <div>{item.talismanName}</div>
            <div>{item.talismanDetail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
