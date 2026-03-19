import { fetchNiftyData } from "@/lib/fetchNifty";
import axios from "axios";

export async function GET() {
  try {
    const url =
      "https://query1.finance.yahoo.com/v8/finance/chart/%5ENSEI";

    const response = await axios.get(url);

    const result = response.data.chart.result[0];

    const meta = result.meta;
    const timestamps = result.timestamp;
    const prices = result.indicators.quote[0].close;

    return Response.json({
      price: meta.regularMarketPrice,
      previousClose: meta.previousClose,
      timestamps,
      prices,
    });
  } catch (error) {
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}


export async function GET() {
  try {
    const data = await fetchNiftyData();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}