"use client";

import { Product } from "@/shared";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const imageBasePath = "/images/products/";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [displayImg, setDisplayImg] = useState(product.images[0]);

  const onImageMouseIn = () => {
    if (product.images.length > 1) {
      setDisplayImg(product.images[1]);
    }
  };

  const onImageMouseOut = () => {
    setDisplayImg(product.images[0]);
  };

  const getImagePath = () => {
    return `${imageBasePath}${displayImg}`;
  };

  return (
    <div className={styles.productCard}>
      <Link
        href={`/products/${product.slug}`}
        style={{ textDecoration: "none" }}
      >
        <Image
          src={getImagePath()}
          width={200}
          height={200}
          alt="Product"
          onMouseEnter={onImageMouseIn}
          onMouseLeave={onImageMouseOut}
        />

        <div className={styles.details}>
          <span className={styles.title}>{product.title}</span>
          <span className={styles.price}>
            <strong>${product.price}</strong>
          </span>
        </div>
      </Link>
    </div>
  );
};
