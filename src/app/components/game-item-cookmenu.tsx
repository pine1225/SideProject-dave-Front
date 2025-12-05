"use client";
import { CookmenuData } from "@/types";
import Image from "next/image";
import style from "./game-item-cookmenu.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 20;

export default function GameItemCookmenu({
  data,
  message,
  q,
}: CookmenuData & { q: string }) {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const pageParam = searchParams.get("page");
  const page = pageParam ? Number(pageParam) : 1;
  const router = useRouter();

  const effectivePage = pageParam ? Number(pageParam) : currentPage;
  const cookmenu = data;

  // slice 기준
  const startIdx = (effectivePage - 1) * ITEMS_PER_PAGE;
  const currentItems = cookmenu.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(cookmenu.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (!pageParam) return;
  }, [pageParam, currentItems]);

  function btnGoPage(num: number) {
    if (q) {
      router.push(`/data/cookmenu/search?q=${q}&page=${num}`);
      return;
    }
    router.push(`/data/cookmenu?page=${num}`);
  }

  return (
    <div>
      <div className={style.container}>
        {currentItems.map((item) => (
          <div key={item.cidx} className={style.all_container}>
            <Image
              src={item.cookImg}
              alt={item.cookName}
              width={150}
              height={150}
            />
            <div className={style.right_container}>
              <div className={style.left_item_detail}>
                <div>{item.cookName}</div>
                <div>{item.cookDetail}</div>
              </div>
              <div className={style.right_item_meterial}>
                <div className={style.right_item_meterial_title}>
                  아이템 재료
                </div>
                <div className={style.right_item_detail_container}>
                  <div>
                    {item.cookMaterialName.split("|").map((name, index) => (
                      <div key={index}>{name.trim()}</div>
                    ))}
                  </div>
                  <div>
                    {item.cookMaterialNumber.split("|").map((num, index) => (
                      <div key={index}>{num.trim()}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 페이지 버튼 */}
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
