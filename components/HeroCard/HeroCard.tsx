import React from "react";
import styles from "./HeroCard.module.css";
import Image from "next/image";
import HeroImg from "../../assets/hero.svg";

const HeroCard = () => {
  return (
    <div className={styles.HeroCardParent}>
      <div className={styles.HeroCardDescrip}>
        <h1>Hi Tanay! 👋</h1>
        <p>
          Thank you for your time! <br />
          You have reviewed{" "}
          <span className={styles.reviewedPortfolioNo}>15</span> portfolio till
          now. Ready for more ?
        </p>
      </div>
      <div className={styles.HeroCardImgDiv}>
        <Image src={HeroImg} alt={`user-pic`} />
      </div>
    </div>
  );
};

export default HeroCard;
