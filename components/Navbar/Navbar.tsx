import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import avatarPic from "../../assets/tanay.jpg";

export const Navbar = () => {
  return (
    <div className={styles.navbarParent}>
      <div className={styles.navbarBody}>
        <div>
          <Link href="/">
            <h1>neoG.camp</h1>
          </Link>
        </div>
        <div className={styles.navRight}>
          <Image
            width={50}
            height={50}
            className={styles.avatar}
            src={avatarPic}
            alt={`user-image`}
          />
        </div>
      </div>
    </div>
  );
};
