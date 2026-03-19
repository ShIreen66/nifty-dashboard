import { fetchNiftyData } from "@/lib/fetchNifty";

let lastData = null;

export async function GET() {
  try {
    // ✅ Convert to IST
    const now = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    });

    const date = new Date(now);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Market time: 9:15 AM to 3:30 PM IST
    const isMarketOpen =
      (hours > 9 || (hours === 9 && minutes >= 15)) &&
      (hours < 15 || (hours === 15 && minutes <= 30));

    if (isMarketOpen) {
      const data = await fetchNiftyData();
      lastData = data;

      return Response.json({
        ...data,
        marketStatus: "OPEN",
      });
    }

    if (lastData) {
      return Response.json({
        ...lastData,
        marketStatus: "CLOSED",
      });
    }

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