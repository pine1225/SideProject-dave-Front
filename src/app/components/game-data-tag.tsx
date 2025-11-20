import Link from "next/link";
import style from "./game-data-tag.module.css";

export default function GameDataTag() {
  return (
    <div className={style.tag}>
      <ul>
        <li>게임 정보</li>
        <li>
          <Link href={"/data/marinca"}>┗ 마린카</Link>
        </li>
        <li>
          <Link href={"/data/weapon"}>┗ 무기</Link>
        </li>
        <li>
          <Link href={"/data/cookmenu"}>┗ 요리</Link>
        </li>
        <li>
          <Link href={"/data/material"}>┗ 재료</Link>
        </li>
        <li>
          <Link href={"/data/employee"}>┗ 직원</Link>
        </li>
        <li>
          <Link href={"/data/farm"}>┗ FARM</Link>
        </li>
        <li>
          <Link href={"/data/music"}>┗ 음악</Link>
        </li>
      </ul>
    </div>
  );
}
