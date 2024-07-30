import { Box } from "@mui/material";
import NavItem from "./NavItem";

const NavbarRoutes = () => {
  const pages = [
    { label: "خانه", href: "/" },
    { label: "محصولات", href: "/products" },
    { label: "ارتباط با ما", href: "/contact-us" },
    { label: "درباره ما", href: "/about-us" },
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
