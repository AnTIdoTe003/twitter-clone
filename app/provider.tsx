"use client";

import React from "react";
interface ProviderProps {
  children: React.ReactNode;
}
import { SessionProvider } from "next-auth/react";
const Provider = ({ children }: ProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
