
import ServiceCard from "@/component/ServiceCard";
import Link from "next/link";

export const metadata = {
  title: "Care.xyz | Trusted Care Services",
  description: "Reliable baby, elderly & sick care services",
};

const services = [
  {
    id: "baby-care",
    title: "Baby Care",
    description: "Loving and trained caregivers for your child’s safety.",
    price: 300,
  },
  {
    id: "elderly-care",
    title: "Elderly Care",
    description: "Respectful, compassionate care for seniors at home.",
    price: 350,
  },
  {
    id: "sick-care",
    title: "Sick Care",
    description: "Professional assistance during illness and recovery.",
    price: 400,
  },
];

export default function Home() {
  return (
    <>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-sky-50">
        {/* Decorative blobs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -right-32 w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-28 grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block mb-5 px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
              Trusted Care Platform
            </span>

            <h1 className="text-5xl font-semibold leading-tight text-gray-900 mb-6">
              Care that feels <br />
              <span className="text-indigo-600">like family</span>
            </h1>

            <p className="text-gray-600 max-w-xl mb-10">
              Care.xyz helps you find reliable caregivers for babies, elderly
              family members, and sick loved ones — right at your home.
            </p>

            <div className="flex gap-4">
              <Link
                href="#services"
                className="bg-indigo-600 text-white px-7 py-3 rounded-full text-sm 
                hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
              >
                Explore Services
              </Link>

              <Link
                href="/register"
                className="bg-white/80 backdrop-blur border border-gray-200 px-7 py-3 
                rounded-full text-sm hover:border-indigo-300 transition"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-white/80 backdrop-blur rounded-3xl p-10 shadow-xl border border-white">
            <h3 className="text-lg font-medium mb-6 text-gray-900">
              Why families trust Care.xyz
            </h3>

            <ul className="space-y-4 text-gray-600 text-sm">
              <li>✔ Verified & background-checked caregivers</li>
              <li>✔ Flexible booking & transparent pricing</li>
              <li>✔ Secure platform & data protection</li>
              <li>✔ Friendly 24/7 customer support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div className="rounded-2xl bg-indigo-50 p-6">
            <p className="text-3xl font-semibold text-indigo-600">5K+</p>
            <p className="text-sm text-gray-600">Happy Families</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <p className="text-3xl font-semibold text-sky-600">1K+</p>
            <p className="text-sm text-gray-600">Care Professionals</p>
          </div>
          <div className="rounded-2xl bg-indigo-50 p-6">
            <p className="text-3xl font-semibold text-indigo-600">12+</p>
            <p className="text-sm text-gray-600">Cities Covered</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <p className="text-3xl font-semibold text-sky-600">24/7</p>
            <p className="text-sm text-gray-600">Customer Support</p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="bg-gradient-to-b from-white to-indigo-50 py-28"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              Our Care Services
            </h2>
            <p className="text-gray-600">
              Thoughtfully designed services to support your family with care,
              trust, and professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
