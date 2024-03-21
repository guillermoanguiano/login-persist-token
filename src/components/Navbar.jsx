"use client";
import { useAuth } from "@/hooks/useAuth";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Navbar() {
  const { logoutThunk } = useAuth();
  return (
    <AppBar sx={{ m: 0 }} position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Productos
        </Typography>
        <Button onClick={logoutThunk} color="inherit">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
