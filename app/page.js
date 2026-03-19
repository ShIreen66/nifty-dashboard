"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import NiftyCard from "../components/NiftyCard";
import NiftyChart from "../components/NiftyChart";

export default function Home() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/nifty");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold mb-6">NIFTY 50 Dashboard</h1>

      <NiftyCard data={data} />
      <NiftyChart data={data} />
    </div>
  );
}