import Image from "next/image";
import React from "react";
import style from "../styles/Hero.module.css";
import Cherry from "../assets/Cherry.png";
import HeroImage from "../assets/HeroImage.png";
import Pizza1 from "../assets/p1.jpg";
import { GrPhone } from "react-icons/gr";

const Hero = () => {
  return (
    <div className={style.hero_container}>
      {/* FOR THE LEFT HERO */}
      <div className={style.left_hero_container}>
        <div className={style.left_hero}>
          <span>More than Faster</span>
          <Image src={Cherry} alt="" width={40} height={25} />
        </div>

        <div className={style.hero_text}>
          <span>BE THE FASTEST</span>
          <span>IN DELIVERING</span>
          <span>
            Your <span style={{ color: "var(--themeRed)" }}>Pizza </span>
          </span>
        </div>

        <span className={style.mini_text}>
          Our Mission is to filling your tummy with delicious food and with fast
          and free delivery
        </span>

        <button className={`btn ${style.btn}`}>Get Started</button>
      </div>

      {/* FOR THE RIGHT HERO */}
      <div className={style.right_hero}>
        <div className={style.image_container}>
          <Image src={HeroImage} alt="" layout="intrinsic" />
        </div>
        <div className={style.contact_us}>
          <span>Contact Us</span>
          <div>
            <GrPhone color="white" />
          </div>
        </div>

        <div className={style.pizza}>
          <div>
            <Image src={Pizza1} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <div className={style.pizza_details}>
            <span>Italian Pizza</span>
            <span>
              <span style={{ color: "var(--themeRed)" }}>$</span> 7.49
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
