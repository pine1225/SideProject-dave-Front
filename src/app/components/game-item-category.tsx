"use client";

import { MarincaData, MarincaItem } from "@/types";
import style from "./game-item-category.module.css";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { categoryFilter } from "../util/categoryFilter";
import { handleClick } from "../util/handleSearch";

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

export default function GameItemCategory({
  data,
  count,
  message,
  category,
}: MarincaData) {
  const router = useRouter();
  const [items, setItems] = useState(data);
  const [pageCategory, setPageCategory] = useState("전체");
  const [detailCategory, setDetailCategory] = useState("");

  // category에 따라 필터링
  const filtered =
    pageCategory === "전체"
      ? items
      : items.filter((item) => item.marineCategory === pageCategory);

  function pageHandleClick(items: MarincaItem[], item: MarincaItem) {
    const url = handleClick(items, item);
    router.push(url);
  }

  return (
    <div>
      <div className={style.div_container}>
        <div>상세 보기</div>
        {CATEGORY_LIST.slice(1).map((c) => (
          <div
            key={c}
            onClick={() => {
              setPageCategory(c);
              router.push(`data/${categoryFilter(c)}`);
            }}
          >
            {c}
          </div>
        ))}
      </div>
      <div className={style.button_container}>
        {CATEGORY_LIST.map((c) => (
          <button key={c} onClick={() => setPageCategory(c)}>
            {c}
          </button>
        ))}
      </div>

      <div className={style.container}>
        {filtered.map((item) => (
          <div key={item.idx} onClick={() => pageHandleClick(items, item)}>
            <Image
              src={item.marineImg}
              alt={item.marineName}
              width={150}
              height={150}
            />
            <h3>{item.marineName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
