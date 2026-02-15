
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const serviceData = {
  "baby-care": {
    title: "Baby Care",
    price: 300,
  },
  "elderly-care": {
    title: "Elderly Care",
    price: 350,
  },
  "sick-care": {
    title: "Sick Care",
    price: 400,
  },
};

const BookingPage =  () => {
 
   const params = useParams();
   const id = params.id;

  const service = serviceData[id];
  const router = useRouter();
  const session = useSession();

  const [duration, setDuration] = useState(1);
  const [location, setLocation] = useState({
    division: "",
    district: "",
    city: "",
    area: "",
    address: "",
  });

  const totalCost = duration * (service?.price || 0);

  const handleBooking = async (e) => {
    e.preventDefault();

    const bookingData = {
      serviceId: id,
      serviceName: service.title,
      duration,
      location,
      totalCost,
      status: "Pending",
      role: session.user?.role || "user",
      name: session.user?.name || "Guest",
      email: session.user?.email || ""
    };

    // const result = await bookService(bookingData);
    alert("Booking successful!");

    router.push("/my-bookings");
  };

  if (!service) {
    return (
      <p className="text-center py-20 text-gray-600">
        Service not found
      </p>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-100 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8"
      >
        {/* ================= HEADER ================= */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Book {service.title}
          </h1>
          <p className="text-gray-600">
            Complete the form below to confirm your booking
          </p>
        </div>

        {/* ================= FORM ================= */}
        <form onSubmit={handleBooking} className="space-y-6">

          {/* ===== Duration ===== */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration (hours)
            </label>
            <input
              type="number"
              min="1"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>

          {/* ===== Location Fields ===== */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="Division"
              value={location.division}
              onChange={(e) =>
                setLocation({ ...location, division: e.target.value })
              }
              className="input"
              required
            />
            <input
              placeholder="District"
              value={location.district}
              onChange={(e) =>
                setLocation({ ...location, district: e.target.value })
              }
              className="input"
              required
            />
            <input
              placeholder="City"
              value={location.city}
              onChange={(e) =>
                setLocation({ ...location, city: e.target.value })
              }
              className="input"
              required
            />
            <input
              placeholder="Area"
              value={location.area}
              onChange={(e) =>
                setLocation({ ...location, area: e.target.value })
              }
              className="input"
              required
            />
          </div>

          {/* ===== Full Address ===== */}
          <div>
            <textarea
              placeholder="Full Address"
              rows="3"
              value={location.address}
              onChange={(e) =>
                setLocation({ ...location, address: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>

          {/* ================= PRICE SUMMARY ================= */}
          <div className="bg-indigo-50 rounded-2xl p-6 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Total Cost</p>
              <p className="text-2xl font-bold text-gray-900">
                ৳ {totalCost}
              </p>
            </div>
            <p className="text-sm text-gray-600">
              ৳{service.price} × {duration} hour(s)
            </p>
          </div>

          {/* ================= SUBMIT ================= */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-medium shadow-lg"
          >
            Confirm Booking
          </motion.button>
        </form>
      </motion.div>

      {/* ================= TAILWIND HELPER ================= */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          outline: none;
        }
        .input:focus {
          ring: 2px solid #6366f1;
        }
      `}</style>
    </section>
  );
};

export default BookingPage;
