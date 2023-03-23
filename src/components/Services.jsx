import Image from "next/image";
import React from "react";
import style from "../styles/Services.module.css";
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";

const Services = () => {
  return (
    <>
      <div className={style.service_heading}>
        <span>WHAT WE SERVE</span>
        <span>Your Favourite Food</span>
        <span>Delivery Partner</span>
      </div>

      <div className={style.service_details}>
        <div className={style.detail}>
          <div className={style.img_container}>
            <Image src={S1} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Easy to Order</span>
          <span>You only need a few steps in food ordering</span>
        </div>

        <div className={style.detail}>
          <div className={style.img_container}>
            <Image src={S2} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Easy to Order</span>
          <span>Delivery that is always on time even faster</span>
        </div>
        <div className={style.detail}>
          <div className={style.img_container}>
            <Image src={S3} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Easy to Order</span>
          <span>Not only fast for us, qulity is also number one</span>
        </div>
      </div>
    </>
  );
};

export default Services;
