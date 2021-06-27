import React from "react";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layoutParent}>
      <Navbar />

      {children}
    </div>
  );
};

export default Layout;
