"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Link from "next/link";

export default function AuthPage() {
  const supabase = createClientComponentClient();

  return (
    <div id="AuthPage" className="w-full min-h-screen bg-white">
      {/* Logo / header */}
      <div className="w-full flex items-center justify-center p-5 border-b border-gray-300">
        <Link href="/" className="min-w-[170px]">
          <img width="170" src="/images/solport.svg" alt="Solport Logo" />
        </Link>
      </div>

      {/* Page title */}
      <div className="w-full flex items-center justify-center p-5 border-b border-gray-300">
        Login / Register
      </div>

      {/* Supabase Auth UI */}
      <div className="max-w-[400px] mx-auto px-2">
        <Auth
          onlyThirdPartyProviders
          supabaseClient={supabase}
          providers={["google"]}
          redirectTo="https://solport-five.vercel.app/auth/callback" // <--- must match Supabase redirect URL
          appearance={{ theme: ThemeSupa }}
        />
      </div>
    </div>
  );
}