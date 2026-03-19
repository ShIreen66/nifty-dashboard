export default function NiftyCard({ data }) {
  const change = data.price - data.previousClose;
  const percent = (change / data.previousClose) * 100;

  return (
    <div className="bg-gray-900 p-6 rounded-xl mb-6">
      <h2 className="text-xl">NIFTY 50</h2>
      <p className="text-4xl font-bold">{data.price.toFixed(2)}</p>

      <p className={change >= 0 ? "text-green-400" : "text-red-400"}>
        {change.toFixed(2)} ({percent.toFixed(2)}%)
      </p>
    </div>
  );
}