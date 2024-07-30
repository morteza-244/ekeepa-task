import { Container, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import NavbarRoutes from "./NavbarRoutes";
import ToggleColorMode from "./ToggleColorMode";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
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
            <Typography variant="h4" sx={{ color: "text.primary" }}>
              اکیپا
            </Typography>
            <NavbarRoutes />
            <Box sx={{ display: "flex" }}>
              <ToggleColorMode />
              <Link href={"/sign-in"}>
                <Button variant="contained">ورود / ثبت نام</Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
