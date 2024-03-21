import Authentication from "@/components/Authentication";
import Navbar from "@/components/Navbar";
import { Box } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Authentication>
      <main
      >
        <Navbar />

        {children}
      </main>
    </Authentication>
  );
}
