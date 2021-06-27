import React from "react";
import ReviewPortfolioCard from "../components/ReviewPortfolioCard/ReviewPortfolioCard";
import styles from "../styles/review-portfolio.module.css";

const reviewPortfolio = () => {
  return (
    <div className={styles.ReviewPortfolioParent}>
      <h1>REVIEW PORTFOLIO</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fuga labore
        aliquam expedita? Sequi rem eos nulla, totam veritatis distinctio, sit
        corporis, ipsum obcaecati esse voluptatibus ab fuga dolor ratione.
      </p>
      <ReviewPortfolioCard />
    </div>
  );
};

export default reviewPortfolio;
