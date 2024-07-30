"use client";

import { getDesignTokens } from "@/theme";
import {
  createTheme,
  GlobalStyles,
  ThemeProvider as MUIThemeProvider,
  PaletteMode,
} from "@mui/material";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
export type TColorMode = "light" | "dark";

export type TColorModeContext = {
  toggleColorMode: () => void;
};

export const initialState: TColorModeContext = {
  toggleColorMode: () => {},
};

const ColorModeContext = createContext<TColorModeContext>(initialState);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme(getDesignTokens(mode), {
        direction: "rtl",
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            body: {
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
            },
          }}
        />
        {children}
      </MUIThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeProvider;

export const useColorMode = () => useContext(ColorModeContext);
