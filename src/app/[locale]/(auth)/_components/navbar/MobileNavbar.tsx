"use client";
import { Box, Button, Drawer, IconButton } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import LanguageSelector from "./LanguageSelector";
import NavbarRoutes from "./NavbarRoutes";
import ToggleColorMode from "./ToggleColorMode";

const MobileNavbar = () => {
  const t = useTranslations("Navbar");
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <Box component={"nav"} sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton onClick={toggleDrawer(true)}>
        <FiMenu size={20} />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
          onClick={toggleDrawer(false)}
          role="presentation"
        >
          <NavbarRoutes />
          <LanguageSelector />
          <ToggleColorMode />
          <Link href={"/sign-in"}>
            <Button variant="contained">{t("label")}</Button>
          </Link>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileNavbar;
