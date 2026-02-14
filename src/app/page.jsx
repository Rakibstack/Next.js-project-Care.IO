"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/component/ServiceCard";
import Link from "next/link";
import { fadeUp, fadeIn, stagger } from "@/lib/animations";
import { FaBaby, FaUserNurse, FaHeartbeat } from "react-icons/fa";

export const services = [
  {
    id: "baby-care",
    title: "Baby Care",
    description: "Loving and trained caregivers for your child’s safety.",
    price: 300,
    icon: FaBaby,
    color: "text-pink-500 bg-pink-100",
  },
  {
    id: "elderly-care",
    title: "Elderly Care",
    description: "Respectful, compassionate care for seniors at home.",
    price: 350,
    icon: FaUserNurse,
    color: "text-indigo-500 bg-indigo-100",
  },
  {
    id: "sick-care",
    title: "Sick Care",
    description: "Professional assistance during illness and recovery.",
    price: 400,
    icon: FaHeartbeat,
    color: "text-rose-500 bg-rose-100",
  },
];

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-sky-100">
        {/* blobs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-40 -right-32 w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 py-28 grid md:grid-cols-2 gap-16 items-center">
          {/* TEXT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block mb-5 px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium"
            >
              Trusted Care Platform
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-5xl font-semibold leading-tight text-gray-900 mb-6"
            >
              Care that feels <br />
              <span className="text-indigo-600">like family</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-600 max-w-xl mb-10"
            >
              Care.IO helps you find reliable caregivers for babies, elderly
              family members, and sick loved ones — right at your home.
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-4">
              <Link
                href="#services"
                className="bg-indigo-600 text-white px-7 py-3 rounded-full text-sm hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
              >
                Explore Services
              </Link>

              <Link
                href="/register"
                className="bg-white/80 text-gray-500 backdrop-blur border border-gray-200 px-7 py-3 rounded-full text-sm hover:border-indigo-400 transition"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>

          {/* INFO CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-white/80 backdrop-blur rounded-3xl p-10 shadow-xl border border-white"
          >
            <h3 className="text-lg font-medium mb-6 text-gray-900">
              Why families trust Care.IO
            </h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li>✔ Verified caregivers</li>
              <li>✔ Flexible booking</li>
              <li>✔ Secure platform</li>
              <li>✔ 24/7 support</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-indigo-100 py-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
        >
          {[
            ["5K+", "Happy Families"],
            ["1K+", "Care Professionals"],
            ["12+", "Cities Covered"],
            ["24/7", "Customer Support"],
          ].map(([value, label]) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="rounded-2xl bg-white p-6 shadow"
            >
              <p className="text-3xl font-semibold text-indigo-600">{value}</p>
              <p className="text-sm text-gray-600">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="bg-gradient-to-b from-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mb-14"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our Care Services
            </h2>
            <p className="text-gray-600">
              Thoughtfully designed services for your family.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={fadeUp}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
