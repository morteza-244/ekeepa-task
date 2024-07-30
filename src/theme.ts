import { PaletteMode, ThemeOptions } from "@mui/material";

const lightPalette = {
  background: "hsl(0, 0%, 100%)",
  foreground: "hsl(20, 14.3%, 4.1%)",
  card: "hsl(0, 0%, 100%)",
  cardForeground: "hsl(20, 14.3%, 4.1%)",
  popover: "hsl(0, 0%, 100%)",
  popoverForeground: "hsl(20, 14.3%, 4.1%)",
  primary: "hsl(24, 9.8%, 10%)",
  primaryForeground: "hsl(60, 9.1%, 97.8%)",
  secondary: "hsl(60, 4.8%, 95.9%)",
  secondaryForeground: "hsl(24, 9.8%, 10%)",
  muted: "hsl(60, 4.8%, 95.9%)",
  mutedForeground: "hsl(25, 5.3%, 44.7%)",
  accent: "hsl(60, 4.8%, 95.9%)",
  accentForeground: "hsl(24, 9.8%, 10%)",
  destructive: "hsl(0, 84.2%, 60.2%)",
  destructiveForeground: "hsl(60, 9.1%, 97.8%)",
  border: "hsl(20, 5.9%, 90%)",
  input: "hsl(20, 5.9%, 90%)",
  ring: "hsl(20, 14.3%, 4.1%)",
};

const darkPalette = {
  background: "hsl(20, 14.3%, 4.1%)",
  foreground: "hsl(60, 9.1%, 97.8%)",
  card: "hsl(20, 14.3%, 4.1%)",
  cardForeground: "hsl(60, 9.1%, 97.8%)",
  popover: "hsl(20, 14.3%, 4.1%)",
  popoverForeground: "hsl(60, 9.1%, 97.8%)",
  primary: "hsl(60, 9.1%, 97.8%)",
  primaryForeground: "hsl(24, 9.8%, 10%)",
  secondary: "hsl(12, 6.5%, 15.1%)",
  secondaryForeground: "hsl(60, 9.1%, 97.8%)",
  muted: "hsl(12, 6.5%, 15.1%)",
  mutedForeground: "hsl(24, 5.4%, 63.9%)",
  accent: "hsl(12, 6.5%, 15.1%)",
  accentForeground: "hsl(60, 9.1%, 97.8%)",
  destructive: "hsl(0, 62.8%, 30.6%)",
  destructiveForeground: "hsl(60, 9.1%, 97.8%)",
  border: "hsl(12, 6.5%, 15.1%)",
  input: "hsl(12, 6.5%, 15.1%)",
  ring: "hsl(24, 5.7%, 82.9%)",
};

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            default: lightPalette.background,
            paper: lightPalette.card,
          },
          primary: {
            main: lightPalette.primary,
            contrastText: lightPalette.primaryForeground,
          },
          secondary: {
            main: lightPalette.secondary,
            contrastText: lightPalette.secondaryForeground,
          },
          text: {
            primary: lightPalette.foreground,
            secondary: lightPalette.mutedForeground,
          },
          divider: lightPalette.border,
          action: {
            active: lightPalette.foreground,
          },
          error: {
            main: lightPalette.destructive,
            contrastText: lightPalette.destructiveForeground,
          },
        }
      : {
          background: {
            default: darkPalette.background,
            paper: darkPalette.card,
          },
          primary: {
            main: darkPalette.primary,
            contrastText: darkPalette.primaryForeground,
          },
          secondary: {
            main: darkPalette.secondary,
            contrastText: darkPalette.secondaryForeground,
          },
          text: {
            primary: darkPalette.foreground,
            secondary: darkPalette.mutedForeground,
          },
          divider: darkPalette.border,
          action: {
            active: darkPalette.foreground,
          },
          error: {
            main: darkPalette.destructive,
            contrastText: darkPalette.destructiveForeground,
          },
        }),
  },
  shape: {
    borderRadius: 8,
  },
});
