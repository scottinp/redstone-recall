import clientPromise from "@/lib/mongodb";

// API to earn emeralds
export async function POST(req) {
  const { userId, amount } = await req.json();  // Get user ID and amount of emeralds
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  // Update user's emeralds (increment by the given amount)
  const result = await db.collection("users").updateOne(
    { userId },  // Find user by userId
    { $inc: { emeralds: amount } },  // Increase emeralds
    { upsert: true }  // If the user does not exist, create a new one
  );

  return Response.json({ success: true, emeralds: result.acknowledged });
}
