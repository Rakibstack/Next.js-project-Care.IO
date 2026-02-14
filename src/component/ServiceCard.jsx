
import Link from "next/link";

const ServiceCard = ({ service }) => {
  const { id, title, description, price, icon: Icon, color } = service;

  return (
    <div className="border text-gray-600 rounded-xl p-6 hover:shadow-xl transition">
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
        <Icon className="text-xl" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <p className="font-medium mb-4">Starting from ৳{price}/hr</p>

      <Link
        href={`/service/${id}`}
        className="inline-block text-primary font-medium hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
};

export default ServiceCard;
