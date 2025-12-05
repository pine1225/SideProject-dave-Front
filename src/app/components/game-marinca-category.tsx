"use client";

import { useState } from "react";
import { categoryFilter } from "../util/categoryFilter";
import { useRouter } from "next/navigation";
import style from "./game-marinca-category.module.css";

const CATEGORY_LIST = [
  "전체",
  "블루홀 초입",
  "블루홀 중간수역",
  "블루홀 심해",
  "빙하 통로",
  "빙하 지역",
  "열수 분출 구역",
  "해마",
];

export default function GameMarincaCategory({ id }: { id?: string }) {
  const router = useRouter();
  const [pageCategory, setPageCategory] = useState("전체");

  return (
    <div className={style.container}>
      {CATEGORY_LIST.slice(1).map((c) => (
        <div
          key={c}
          onClick={() => {
            setPageCategory(c);
            router.push(`/data/marinca/${categoryFilter(c)}`);
          }}
          className={id === categoryFilter(c) ? style.active : style.deactivate}
        >
          {c}
        </div>
      ))}
    </div>
  );
}
