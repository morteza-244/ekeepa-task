"use client";

import { useColorMode } from "@/auth-components/providers/ThemeProvider";
import { Switch, styled, useTheme } from "@mui/material";
import { FiSun } from "react-icons/fi";
import { RiMoonClearLine } from "react-icons/ri";
import styles from "./navbar.module.css";
const ToggleContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const ToggleColorMode = () => {
  const { palette } = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <ToggleContainer>
      {palette.mode === "dark" ? (
        <RiMoonClearLine
          size={20}
          className={
            palette.mode === "dark" ? styles.navItemDark : styles.navItemLight
          }
        />
      ) : (
        <FiSun
          size={20}
          className={
            palette.mode === "light" ? styles.navItemLight : styles.navItemDark
          }
        />
      )}
      <Switch
        checked={palette.mode === "dark"}
        onChange={toggleColorMode}
        color="default"
      />
    </ToggleContainer>
  );
};

export default ToggleColorMode;
