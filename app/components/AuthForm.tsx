
"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function AuthForm() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  async function signUp() {

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {

      setMessage(error.message);

    } else {

      setMessage("Account created 😎🔥");
    }
  }

  async function signIn() {

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {

      setMessage(error.message);

    } else {

      setMessage("Logged in 😎🚀");
    }
  }

  return (
    <div className="glass rounded-[40px] p-10 max-w-2xl mx-auto">

      <h2 className="text-5xl font-black">

        Creator Access

      </h2>

      <div className="flex flex-col gap-5 mt-10">

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-full px-8 py-5 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-full px-8 py-5 outline-none"
        />

        <div className="flex gap-5">

          <button
            onClick={signUp}
            className="bg-white text-black px-8 py-4 rounded-full font-bold"
          >

            Sign Up

          </button>

          <button
            onClick={signIn}
            className="border border-white/20 px-8 py-4 rounded-full"
          >

            Login

          </button>

        </div>

        {message && (

          <p className="text-white/70 mt-5">

            {message}

          </p>

        )}

      </div>

    </div>
  );
}
