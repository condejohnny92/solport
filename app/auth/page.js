"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

export default function AuthPage() {
  const supabase = createClientComponentClient();

  const [loading, setLoading] = useState(false);

  // Dynamically determine redirect URL based on environment
  const getRedirectUrl = () => {
    if (typeof window === "undefined") return ""; // SSR guard
    const isLocal = window.location.hostname === "localhost";
    return isLocal
      ? "http://localhost:3000/auth/callback"
      : "https://solport-five.vercel.app/auth/callback";
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: getRedirectUrl(),
      },
    });
    if (error) console.error("Google sign-in error:", error.message);
    setLoading(false);
  };

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

      {/* Google Sign-In button */}
      <div className="max-w-[400px] mx-auto px-2 py-8 flex flex-col gap-4">
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          {loading ? "Signing in..." : "Sign in with Google"}
        </button>
      </div>
    </div>
  );
}