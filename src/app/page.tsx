import Link from "next/link";
import React from "react";

export default function Home() {
  return(
  <>
    <header>
      <h1>To Do list</h1>
      <Link href="./new"> New</Link>
    </header>
  </>)
}
