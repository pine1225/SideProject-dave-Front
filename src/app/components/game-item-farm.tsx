import { FarmData } from "@/types";
import Image from "next/image";
import style from "./game-item-farm.module.css";

export default function GameItemFarm({ data, message }: FarmData) {
  return (
    <div className={style.container}>
      {data.map((item) => (
        <div key={item.fidx} className={style.item_container}>
          <Image
            src={item.farmImg}
            alt={item.farmName}
            width={150}
            height={150}
            style={{ borderRadius: "5px" }}
          />
          <div className={style.item_info}>
            <div>{item.farmName}</div>
            <div>{item.farmCategory}</div>
          </div>
          <div className={style.item_detail}>{item.farmDetail}</div>
        </div>
      ))}
    </div>
  );
}
