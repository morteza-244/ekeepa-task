import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import NavItem from "./NavItem";

const NavbarRoutes = () => {
  const t = useTranslations("Navigation");

  const pages = [
    { label: t("home"), href: "/" },
    { label: t("products"), href: "/products" },
    { label: t("contact-us"), href: "/contact-us" },
    { label: t("about-us"), href: "/about-us" },
  ];
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", gap: 4 }}>
      {pages.map((page) => (
        <NavItem page={page} />
      ))}
    </Box>
  );
};

export default NavbarRoutes;
