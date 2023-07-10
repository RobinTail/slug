"use client";

import type { ReactNode } from "react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

interface ProvidersProps {
  children: ReactNode;
}

// Auth Provider:
// -------------
interface AuthProvidersProps extends ProvidersProps {
  session: Session | null;
}

const AuthProvider = (props: AuthProvidersProps) => {
  return (
    <SessionProvider session={props.session}>{props.children}</SessionProvider>
  );
};

// Sonner Provider:
// ---------------
const SonnerProvider = () => {
  return <Toaster />;
};

export { AuthProvider, SonnerProvider };
