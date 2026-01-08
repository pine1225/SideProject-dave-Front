"use client";

import style from "./page.module.css";
import notice from "@/mock/notice.json";
import board from "@/mock/board.json";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

const images = [
  "/assets/game-img-download/No_Logo_Ver/DaveTheDiver_Illust01.jpg",
  "/assets/game-img-download/No_Logo_Ver/DaveTheDiver_Illust02.jpg",
  "/assets/game-img-download/No_Logo_Ver/DaveTheDiver_illust_03.jpg",
  "/assets/game-img-download/No_Logo_Ver/DaveTheDiver_illust_04.png",
];

const extendedImages = [...images, images[0]];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  // const prev = () => {
  //   setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  // };

  const prev = () => {
    if (current === 0) {
      setTransition(false);
      setCurrent(images.length - 1);
      requestAnimationFrame(() => {
        setTransition(true);
      });
    } else {
      setCurrent((prev) => prev - 1);
    }
  };

  const next = () => {
    // setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTransition(true);
    setCurrent((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (current === images.length) {
      // 애니메이션 없이 처음으로 점프
      setTransition(false);
      setCurrent(0);
    }
  };

  return (
    <div>
      <div className={style.main_video}>
        <video
          src="/assets/game-img/DaveTheDiver.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div className={style.middle_content}>
        <div className={style.notice}>
          {notice.notice.map((item) => (
            <div key={item.idx}>
              <div>{item.title}</div>
            </div>
          ))}
        </div>
        <div className={style.game_start}>
          <Link
            href={"https://store.steampowered.com/app/1868140/_/"}
            target="_blank"
          >
            <Image
              src={"/assets/logo/steam_logo.png"}
              alt="String Logo"
              width={260}
              height={90}
            />
          </Link>
          <Link
            href={"https://store.nintendo.co.kr/70010000060369"}
            target="_blank"
          >
            <Image
              src={"/assets/logo/nintendo_logo.png"}
              alt="String Logo"
              width={260}
              height={90}
            />
          </Link>
          <Link
            href={"https://www.playstation.com/ko-kr/games/dave-the-diver/"}
            target="_blank"
          >
            <Image
              src={"/assets/logo/ps_logo.png"}
              alt="String Logo"
              width={260}
              height={90}
            />
          </Link>
        </div>
        <div className={style.board}>
          {board.board.map((item, i) => (
            <div key={i}>
              <div>{item.content}</div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.youtube_content}>
        <div className={style.youtube}>
          <iframe
            width={280}
            height={180}
            src="https://www.youtube.com/embed/X0hGViOxcBw"
            title="Youtube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <iframe
            width={280}
            height={180}
            src="https://www.youtube.com/embed/kqY3iz-m2qo"
            title="Youtube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <iframe
            width={280}
            height={180}
            src="https://www.youtube.com/embed/3yMR-2k127U"
            title="Youtube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <iframe
            width={280}
            height={180}
            src="https://www.youtube.com/embed/SiM4yQu5D6o"
            title="Youtube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
      <div className={style.end_content}>
        {/* <div className={style.game_img}>
          <button onClick={prev}>◀</button>
          <Image
            // src="/assets/game-img-download/No_Logo_Ver/DaveTheDiver_Illust01.jpg"
            src={images[current]}
            alt="game-img"
            width={700}
            height={400}
          />
          <button onClick={next}>▶</button>
        </div> */}

        <div className={style.slider}>
          <button className="arrow left" onClick={prev}>
            ◀
          </button>

          <div className={style.viewport}>
            <div
              className={style.track}
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${current * 100}%)`,
                transition: transition ? "transform 0.3s ease" : "none",
              }}
            >
              {extendedImages.map((src, i) => (
                <div className={style.slide} key={i}>
                  <Image src={src} alt="" fill />
                </div>
              ))}
            </div>
          </div>

          <button className="arrow right" onClick={next}>
            ▶
          </button>
        </div>

        <div className={style.game_explain}>
          <div>
            <h4>매력적인 2D/3D 아트로 구현한 환상적인 해양 생태계</h4>
            <p>
              픽셀과 3D로 아름다운 바다 환경을 표현한 독특한 아트 스타일이
              특징이다. 블루홀을 배경으로 한 바다의 공간감 속 약 200여종의 해양
              생물이 등장하여 실제 바다를 기반으로 한 환상적인 해양 생태계
              체험을 할 수 있다.
            </p>
          </div>
          <div>
            <h4>작살 포획 액션과 거대 해양 생물 전투</h4>
            <p>
              작살을 통해 신비한 블루홀에 살고 있는 다양한 생물을 포획할 수
              있다. 또한 공격성이 강한 어종 및 거대 해양 생물의 위협을 피하면서
              다양한 무기를 통해 선보이는 액션 전투와, 이를 제작/강화하여 성장을
              통하여 허들을 극복하는 재미를 선사한다.
            </p>
          </div>
          <div>
            <h4>개성적인 캐릭터와 위트 있는 스토리</h4>
            <p>
              강렬한 개성의 캐릭터를 전면에 내세워 유머러스하고 역동적인 컷씬과
              함께 스토리 몰입도를 증가시킨다. 다이버 ‘데이브’가 되어 동료들과
              함께 블루홀에서 어인족 문명을 조사 중인 고고학자 베이컨 박사를
              도와 전설 속의 해저 어인족 문명에 대해 조사하며 블루홀에 얽힌
              환경에 대한 비밀도 파헤칠 수 있다.
            </p>
          </div>
          <div>
            <h4>다양한 게임성의 적절한 결합</h4>
            <p>
              ‘데이브 더 다이버’의 컨텐츠는 크게 ‘블루홀 탐사’와 ‘초밥집 운영’
              두 가지로 나뉜다. 낮 시간 동안 2회까지 블루홀 탐사를 진행할 수
              있으며, 이후 밤이 되면 낮 동안 포획한 물고기 및 재료 등을 사용하여
              초밥집을 운영하여 자금을 모을 수 있다. 초밥집에서 모은 자금을
              사용하여 장비를 업그레이드하고 더 깊은 곳을 탐사할 수 있게 되며,
              깊은 곳에서 포획한 물고기 및 재료는 초밥집에서 더 높은 가격으로
              판매가 가능하다. 두 가지 장르의 게임성을 결합하여 게임의 완급 및
              다양한 재미를 제공하며, 게임에서 습득한 아이템이 사망 시 사라지는
              로그라이크적 재미도 갖고 있는 하이브리드 장르의 게임이다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
