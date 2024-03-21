"use client";
import { getUserData, loading, isLoggedIn, loginThunk, logout } from "@/redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUserData);
  const isLogged = useSelector(isLoggedIn);
  const isLoading = useSelector(loading);

  
  const login = (username, password) => {
    dispatch(loginThunk({ username, password }));
  };

  const logoutThunk = () => {
    dispatch(logout());
  };

  return { isLogged, login, logoutThunk, user, isLoading };
};
