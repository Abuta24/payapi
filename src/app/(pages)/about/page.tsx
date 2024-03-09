"use client";
import { useState } from "react";
import Link from "next/link";

export default function page() {
  const [show, setShow] = useState(false);
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
      <div className="topl">
        <h1 className="we">
          We empower innovators by delivering access to the financial system
        </h1>
        <div className="boxe">
          <p className="vis">Our Vision</p>
          <p className="omain">
            Our main goal is to build beautiful consumer experiences along with
            developer-friendly infrastructure. The result is an intelligent tool
            that gives everyone the ability to create amazing products that
            solve big problems. We are deeply focused on democratizing financial
            services through technology.
          </p>
        </div>
        <div className="boxe">
          <p className="vis">Our Business</p>
          <p className="omain">
            At the core of our platform is the technical infrastructure APIs
            that connect consumers. Our innovative product provides key insights
            for businesses and individuals, as well as robust reporting for
            traditional financial institutions and developers.
          </p>
        </div>
        <div className="dudghvna">
          <img className="don" src="/ojaxi.png" alt="" />
          <img className="din" src="/Bitmap.png" alt="" />
        </div>
        <div className="zesection">
          <div className="section">
            <div className="lineee"></div>
            <div className="xe">
              <p className="teamm">Team Members</p>
              <h1 className="digit">300+</h1>
            </div>
            <div className="lineee din"></div>
          </div>
          <div className="section">
            <div className="lineee din"></div>
            <div className="xe">
              <p className="teamm">Offices in the US</p>
              <h1 className="digit">3</h1>
            </div>
            <div className="lineee din"></div>
          </div>
          <div className="section">
            <div className="lineee din"></div>
            <div className="xe">
              <p className="teamm">Transactions analyzed</p>
              <h1 className="digit">10M+</h1>
            </div>
            <div className="lineee din"></div>
          </div>
        </div>
        <div className="lineee don"></div>
        <div className="tyvlipa">
          <h1 className="ty">The Culture</h1>
          <p className="tyy">
            We strongly believe there's always an opportunity to learn from each
            other outside of day-to-day work, whether it's company-wide
            offsites, internal hackathons, or co-worker meetups. We always value
            cross-team collaboration and diversity of thought, no matter the job
            title.
          </p>
        </div>
        <div className="tyvlipa">
          <h1 className="ty">The People</h1>
          <p className="tyy">
            We're all passionate about building a more efficient and inclusive
            financial infrastructure together. At PayAPI, we have diverse
            backgrounds and skills.
          </p>
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
        <p className="have">
          Have any questions?{" "}
          <Link href={"/contact"}>
            <span className="cont">Contact Us</span>
          </Link>
        </p>
      </div>
      <div className="height"></div>
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
