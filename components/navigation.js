import Link from "next/link";   //Importamos el link de next que usaremos para rutear.

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>INDEX</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
      </li>
    </ul>
  );
}; 

export default Navigation;
