import { Connectdb } from "@/lib/Connectdb"

const bookingData = Connectdb("bookings")

export function GET (req) {

    return new Response(JSON.stringify({ message: "Hello, World!" }), 
  )}

export async function POST (req) {

    const data = await req.json()

    const newBooking = {
        ...data,
        createdAt: new Date().toLocaleString(),
    }
    const result = await bookingData.insertOne(newBooking) 

    return new Response(JSON.stringify({ message: "Booking successful!", data: result }),
    { status: 201, headers: { "Content-Type": "application/json" } })}

