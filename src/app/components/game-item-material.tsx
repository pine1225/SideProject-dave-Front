"use client";

import { MaterialData } from "@/types";
import Image from "next/image";
import style from "./game-item-material.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 12;

export default function GameItemMaterial({
  data,
  message,
  q,
}: MaterialData & { q: string }) {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const pageParam = searchParams.get("page");
  const page = pageParam ? Number(pageParam) : 1;
  const router = useRouter();

  const effectivePage = pageParam ? Number(pageParam) : currentPage;
  const material = data;

  const startIdx = (effectivePage - 1) * ITEMS_PER_PAGE;
  const currentItems = material.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(material.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (!pageParam) return;
  }, [pageParam, currentItems]);

  function btnGoPage(num: number) {
    if (q) {
      router.push(`/data/material/search?q=${q}&page=${num}`);
      return;
    }

    router.push(`/data/material?page=${num}`);
  }

  return (
    <div>
      <div className={style.container}>
        {currentItems.map((item) => (
          <div key={item.midx}>
            <div className={style.all_container}>
              <div className={style.left_item_detail}>
                <Image
                  src={item.materialImg}
                  alt={item.materialName}
                  width={180}
                  height={180}
                  style={{ borderRadius: "8px" }}
                />
                <div className={style.item_detail}>
                  <div className={style.title}>{item.materialName}</div>
                  <div>분류 {item.materialCategory}</div>
                </div>
                <div className={style.item_material_detail}>
                  {item.materialDetail}
                </div>
              </div>
              <div>
                <div className={style.p_menu_title}>가능한 메뉴</div>
                {item.materialMenu.split(",").map((name, index) => (
                  <div key={index} className={style.p_menu}>
                    {name.trim()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* 페이지 버튼 */}
      </div>
      <div className={style.pagination}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => btnGoPage(num)}
            className={
              num === Number(page) ? style.activePage : style.pageButton
            }
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
