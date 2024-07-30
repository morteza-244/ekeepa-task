import { Container, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import MobileNavbar from "./MobileNavbar";
import NavbarRoutes from "./NavbarRoutes";
import ToggleColorMode from "./ToggleColorMode";
const Navbar = () => {
  const t = useTranslations("Navbar");
  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <AppBar
        component={"nav"}
        position="fixed"
        sx={{
          bgcolor: "background.default",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="h4" sx={{ color: "text.primary" }}>
                {t("title")}
              </Typography>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <LanguageSelector />
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <NavbarRoutes />
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <ToggleColorMode />
              <Link href={"/sign-in"}>
                <Button variant="contained">{t("label")}</Button>
              </Link>
            </Box>
            <MobileNavbar />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
