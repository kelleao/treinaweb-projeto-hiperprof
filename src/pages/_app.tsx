import { ThemeProvider } from "@mui/material";
import "@styles/globals.css";
import type { AppProps } from "next/app";
import Base from "ui/components/surfaces/Base";
import theme from "ui/theme/light-theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Base>
        <Component {...pageProps} />;
      </Base>
    </ThemeProvider>
  );
}
