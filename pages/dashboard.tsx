import React from "react";
import styles from "../styles/dashboard.module.css";
import HeroCard from "../components/HeroCard/HeroCard";
import ReviewPortfolios from "../components/ReviewPortfolios/ReviewPortfolios";

const dashboard = () => {
  return (
    <div className={styles.dashboardParent}>
      <HeroCard />
      <ReviewPortfolios />
    </div>
  );
};

export default dashboard;
