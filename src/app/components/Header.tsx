"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [show, setShow] = useState(false)
  return (
    <div>
        <header className="cont">
        <div className="headeri">
          <img src="/Group 21.svg" alt="" />
          <img
            onClick={() => {
              setShow(true);
            }}
            src="/Group.svg"
            className="cursor-pointer"
            alt=""
          />
          {show && (
            <div className="showze">
              <img
                onClick={() => {
                  setShow(false);
                }}
                className="cancel"
                src="/Group 31.svg"
                alt=""
              />
              <div className="xazebi"></div>
              <nav>
                <Link href={"/pricing"}>
                  <h1 className="route">Pricing</h1>
                </Link>
                <Link href={"/about"}>
                  <h1 className="route">About</h1>
                </Link>
                <Link href={"/contact"}>
                  <h1 className="route">Contact</h1>
                </Link>
              </nav>
              <button className="raremr">Schedule a Demo</button>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}
