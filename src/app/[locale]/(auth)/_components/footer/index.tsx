import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <Box
      component={"footer"}
      sx={{
        bgcolor: "secondary.main",
        textAlign: "center",
        boxShadow: 10,
        p: 4,
      }}
    >
      <Typography
        sx={{ fontWeight: 600 }}
        fontSize={{ xs: "14px", sm: "17px" }}
      >
        {t("description")}
      </Typography>
    </Box>
  );
};

export default Footer;
