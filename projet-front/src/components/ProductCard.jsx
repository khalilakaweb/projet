import { Star as StarIcon } from "lucide-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductCard({ product }) {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
      <img src={product.images} className="h-56 w-full object-cover rounded-md" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-gray-800 text-xl">{product.price}</p>
        <button className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 transition">
          View Product
        </button>
      </div>
    </div>
  );
}


