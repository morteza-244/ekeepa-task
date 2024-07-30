"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const SignInForm = () => {
  const t = useTranslations("SignInForm");
  const signInSchema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email(t("email_error_message"))
        .required(t("email_error_message")),
      password: yup.string().min(6, t("password_error_message")),
    })
    .required();

  type TSignInFormData = yup.InferType<typeof signInSchema>;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TSignInFormData>({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: TSignInFormData) => {
    console.log(data);
  };

  return (
    <Box>
      <Card sx={{ maxWidth: 400, mx: "auto" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
            marginY: 2,
          }}
        >
          <Typography variant="h3">{t("title")}</Typography>
          <Typography>{t("description")}</Typography>
        </Box>
        <CardContent>
          <Box
            component={"form"}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "100%",
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box>
              <Typography variant="h6" sx={{ my: 1 }}>
                {t("email_label")}
              </Typography>
              <TextField
                fullWidth
                placeholder="user@example.com"
                type="email"
                size={"small"}
                {...register("email")}
              />
              {errors.email && (
                <Typography sx={{ mt: 1 }} color={"red"}>
                  {errors.email.message}
                </Typography>
              )}
            </Box>
            <Box>
              <Typography variant="h6" sx={{ my: 1 }}>
                {t("password_label")}
              </Typography>
              <TextField
                fullWidth
                placeholder="*******"
                type="password"
                size={"small"}
                {...register("password")}
              />
              {errors.password && (
                <Typography sx={{ mt: 1 }} color={"red"}>
                  {errors.password.message}
                </Typography>
              )}
            </Box>
            <Button type={"submit"} variant={"contained"}>
              {t("button_label")}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignInForm;
