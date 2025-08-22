"use client";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function AuthPage() {
  const handleGoogleSignIn = async () => {
    const isLocal = window.location.hostname === "localhost";
    const redirectTo = isLocal
      ? "http://localhost:3000/auth/callback"
      : "https://solport-five.vercel.app/auth/callback";

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });

    if (error) console.error("Google sign-in error:", error.message);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <button
        onClick={handleGoogleSignIn}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Sign in with Google
      </button>
    </div>
  );
}