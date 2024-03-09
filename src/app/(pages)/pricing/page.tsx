"use client";
import { useState } from "react";
import Link from "next/link";

export default function pricing() {
  const [show, setShow] = useState(false);
  return (
    <div>
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
      <div className="main">
        <h1 className="pricing">Pricing</h1>
        <div className="zedanay">
          <div className="danay">
            <h1 className="free">Free Plan</h1>
            <p className="buildand">
              Build and test using our core set of products with up to 100 API
              requests{" "}
            </p>
            <h1 className="money">$0.00</h1>
            <div className="line"></div>
            <div className="check">
              <img src="/Path 3.svg" alt="" />
              <p className="done">Transactions</p>
            </div>
            <div className="check">
              <img src="/Path 3.svg" alt="" />
              <p className="done">Auth</p>
            </div>
            <div className="check">
              <img src="/Path 3.svg" alt="" />
              <p className="done">Identity</p>
            </div>
            <div className="check">
              <img className="dn" src="/Path 3.svg" alt="" />
              <p className="undone">Investments</p>
            </div>
            <div className="check">
              <img className="dn" src="/Path 3.svg" alt="" />
              <p className="undone">Assets</p>
            </div>
            <div className="check">
              <img className="dn" src="/Path 3.svg" alt="" />
              <p className="undone">Liabilities</p>
            </div>
            <div className="check">
              <img className="dn" src="/Path 3.svg" alt="" />
              <p className="undone">Income</p>
            </div>
            <div className="line"></div>
            <button className="req">Request Access</button>
          </div>
          <div className="danay">
            <h1 className="free">Basic Plan</h1>
            <p className="buildand">
              Launch your project with unlimited requests and no contractual
              minimums{" "}
            </p>
            <h1 className="money">$249.00</h1>
            <div className="line"></div>
            <div className="check">
              <img src="/Path 3.svg" alt="" />
              <p className="done">Transactions</p>
            </div>
            <div className="check">
              <img src="/Path 3.svg" alt="" />
              <p className="done">Auth</p>
            </div>
            <div className="check">
              <img src="/Path 3.svg" alt="" />
              <p className="done">Identity</p>
            </div>
            <div className="check">
              <img src="/Path 3.svg" alt="" />
              <p className="done">Investments</p>
            </div>
            <div className="check">
              <img src="/Path 3.svg" alt="" />
              <p className="done">Assets</p>
            </div>
            <div className="check">
              <img className="dn" src="/Path 3.svg" alt="" />
              <p className="undone">Liabilities</p>
            </div>
            <div className="check">
              <img className="dn" src="/Path 3.svg" alt="" />
              <p className="undone">Income</p>
            </div>
            <div className="line"></div>
            <button className="req">Request Access</button>
          </div>
          <div className="danay">
            <h1 className="free">Premium Plan</h1>
            <p className="buildand">
              Get tailored solutions, volume pricing, and dedicated support for
              your team{" "}
            </p>
            <h1 className="money">$499.00</h1>
            <div className="line"></div>
            <div className="check">
              <img src="/Path 3.svg" alt="" />
              <p className="done">Transactions</p>
            </div>
            <div className="check">
              <img src="/Path 3.svg" alt="" />
              <p className="done">Auth</p>
            </div>
            <div className="check">
              <img src="/Path 3.svg" alt="" />
              <p className="done">Identity</p>
            </div>
            <div className="check">
              <img src="/Path 3.svg" alt="" />
              <p className="done">Investments</p>
            </div>
            <div className="check">
              <img src="/Path 3.svg" alt="" />
              <p className="done">Assets</p>
            </div>
            <div className="check">
              <img src="/Path 3.svg" alt="" />
              <p className="done">Liabilities</p>
            </div>
            <div className="check">
              <img src="/Path 3.svg" alt="" />
              <p className="done">Income</p>
            </div>
            <div className="line"></div>
            <button className="req">Request Access</button>
          </div>
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
