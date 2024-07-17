"use client";
import Image from "next/image";
import Main from "./main";

export default function mainpage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-20">
      <Main></Main>
    </main>
  );
}