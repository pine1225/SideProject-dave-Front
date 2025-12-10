"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [id, setId] = useState("");
  const [psd, setPsd] = useState("");
  const [nick, setNick] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    fetch(`${process.env.NEXT_PUBLIC_BOOT_API_SERVER_URL}/api/member/regi`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log("회원가입 결과 : ", data));
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <Image
            src="/assets/logo/dtd_logo.png"
            alt="Game Logo"
            width={300}
            height={150}
          />
          <Link href={"/register"}>회원가입</Link>

          <div>
            <input
              name="userId"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              name="password"
              value={psd}
              onChange={(e) => setPsd(e.target.value)}
            />
            <input
              name="nickname"
              value={nick}
              onChange={(e) => setNick(e.target.value)}
            />
            <input name="thumbnail" type="file" />
          </div>

          <button type="submit">회원가입</button>
        </div>
      </form>
    </div>
  );
}
