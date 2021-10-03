import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="list">
        <li>
          <Link href="/">Rootpage</Link>
        </li>
        <li>
          <Link href="/home">Homepage</Link>
        </li>
      </ul>
      <style jsx>
        {`
          .list{
            list-style-type: none;
          }

          .list > li{
            display: inline;
            margin: 10px;
            font-weight: bold;
          }

          .list > li:hover{
            text-decoration: underline;
          }
        `}
      </style>
    </nav>
  );
}
