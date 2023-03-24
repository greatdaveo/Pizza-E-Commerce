import { urlFor } from "@/library/client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import style from "../styles/Menu.module.css";

const Menu = ({ pizzas }) => {
  return (
    <menu className={style.menu_container}>
      <div className={style.menu_heading}>
        <span>OUR MENU</span>
        <span>Menu That Always</span>
        <span>Make You Fall In Love</span>
      </div>

      <div className={style.data_container}>
        {pizzas.map((pizza, id) => {
          const src = urlFor(pizza.image).url();

          return (
            <div className={style.pizza} key={pizza.id}>
              <Link href={`./pizza/${pizza.slug.current}`}>
                <div className={style.ImageWrapper}>
                  <Image
                    loader={() => src}
                    src={src}
                    alt=""
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </Link>

              <span>{pizza.name}</span>
              <span>
                <span style={{ color: "var(--themeRed" }}>$</span>
                {pizza.price[1]}
              </span>
            </div>
          );
        })}
      </div>
    </menu>
  );
};

export default Menu;
