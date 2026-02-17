
"use client";

import { registerUser } from "@/action/server/auth";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const RegisterPage = () => {

  const route= useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formdata = {
      name: form.name.value,
      nid: form.nid.value,
      email: form.email.value,
      contact: form.contact.value,
      password: form.password.value,
    }

    const result = await registerUser(formdata);
    if (result.success) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your account has been created successfully!",
        showConfirmButton: false,
        timer: 1500
      });
    }else {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Registration failed!",
        showConfirmButton: false,
        timer: 1500
      });
    }
    form.reset();
    route.push("/api/auth/signin")

  }
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-sky-100 py-6 px-4">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create an Account
          </h1>
          <p className="text-gray-600 text-sm">
            Join Care.IO and start booking trusted care services
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-xl border text-gray-500 border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* NID */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              NID Number
            </label>
            <input
              type="text"
              name="nid"
              placeholder="Enter your NID number"
              className="w-full px-4 py-3 rounded-xl border text-gray-500 border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border text-gray-500 border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              name="contact"
              placeholder="+880 1XXXXXXXXX"
              className="w-full px-4 py-3 rounded-xl border text-gray-500 border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="At least 6 characters"
              className="w-full px-4 py-3 rounded-xl border text-gray-500 border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-medium shadow-lg hover:shadow-xl transition"
          >
            Create Account
          </motion.button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <button
            onClick={() => signIn()}
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </button>
        </p>
      </motion.div>
    </section>
  );
};

export default RegisterPage;
