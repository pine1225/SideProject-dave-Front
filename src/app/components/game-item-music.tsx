import { MusicData } from "@/types";
import Image from "next/image";

export default function GameItemMusic({ data, message }: MusicData) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.midx}>
          <Image
            src={item.musicImg}
            alt={item.musicName}
            width={250}
            height={250}
          />
          <div>{item.musicName}</div>
          <div>{item.musicComposer}</div>
        </div>
      ))}
    </div>
  );
}
