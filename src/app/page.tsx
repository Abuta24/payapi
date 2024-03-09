"use client";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="zevit">
          <div className="header1">
            <Header />
            <img className="tele" src="/Group 30.svg" alt="" />
          </div>
          <h1 className="start">
            Start building with our APIs for absolutely <br />
            free.
          </h1>
          <input
            className="email"
            type="email"
            placeholder="Enter email adress"
          />
          <div className="button">
            <p className="sch">Schedule a Demo</p>
          </div>
          <p className="have">
            Have any questions?{" "}
            <Link href={"/contact"}>
              <span className="cont">Contact Us</span>
            </Link>
          </p>
        </div>
        <div className="mid">
          <div className="images">
            <img className="don" src="/Group 45.svg" alt="" />
            <img className="din" src="/Group 9.png" alt="" />
          </div>
          <h1 className="who">Who we work with</h1>
          <p className="today">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <Link href={"/about"}>
            <button className="aboutus">About Us</button>
          </Link>
        </div>
        <div className="bottom">
          <img src="/Group 14.svg" alt="" />
          <h1 className="easy">Easy to implement</h1>
          <p className="our">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
          <img src="/Group 7.svg" alt="" />
          <h1 className="simple">Simple UI & UX</h1>
          <p className="our">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
          <div className="divii">
            <div className="danayofi">
              <img className="g17" src="/Group 17.svg" alt="" />
              <h1 className="personal">Personal Finances</h1>
              <p className="consolidate">
                Consolidate financial data from multiple sources and categorize
                transactions up to 2 years of history. Analyze reports to
                reconcile activities in your account.{" "}
              </p>
            </div>
            <div className="danayofi">
              <img className="g17" src="/Group 18.svg" alt="" />
              <h1 className="personal">Banking & Coverage</h1>
              <p className="consolidate">
                With our platform, you can speed up account onboarding and
                support ongoing payments for checking, savings, credit card, and
                brokerage accounts.{" "}
              </p>
            </div>
            <div className="danayofi">
              <img className="g17" src="/Group 19.svg" alt="" />
              <h1 className="personal">Consumer Payments</h1>
              <p className="consolidate">
                It’s easier to set up secure bank payments with us through a
                flow designed with the user experience in mind. Customers could
                instantly authenticate their account.{" "}
              </p>
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
    </>
  );
}
