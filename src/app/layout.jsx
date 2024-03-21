import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import ProviderRedux from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dicalzeus",
  description: "Apliacion creada con fines de aprendizaje",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <ProviderRedux>{children}</ProviderRedux>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
