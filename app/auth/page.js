"use client";

import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Link from "next/link";

export default function AuthPage() {
  const supabase = createClientComponentClient();
  const [redirectUrl, setRedirectUrl] = useState("");

  // Only run client-side
  useEffect(() => {
    setRedirectUrl(`${window.location.origin}/auth/callback`);
  }, []);

  // Show a loading state until we know the redirect URL
  if (!redirectUrl) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;

  return (
    <div id="AuthPage" className="w-full min-h-screen bg-white">
      <div className="w-full flex items-center justify-center p-5 border-b border-gray-300">
        <Link href="/" className="min-w-[170px]">
          <img width="170" src="/images/solport.svg" alt="Solport Logo" />
        </Link>
      </div>

      <div className="w-full flex items-center justify-center p-5 border-b border-gray-300">
        Login / Register
      </div>

      <div className="max-w-[400px] mx-auto px-2 mt-10">
        <Auth
          onlyThirdPartyProviders
          redirectTo={redirectUrl}
          supabaseClient={supabase}
          providers={["google"]}
          appearance={{ theme: ThemeSupa }}
        />
      </div>
    </div>
  );
}