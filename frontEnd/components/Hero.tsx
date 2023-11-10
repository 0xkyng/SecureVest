import { Container } from "../components/Container";

import React from "react";
import Link from "next/link";

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32 -mt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Explore{" "}
        <span className="relative whitespace-nowrap text-[#FFA500]">
          <span className="relative">Secure</span>
        </span>{" "}
        Vesting Here.
      </h1>

      <div className="mt-10 flex justify-center space-x-6 ">
        <Link
          href="/create"
          className="bg-[#FFA500] text-xl text-white px-4 py-2 rounded-lg"
        >
          Create Company
        </Link>

        <Link
          href="/vesting"
          className="bg-[#FFA500] text-xl text-white px-4 py-2 rounded-lg"
        >
          Vest
        </Link>

        <Link
          href="/withdraw"
          className="bg-[#FFA500] text-xl text-white px-4 py-2 rounded-lg"
        >
          Withdraw
        </Link>
      </div>
    </Container>
  );
}
