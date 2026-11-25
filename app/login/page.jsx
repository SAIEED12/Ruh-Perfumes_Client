"use client";

import React, { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toUserMessage } from "@/lib/error-message";
import BrandArt from "@/components/BrandArt";

function LoginForm() {
  const searchParams = useSearchParams();
  const redirectParam = searchParams.get("redirect") || "";
  const callbackURL =
    redirectParam.startsWith("/") && !redirectParam.startsWith("//")
      ? redirectParam
      : "/dashboard";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter both your email and password.");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
        rememberMe: true,
        callbackURL,
      });

      if (error) {
        if (error.status === 403) {
          setError("Please verify your email address before logging in.");
        } else {
          setError(error?.message || "Wrong email or password. Please try again.");
        }
        return;
      }
    } catch (err) {
      setError(toUserMessage(err, "Something went wrong. Please try again."));
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="flex w-full flex-col bg-ivory lg:min-h-screen lg:flex-row">
      {/* Editorial panel */}
      <div className="relative hidden w-1/2 overflow-hidden lg:block">
        <BrandArt variant="login" className="absolute inset-0 h-full w-full" alt="" />
        <div className="absolute inset-0 bg-bordeaux/50" />
        <div className="relative flex h-full flex-col items-center justify-center p-12">
          <blockquote className="max-w-md text-center">
            <span className="mx-auto mb-5 block h-px w-12 bg-champagne" />
            <p className="font-serif text-4xl leading-snug text-ivory">
              The soul of scent.
            </p>
            <p className="font-bengali mt-3 text-sm text-champagne">সুগন্ধের আত্মা</p>
            <p className="mt-4 text-sm leading-relaxed text-blush/85">
              Your fragrances, saved in one place — ready whenever you are.
            </p>
          </blockquote>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex w-full flex-col justify-start px-6 py-12 sm:px-10 lg:w-1/2 lg:px-20">
        <div className="mx-auto w-full max-w-sm">
          <h1 className="mt-8 font-serif text-3xl text-bordeaux lg:mt-0">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-smoke">Sign in to continue your collection.</p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-[#1A1A1A]"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-fog focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20"
              />
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-ink"
                >
                  Password
                </label>

              </div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-fog focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20"
              />
            </div>

            {error && (
              <p className="text-sm text-rose" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full cursor-pointer rounded-full bg-bordeaux py-3 text-sm font-semibold text-ivory transition-colors hover:bg-rose disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Logging in…" : "Log in"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-[#525252]">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-brand hover:underline"
            >
              Sign up
            </Link>
          </p>
          <div className="my-8 flex items-center gap-4">
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto flex min-h-screen w-full items-center justify-center px-4">
          <p className="text-sm text-[#525252]">Loading login…</p>
        </main>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
