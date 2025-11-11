import Link from "next/link";
import Image from "next/image";
import style from "./nevigator.module.css";

export default function Nevigator() {
  return (
    <div className={style.container}>
      <div className={style.nav_left}>
        <Link href={`https://pressmintrocket.oopy.io/dave_the_diver_kr`}>
          <Image
            src="/assets/logo/mintrocket_logo.png"
            alt="Game logo"
            width={100}
            height={50}
          />
        </Link>
        <Link href={`/`}>
          <Image
            src="/assets/logo/dtd_logo.png"
            alt="Game logo"
            width={100}
            height={50}
          />
        </Link>
        <Link href={`/data`}>게임 정보</Link>
        <Link href={`/notice`}>새 소식</Link>
        <Link href={`/board`}>커뮤니티</Link>
      </div>
      <div className={style.nav_right}>
        <Link href={`/login`}>로그인</Link>
        <Link href={`/register`}>회원가입</Link>
      </div>
    </div>
  );
}
