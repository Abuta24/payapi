"use client";
import { useState } from "react";
import Link from "next/link";

export default function page() {
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <header>
        <div className="headeri">
          <img src="/Group 21.svg" alt="" />
          <img
            onClick={() => {
              setShow(true);
            }}
            src="/Group.svg"
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
      <div className="dauhw">
        <h1 className="deda">
          Submit a help request and we’ll get in touch shortly.
        </h1>
        <div className="inputs">
          <input className="chasaweri" type="text" placeholder="Name" />
          <div className="xazi"></div>
          <input
            className="chasaweri"
            type="email"
            placeholder="Email Address"
          />
          <div className="xazi"></div>
          <input className="chasaweri" type="text" placeholder="Company Name" />
          <div className="xazi"></div>
          <input className="chasaweri" type="text" placeholder="Title" />
          <div className="xazi"></div>
          <input
            id="bolo"
            className="chasaweri"
            type="text"
            placeholder="Message"
          />
        </div>
        <div className="xazi"></div>
        <div className="tick">
          <div className="boxi"></div>
          <p className="tickp">
            Stay up-to-date with company announcements and updates to our API
          </p>
        </div>
        <button className="sub">Submit</button>
      </div>
      <div className="qvedanaw">
        <h1 className="join">
          Join the thousands of innovators already building with us
        </h1>
        <img className="don" src="/Group 9.svg" alt="" />
        <img className="din" src="/Group 2.png" alt="" />
      </div>
      <h1 className="ready">Ready to start?</h1>
      <div className="xuina">
        <input
          className="email"
          type="email"
          placeholder="Enter email adress"
        />
        <div className="button">
          <p className="sch">Schedule a Demo</p>
        </div>
      </div>
      <footer>
        <img className="ramraer" src="/Group 21.svg" alt="" />
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
        <img className="dauwhdiua" src="/Group 24.svg" alt="" />
      </footer>
    </div>
  );
}
