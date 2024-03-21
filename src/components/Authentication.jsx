"use client";
import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";

function Authentication({children}) {
  const { isLogged } = useAuth();
  if( !isLogged ) {
    redirect('/')
  }

  return <>{children}</>;
}

export default Authentication;
