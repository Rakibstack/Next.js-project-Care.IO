

import Link from "next/link";

const serviceData = {
  "baby-care": {
    title: "Baby Care",
    description:
      "Professional caregivers to look after your child safely and lovingly. Fully verified, trained, and background-checked babysitters.",
    features: [
      "Background-verified caregivers",
      "Flexible hours",
      "Age-appropriate care",
      "Daily progress report",
    ],
    price: 300,
    image: "https://images.unsplash.com/photo-1588776814546-1f6c27bb85e1?auto=format&fit=crop&w=800&q=80",
  },
  "elderly-care": {
    title: "Elderly Care",
    description:
      "Compassionate support for seniors at home. Assistance with daily tasks, medication reminders, and companionship.",
    features: [
      "Experienced caregivers",
      "Daily assistance & monitoring",
      "Medication management",
      "Friendly companionship",
    ],
    price: 350,
    image: "https://images.unsplash.com/photo-1588776814546-1f6c27bb85e1?auto=format&fit=crop&w=800&q=80",
  },
  "sick-care": {
    title: "Sick Care",
    description:
      "Home care for patients during illness or recovery. Professional support for a safe, comfortable, and speedy recovery.",
    features: [
      "Medical trained caregivers",
      "Medication & nutrition support",
      "Daily health monitoring",
      "Peaceful recovery environment",
    ],
    price: 400,
    image: "https://images.unsplash.com/photo-1588776814546-1f6c27bb85e1?auto=format&fit=crop&w=800&q=80",
  },
};

const ServiceDetailsPage = async ({ params }) => {
  const { id } = await params;
  const service = serviceData[id];
  
  if (!service) return <p>Service not found</p>;

  return (
    <>

      {/* Hero / Header */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-sky-50 py-28">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-semibold text-gray-900 mb-6">
              {service.title}
            </h1>
            <p className="text-gray-600 mb-6">{service.description}</p>

            <ul className="mb-6 space-y-3 text-gray-700">
              {service.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-indigo-600 font-bold">✔</span> {f}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6">
              <span className="text-2xl font-bold text-gray-900">
                ৳{service.price} / hour
              </span>
              <Link
                href={`/booking/${params.service_id}`}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-medium hover:shadow-lg transition"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Optional More Info / Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">
          Why choose this service?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-gray-700">
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="font-medium mb-2 text-gray-900">Professional</h3>
            <p>All caregivers are certified, trained, and background-checked.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="font-medium mb-2 text-gray-900">Flexible</h3>
            <p>Book caregivers based on hours, days, or your custom schedule.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="font-medium mb-2 text-gray-900">Safe & Trusted</h3>
            <p>Our platform ensures full safety, verified profiles, and secure payments.</p>
          </div>
        </div>
      </section>

    </>
  );
};

export default ServiceDetailsPage;
