import React from "react";
import Image from "next/image";
import style from "../styles/Header.module.css";
import Logo from "../assets/Logo.png";
import Link from "next/link";
import { GiShoppingCart } from "react-icons/gi";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <span>FUDO</span>
      </div>

      <ul className={style.menu}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/menu">Menu</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div className={style.navIcon}>
        <div className={style.cartIcon}>
          <GiShoppingCart size={35} color="#2e2e2e" />
          <div className={style.badge}>1</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
