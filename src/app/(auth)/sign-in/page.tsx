import SignInForm from "@/auth-components/forms";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
const SignIn = () => {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      gap={{ xs: 2, sm: 0 }}
    >
      <Grid item xs={12} md={6}>
        <SignInForm />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src={"/images/loggedIn.png"}
            alt={"logged-in"}
            width={400}
            height={400}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignIn;
