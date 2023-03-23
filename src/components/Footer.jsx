import React from "react";
import style from "../styles/Footer.module.css";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <span>ALL RIGHT RESERVED</span>
      <div className={style.social_icons}>
        <FaGithub size={35} color="var(--themeRed)" />
        <FaFacebook size={35} color="var(--themeRed)" />
        <FaInstagram size={35} color="var(--themeRed)" />
      </div>

      <div className={style.logo}>
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <span>FUDO</span>
      </div>
    </footer>
  );
};

export default Footer;
