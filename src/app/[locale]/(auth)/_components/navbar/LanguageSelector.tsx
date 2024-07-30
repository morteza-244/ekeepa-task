"use client";

import { FormControl, MenuItem, Select } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const LanguageSelector = () => {
  const t = useTranslations("LanguageLocale")
  const [isPending, startTransition] = useTransition();
  const currentLocale = useLocale();
  const router = useRouter();
  const locales = [
    { value: "fa", label: t("persian_locale") },
    { value: "en", label: t("english_locale") },
  ];

  const onSelectChange = (e: { target: { value: string } }) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}/sign-in`);
    });
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          onChange={onSelectChange}
          defaultValue={currentLocale}
          disabled={isPending}
        >
          {locales.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default LanguageSelector;
