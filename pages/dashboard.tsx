import React from "react";
import HeroCard from "../components/HeroCard/HeroCard";
import styles from "../styles/dashboard.module.css";

const dashboard = () => {
  return (
    <div className={styles.dashboardParent}>
      <HeroCard />
    </div>
  );
};

export default dashboard;
