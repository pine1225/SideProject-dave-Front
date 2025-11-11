"use client";

import { MarincaData } from "@/types";
import style from "./game-item.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const ITEMS_PER_PAGE = 7;

export default function GameItem({
  data,
  count,
  message,
  category,
  q,
}: MarincaData & { q: string }) {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const pageParam = searchParams.get("page");
  const page = pageParam ? Number(pageParam) : 1;
  const item = Number(searchParams.get("item") ?? -1);
  const idx = Number(searchParams.get("idx") ?? -1);
  const router = useRouter();

  const effectivePage = pageParam ? Number(pageParam) : currentPage;

  // slice 기준
  const startIdx = (effectivePage - 1) * ITEMS_PER_PAGE;
  const currentItems = data.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  // scroll
  // useEffect(() => {
  //   if (!pageParam) return; // URL param 없으면 scroll X

  //   const el = document.getElementById(`item-${item}`);
  //   console.log(el);
  //   if (el) {
  //     el.scrollIntoView({ behavior: "auto", block: "start" });
  //   }
  // }, [pageParam, item]);

  useEffect(() => {
    if (!pageParam) return;

    // DOM render 후 호출하도록 지연
    setTimeout(() => {
      const el = document.getElementById(`item-${idx}`);
      // console.log(el);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "center" });

        // const rect = el.getBoundingClientRect(); // 요소의 현재 화면 상대 좌표
        // const scrollTop = window.scrollY; // 현재 스크롤 위치

        // const offset = rect.top + scrollTop - 200; // 원하는 위치(200px 여유)

        // window.scrollTo({
        //   top: offset,
        //   behavior: "auto",
        // });
      }
    }, 0);
  }, [pageParam, idx, currentItems]);

  function btnGoPage(num: number) {
    console.log(q);
    if (q) {
      console.log(`/data/search?q=${q}&page=${num}`);
      router.push(`/data/search?q=${q}&page=${num}`);
      return;
    }

    router.push(`?page=${num}`);
  }

  return (
    <div className={style.main_content}>
      {currentItems.map((item) => (
        <div
          key={item.idx}
          id={`item-${item.idx}`}
          className={`${style.item_container} ${
            item.idx === idx ? style.activeItem : ""
          }`}
        >
          <div>
            <Image
              src={item.marineImg}
              alt={item.marineName}
              width={250}
              height={250}
            />
          </div>
          <div className={style.data_container}>
            <h3>{item.marineName}</h3>
            <div className={style.detail_container}>
              <ul className={style.list_container}>
                <li>분류</li>
                <li>{item.marineCategory}</li>
              </ul>
              <ul className={style.list_container}>
                <li>활동시간</li>
                <li>{item.marineActive}</li>
              </ul>
            </div>
            <div className={style.detail_main}>{item.marineDetail}</div>
            <h4>능력치</h4>
            <table className={style.ability}>
              <thead>
                <tr>
                  <th>크기</th>
                  <th>획득 장소</th>
                  <th>Rank</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.marineSize}</td>
                  <td>{item.marineLocation}</td>
                  <td>{item.marineRank}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}

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
