import Link from 'next/link';

export default function ProductCard({ title = "Granite Type", price = "₹200-350/sqft", slug = "granite-type", image = "/images/black-pearl.png" }) {
  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col h-full">
      <div className="h-48 w-full relative overflow-hidden bg-slate-100">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <p className="text-xl font-bold text-orange-500 mt-2">{price}</p>
        <Link
          href={`/products/${slug}`}
          className="mt-auto pt-4 block w-full bg-slate-950 text-white text-center py-2 rounded-md hover:bg-slate-800 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
