"use client";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function OtroPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <TextField
        label="pepe"
        color="success"
        multiline
        maxRows={3}
        size="small"
      />

      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              size="small"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton >
          </InputAdornment>
        }
        label="Password"
        size="small"
      />
    </div>
  );
}
