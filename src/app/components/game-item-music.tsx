import { MusicData } from "@/types";
import Image from "next/image";
import style from "./game-item-musice.module.css";
import Link from "next/link";

export default function GameItemMusic({ data, message }: MusicData) {
  return (
    <div className={style.container}>
      {data.map((item) => (
        <div key={item.midx}>
          <Link href={item.musicUrl} target="_blank">
            <Image
              src={item.musicImg}
              alt={item.musicName}
              width={150}
              height={150}
            />
          </Link>
          <div className={style.item_title}>{item.musicName}</div>
          <div>{item.musicComposer}</div>
        </div>
      ))}
    </div>
  );
}
