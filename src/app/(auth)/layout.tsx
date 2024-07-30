import { Navbar } from "@/auth-components/navbar";
import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Navbar />
      <Container maxWidth={"xl"} sx={{ minHeight: "100%" }}>
        <main className="flex-1">{children}</main>
      </Container>
      <div className="h-16 bg-red-300">footer</div>
    </Box>
  );
};

export default AuthLayout;
