"use client";

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const statusColor = {
  Pending: "bg-yellow-100 text-yellow-700",
  Confirmed: "bg-green-100 text-green-700",
  Completed: "bg-indigo-100 text-indigo-700",
  Cancelled: "bg-red-100 text-red-700",
};

const MyBookingsPage = () => {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const session = useSession();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth/booking?email=${session.data?.user?.email}`);
        const data = await res.json();
        setBookings(data || []);
      } catch (error) {
        console.error("Failed to load bookings", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [session.data?.user?.email]);

  const handleCancelBooking = async (bookingId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to cancel this booking!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6366f1",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, cancel it!",
    }).then(async (result) => {
      if (!result.isConfirmed) return;

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/auth/booking/${bookingId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: "Cancelled" }),
          }
        );
        const data = await res.json(); 
        // console.log("Response data:", data);  

        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Cancelled!",
            text: "Your booking has been cancelled.",
            icon: "success",
          });

          // 🔹 Update UI instantly
          setBookings((prev) =>
            prev.map((b) =>
              b._id === bookingId ? { ...b, status: "Cancelled" } : b
            )
          );
        }
      } catch (error) {
        console.error(error);
        Swal.fire("Error", "Something went wrong", "error");
      }
    });
  };


  /* 🔹 Loading state */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading bookings...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* 🔹 Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-semibold text-gray-900 mb-2">
            My Bookings
          </h1>
          <p className="text-gray-600">
            View and manage all your booked care services
          </p>
        </motion.div>

        {/* 🔹 Booking List */}
        {bookings.length > 0 ? (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <motion.div
                key={booking._id || booking.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-sm border p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {booking.serviceName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {booking.createdAt} • {booking.duration}
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <p className="font-semibold text-gray-900">
                    ৳{booking.totalCost}
                  </p>

                  <span
                    className={`text-sm px-4 py-1 rounded-full font-medium ${statusColor[booking.status]}`}
                  >
                    {booking.status}
                  </span>
                  {/* 🔴 Cancel Button */}
                  {booking.status === "Pending" && (
                    <button
                      onClick={() => handleCancelBooking(booking._id)}
                      className="text-sm px-4 py-2 rounded-full border border-red-300 text-red-600 
      hover:bg-red-50 transition"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center shadow">
            <p className="text-gray-600">
              You have no bookings yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyBookingsPage;
