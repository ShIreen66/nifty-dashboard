import { fetchNiftyData } from "@/lib/fetchNifty";

let lastData = null;

export async function GET() {
  try {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Market time: 9:15 AM to 3:30 PM IST
    const isMarketOpen =
      (hours > 9 || (hours === 9 && minutes >= 15)) &&
      (hours < 15 || (hours === 15 && minutes <= 30));

    // ✅ If market is open → fetch fresh data
    if (isMarketOpen) {
      const data = await fetchNiftyData();
      lastData = data; // store latest
      return Response.json({
        ...data,
        marketStatus: "OPEN",
      });
    }

    // ✅ If market closed → return last stored data
    if (lastData) {
      return Response.json({
        ...lastData,
        marketStatus: "CLOSED",
      });
    }

    // fallback (first load case)
    const data = await fetchNiftyData();
    lastData = data;

    return Response.json({
      ...data,
      marketStatus: "CLOSED",
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}