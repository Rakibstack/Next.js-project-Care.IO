
"use client";
import { signIn } from 'next-auth/react';
import React from 'react';

const SigninButton = () => {
    return  <button
            onClick={() => signIn()}
            className="px-4 cursor-pointer py-2 rounded-full border border-gray-300 hover:border-indigo-500 transition"
          >
            Login
          </button>;
};

export default SigninButton;