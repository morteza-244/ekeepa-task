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
      <div className="h-16 bg-red-300">footer</div>
    </Box>
  );
};

export default AuthLayout;
