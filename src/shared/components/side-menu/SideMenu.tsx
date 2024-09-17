"use client";

import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import styles from "./SideMenu.module.css";
import { IoPersonOutline } from "react-icons/io5";
import { PiBasket, PiSignIn, PiSignOut } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { useUiStore } from "@/store";

export const SideMenu = () => {
  const isOpen = useUiStore((state) => state.isSideMenuOpen);
  const close = useUiStore((state) => state.closeSideMenu);

  return (
    <div className={`${styles.sideMenu} ${isOpen && styles.open}`}>
      {/* Background */}
      {isOpen && <div className={styles.background}></div>}

      {/* Menu */}
      <div className={styles.menu}>
        {/* Close button */}
        <span className={styles.closeIcon}>
          <IoMdClose size={21} onClick={close} />
        </span>

        {/* Search input */}
        <div className={styles.search}>
          <FiSearch size={18} />
          <input type="text" placeholder="Search" className={styles.input} />
        </div>

        {/* Nav items */}
        <div className={styles.items}>
          <div className={styles.item}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <IoPersonOutline size={20} />
              Profile
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/">
              <PiBasket size={20} />
              Orders
            </Link>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.item}>
            <Link href="/">
              <PiSignIn size={20} />
              Sign in
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/">
              <PiSignOut size={20} />
              Sign out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
