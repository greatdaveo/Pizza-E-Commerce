import React from "react";
import SharedLayout from "@/components/SharedLayout";
import { client, urlFor } from "@/library/client";
import style from "../../styles/Pizza.module.css";
import leftArrow from "../../assets/arrowLeft.png";
import rightArrow from "../../assets/arrowRight.png";
import Image from "next/image";
import { useState } from "react";

const Pizza = ({ pizza }) => {
  // console.log(pizza);
  const src = urlFor(pizza.image).url();

  const [size, setSize] = useState(1);
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    type === "increment"
      ? setQuantity((prev) => prev + 1)
      : quantity === 1
      ? null
      : setQuantity((prev) => prev - 1);
  };

  return (
    <SharedLayout>
      <div className={style.container}>
        <div className={style.ImageWrapper}>
          <Image
            loader={() => src}
            src={src}
            alt=""
            layout="fill"
            unoptimized
            objectFit="cover"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className={style.right_side}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>
          <span>
            <span style={{ color: "var(--themeRed" }}>$</span>
            {pizza.price[size]}
          </span>

          <div className={style.size}>
            <span>Size</span>
            <div className={style.size_variant}>
              <div
                onClick={() => setSize(0)}
                className={size === 0 ? style.selected : ""}
              >
                Small
              </div>
              <div
                onClick={() => setSize(1)}
                className={size === 1 ? style.selected : ""}
              >
                Medium
              </div>
              <div
                onClick={() => setSize(2)}
                className={size === 2 ? style.selected : ""}
              >
                Large
              </div>
            </div>
          </div>

          <div className={style.quantity}>
            <span>Quantity</span>

            <div className={style.counter}>
              <Image
                src={leftArrow}
                alt=""
                height={20}
                width={20}
                objectFit="contain"
                onClick={() => handleQuantity("decrement")}
              />
              <span>{quantity}</span>
              <Image
                src={rightArrow}
                alt=""
                height={20}
                width={20}
                objectFit="contain"
                onClick={() => handleQuantity("increment")}
              />
            </div>
          </div>

          <div className={`btn ${style.btn}`}>Add to cart</div>
        </div>
      </div>
    </SharedLayout>
  );
};

export default Pizza;

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_type=="pizza" && slug.current == "${slug}"][0]`
  );
  return {
    props: {
      pizza,
    },
  };
}
