import { Box, Button } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const NotFound = () => {
  const t = useTranslations("NotFound");
  const currentLocale = useLocale();

  return (
    <html>
      <body>
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1>{t("error_message")}</h1>
          <Link href={`/${currentLocale}/sign-in`}>
            <Button variant={"contained"}>{t("button_label")}</Button>
          </Link>
        </Box>
      </body>
    </html>
  );
};

export default NotFound;
