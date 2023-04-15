import { createContext, useContext } from "react";
import { SupabaseClient, createClient } from "@supabase/supabase-js"
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";

type Props = {
  children: React.ReactNode
};

type Auth = {
  supabase: SupabaseClient
  auth: SupabaseAuthClient
  redirect: (message: string) => void
}

const AuthContext = createContext<Auth | null>(null);

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY,
  )

  const redirect = (message: string) => {
    alert(`no session: [cause]${message}`)
    window.location.href = '/'
  }

  return (
    <AuthContext.Provider value={{ supabase, auth: supabase.auth, redirect }}>
      { children }
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth has to be used within <AuthContext.Provider>");
  }
  return ctx;
};

export { useAuth, AuthContextProvider }
