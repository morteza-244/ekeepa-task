import { List } from "@mui/material";
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
    <List
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
      }}
    >
      {pages.map((page) => (
        <NavItem page={page} />
      ))}
    </List>
  );
};

export default NavbarRoutes;
