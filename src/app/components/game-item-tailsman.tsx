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
            width={160}
            height={160}
            style={{ borderRadius: "5px" }}
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
