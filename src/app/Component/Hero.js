"use client";

import styles from "./hero.module.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Hero({}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div
      className={matches ? styles.heroContainer : styles.heroMobileContainer}
    />
  );
}
