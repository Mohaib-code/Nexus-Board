"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-md w-full space-y-8 text-center">

        {/* When user is NOT signed in */}
        <SignedOut>
          <div className="space-y-6">
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
        </SignedOut>

        {/* When user IS signed in */}
        <SignedIn>
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-900">
                Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome to your account
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-12 h-12"
                  }
                }}
              />

              <Button variant="outline" className="w-full">
                Go to Dashboard
              </Button>
            </div>
          </div>
        </SignedIn>
      </div>
    </main>
  );
}


// import { Button } from "@/components/ui/button";
// export default function Home() {
//   return (
//     <>
//       <Button>Click me!!</Button>
//     </>
//   )
// }