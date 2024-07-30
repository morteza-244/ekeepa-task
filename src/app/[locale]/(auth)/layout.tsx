import Footer from "@/auth-components/footer";
import { Navbar } from "@/auth-components/navbar";
import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Navbar />
      <Container maxWidth={"xl"} sx={{ minHeight: "100%" }}>
        <Box
          component={"main"}
          sx={{ flexGrow: 1, display: "flex", py: "5rem" }}
        >
          {children}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default AuthLayout;
