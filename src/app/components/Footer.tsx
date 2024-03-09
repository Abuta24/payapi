import Link from "next/link";

export default function Footer() {
  return (
    <div>
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
  )
}
