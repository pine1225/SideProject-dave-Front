"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  async function onLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // form 기본 제출을 막음.

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BOOT_API_SERVER_URL}/api/member/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          password,
        }),
      }
    );

    const data = await res.text();
    console.log(data);
  }

  return (
    <div>
      <div>
        <Image
          src="/assets/logo/dtd_logo.png"
          alt="Game Logo"
          width={300}
          height={150}
        />
        <Link href={"/register"}>회원가입</Link>
        <div>
          <form onSubmit={onLogin}>
            <input
              name="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">로그인</button>
          </form>
        </div>
      </div>
    </div>
  );
}
