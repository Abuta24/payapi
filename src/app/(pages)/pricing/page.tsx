"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function pricing() {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}
