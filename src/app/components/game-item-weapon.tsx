"use client";

import { WeaponData } from "@/types";
import Image from "next/image";
import style from "./game-item-weapon.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 9;

export default function GameItemWeapon({
  data,
  message,
  q,
}: WeaponData & { q: string }) {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const pageParam = searchParams.get("page");
  const page = pageParam ? Number(pageParam) : 1;
  const router = useRouter();

  const effectivePage = pageParam ? Number(pageParam) : currentPage;
  const weapon = data;

  // slice 기준
  const startIdx = (effectivePage - 1) * ITEMS_PER_PAGE;
  const currentItems = weapon.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(weapon.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (!pageParam) return;
  }, [pageParam, currentItems]);

  function btnGoPage(num: number) {
    console.log(q);
    if (q) {
      router.push(`/data/weapon/search?q=${q}&page=${num}`);
      return;
    }

    router.push(`/data/weapon?page=${num}`);
  }

  return (
    <div>
      <div className={style.container}>
        {currentItems.map((item) => (
          <div key={item.widx} className={style.all_content}>
            <div className={style.top_container}>
              <Image
                src={item.weaponImg}
                alt={item.weaponName}
                width={140}
                height={141}
              />
              <div className={style.top_right_container}>
                <h3>{item.weaponName}</h3>
                <div>{item.weaponDetail}</div>
              </div>
            </div>
            <div className={style.bottom_right_effect_container}>
              <div className={style.bottom_item_effect}>
                <h4>아이템 효과</h4>
                <div className={style.bottom_right_item_container}>
                  <ul className={style.effect}>
                    <li>대미지</li>
                    <li>사거리</li>
                    <li>탄약수</li>
                    <li>속석</li>
                  </ul>
                  <ul className={style.effect}>
                    <li>{item.weaponDamage}</li>
                    <li>{item.weaponDistance}</li>
                    <li>{item.weaponNumber}</li>
                    <li>{item.weaponProperties}</li>
                  </ul>
                </div>
              </div>
              <div className={style.bottom_right_material}>
                <h4>아이템 재료</h4>
                <div className={style.bottom_right_item_container}>
                  <ul className={style.effect}>
                    {item.weaponMaterialName.split("|").map((name, index) => (
                      <li key={index}>{name.trim()}</li>
                    ))}
                  </ul>
                  <ul className={style.effect}>
                    {item.weaponMaterialNumber
                      .split("|")
                      .map((level, index) => (
                        <li key={index}>{level.trim()}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* main_content end */}
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
