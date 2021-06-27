import React from "react";
import styles from "./ReviewPortfolios.module.css";
import Image from "next/image";
import Link from "next/link";
import linkSvg from "../../assets/link.svg";

const ReviewPortfolios = () => {
  return (
    <div className={styles.ReviewPortfoliosParent}>
      <h2>I am ready to review portfolio</h2>

      <Link href="review-portfolio">
        <Image
          width={30}
          height={30}
          className={styles.avatar}
          src={linkSvg}
          alt={`user-image`}
        />
      </Link>
    </div>
  );
};

export default ReviewPortfolios;
