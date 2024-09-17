'use client';

import Link from "next/link";

import styles from './TopMenu.module.css';
import { BsCart3 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { titleFont } from "@/config/fonts";
import { useUiStore } from "@/store";

export const TopMenu = () => {
  const openSideMenu = useUiStore((state) => state.openSideMenu);

  return (
    <nav className={styles.topMenu}>
      <span className={styles.logo}>
        <Link href="/" className={titleFont.className}>Teslo</Link>
        <span>|</span>
        <span>Shop</span>
      </span>

      <div className={styles.navItems}>
        <Link href="/categories/men">Men</Link>
        <Link href="/categories/women">Women</Link>
        <Link href="/categories/children">Children</Link>
      </div>

      <div className={styles.actions}>
        <Link href="/search">
          <FiSearch></FiSearch>
        </Link>

        <span className={styles.cartIcon}>
          <Link href="/cart">
            <BsCart3></BsCart3>
          </Link>
          <span className={styles.cartCount}>3</span>
        </span>

        <span onClick={openSideMenu}>
          <IoMdMenu></IoMdMenu>
        </span>
      </div>
    </nav>
  );
};