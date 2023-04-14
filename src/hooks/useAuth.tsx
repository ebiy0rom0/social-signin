import { createContext, useContext } from "react";
import { SupabaseClient, createClient } from "@supabase/supabase-js"
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";

type Props = {
  children: React.ReactNode
};

type Auth = {
  supabase: SupabaseClient
  auth: SupabaseAuthClient
}

const AuthContext = createContext<Auth | null>(null);

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY,
  )

  const getUser = async () => {
    const user = await supabase.auth.getUser()
  }

  return (
    <AuthContext.Provider value={{ supabase, auth: supabase.auth }}>
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
