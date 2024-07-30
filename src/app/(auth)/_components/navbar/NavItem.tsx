"use client";

import { useTheme } from "@mui/material";
import Link from "next/link";
import styles from "./navbar.module.css";

interface NavItemProps {
  page: { href: string; label: string };
}

const NavItem = ({ page }: NavItemProps) => {
  const { palette } = useTheme();
  return (
    <Link
      key={page.href}
      href={page.href}
      className={
        palette.mode === "dark" ? styles.navItemDark : styles.navItemLight
      }
    >
      {page.label}
    </Link>
  );
};

export default NavItem;
