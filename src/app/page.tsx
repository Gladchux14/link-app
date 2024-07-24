// src/app/page.tsx
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Hello world</h1>
      <div className="flex flex-col gap-4 mt-4">
        <Link href="/login">
          <span className="text-blue-500 cursor-pointer">Go to Login</span>
        </Link>
        <Link href="/register">
          <span className="text-blue-500 cursor-pointer">Go to Register</span>
        </Link>
        <Link href="/empty">
          <span className="text-blue-500 cursor-pointer">Go to Empty Page</span>
        </Link>
        <Link href="/add">
          <span className="text-blue-500 cursor-pointer">Go to Add Page</span>
        </Link>
        <Link href="/profile">
          <span className="text-blue-500 cursor-pointer">
            Go to Profile Page
          </span>
        </Link>
        <Link href="/profile-preview">
          <span className="text-blue-500 cursor-pointer">
            Go to Profile Preview Page
          </span>
        </Link>
      </div>
    </main>
  );
}
