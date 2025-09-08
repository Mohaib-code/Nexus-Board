
"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      {/* When user is NOT signed in */}
      <SignedOut>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-8">
          <div className="max-w-md w-full space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome Back
              </h1>
              <p className="text-gray-600">
                Sign in to access your account
              </p>
            </div>

            <SignInButton mode="modal">
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Sign In
              </Button>
            </SignInButton>
          </div>
        </div>
      </SignedOut>

      {/* When user IS signed in */}
      <SignedIn>
        <DashboardPage />
      </SignedIn>
    </>
  );
}

function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p className="text-gray-600 mt-2">Welcome to your dashboard!</p>
    </div>
  );
}