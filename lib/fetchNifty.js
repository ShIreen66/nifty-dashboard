import axios from "axios";

export const fetchNiftyData = async () => {
  try {
    const url =
      "https://query1.finance.yahoo.com/v8/finance/chart/%5ENSEI";

    const response = await axios.get(url);

    const result = response.data.chart.result[0];

    const meta = result.meta;
    const timestamps = result.timestamp;
    const prices = result.indicators.quote[0].close;

    return {
      price: meta.regularMarketPrice,
      previousClose: meta.previousClose,
      timestamps,
      prices,
    };
  } catch (error) {
    throw new Error("Failed to fetch Nifty data");
  }
};