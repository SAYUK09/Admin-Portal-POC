import React from "react";
import styles from "./ReviewPortfolioCard.module.css";

const ReviewPortfolioCard = () => {
  return (
    <div className={styles.ReviewPortfolioCardParent}>
      <p className={styles.applicationNo}>
        Application Number : #122
        {/* Will Display Data Fetched From BE*/}
      </p>
      <div className={styles.studentDetails}>
        <p>Name : Tanay</p>
        <p>Portfolio : https://adarshbalika.netlify.app</p>
        {/* Will Display Data Fetched From BE*/}
      </div>
      <div className={styles.revisionInputDiv}>
        <textarea
          className={styles.revisionText}
          name="revision"
          placeholder="State Revisions Here"
        ></textarea>
      </div>
      <div className={styles.buttonsDiv}>
        <button className={styles.secondaryBtn}>Needs Revision</button>
        <button className={styles.primaryBtn}>Ready for mark15</button>
      </div>
    </div>
  );
};

export default ReviewPortfolioCard;
