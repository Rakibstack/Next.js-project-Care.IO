import { Connectdb } from "@/lib/Connectdb";
import { ObjectId } from "mongodb";


export async function PATCH(req, { params }) {
  const { id } = await params;

  const data = await req.json();

  const bookingData = Connectdb("bookings");
  const result = await bookingData.updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );

  return new Response(JSON.stringify({ modifiedCount: result.modifiedCount }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}