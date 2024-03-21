"use client";
import { useAuth } from "@/hooks/useAuth";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Snackbar,
  TextField,
} from "@mui/material";
import { redirect } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Login = () => {
  const [state, setState] = useState({
    userName: "",
    password: "",
  });
  const [invalid, setInvalid] = useState(false);
  const { login, isLogged, isLoading } = useAuth();

  useEffect(() => {
    if (isLogged) {
      redirect("/inicio");
    }
  }, [isLogged]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!state.userName|| !state.password) {
        setInvalid(true);
        return;
      }

      login(state.userName, state.password);

      console.log(isLoading, isLogged);

      setInvalid(false);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setInvalid(false)}
      >
        <Close fontSize="small" />
      </IconButton>
    </>
  );

  const handleData = ({ target: { id, value } }) => {
    setState({
      ...state,
      [id]: value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl
          sx={{
            mt: "6rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "300px",
          }}
        >
          <Box
            sx={{
              mb: "1rem",
            }}
          >
            <Image
              width={300}
              height={250}
              quality={90}
              alt="Imagen logotipo de dicalzeus"
              priority
              src="/dicalzeus.png"
            />
          </Box>
          <TextField
            id="userName"
            label="Username..."
            variant="outlined"
            value={state.userName}
            onChange={handleData}
          />
          <TextField
            id="password"
            label="Password..."
            variant="outlined"
            type="password"
            value={state.password}
            onChange={handleData}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={isLoading}
            sx={{ borderRadius: "1rem" }}
          >
            Log in
          </Button>
        </FormControl>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transitionDuration={350}
        open={invalid}
        autoHideDuration={1500}
        onClose={() => setInvalid(false)}
        message="Ingresa correctamente los campos"
        action={action}
      />
    </>
  );
};
