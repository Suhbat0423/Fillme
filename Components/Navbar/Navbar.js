import { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router.events]);

  return (
    <div className={style.navbar}>
      <h1>
        <Link href="/">Fillme</Link>
      </h1>
      <ul className={`${style.ul} ${isOpen ? style.show : ""}`}>
        <li className={router.pathname === "/about" ? style.active : ""}>
          <Link href="/about">Бидний тухай</Link>
        </li>
        <li className={router.pathname === "/surveys" ? style.active : ""}>
          <Link href="/surveys">Судалгаанууд</Link>
        </li>
        <li className={router.pathname === "/reward" ? style.active : ""}>
          <a href="/reward">Урамшуулал</a>
        </li>
        <li className={router.pathname === "/login" ? style.active : ""}>
          <Link href="/login">Нэвтрэх</Link>
        </li>
      </ul>
      <i className="fa fa-navicon" onClick={() => setIsOpen(!isOpen)}></i>
    </div>
  );
};

export default Navbar;
