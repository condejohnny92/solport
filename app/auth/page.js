"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Link from "next/link";

export default function AuthPage() {
  const supabase = createClientComponentClient();

  // Hardcoded redirect URL for Vercel deployment
  const redirectUrl = "https://solport-five.vercel.app/auth/callback";

  return (
    <div id="AuthPage" className="w-full min-h-screen bg-white">
      {/* Header with logo */}
      <div className="w-full flex items-center justify-center p-5 border-b border-gray-300">
        <Link href="/" className="min-w-[170px]">
          <img width="170" src="/images/solport.svg" alt="Solport Logo" />
        </Link>
      </div>

      {/* Page title */}
      <div className="w-full flex items-center justify-center p-5 border-b border-gray-300">
        <h1 className="text-xl font-semibold">Login / Register</h1>
      </div>

      {/* Auth component */}
      <div className="max-w-[400px] mx-auto px-2 py-8">
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