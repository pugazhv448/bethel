import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-950 mb-4 text-center">Our Granite Catalog</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our wide selection of premium granite. Perfect for countertops, flooring, and feature walls.
        </p>

        {/* Filters Placeholder */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-8 flex flex-wrap gap-4 items-center">
          <span className="font-semibold text-slate-900">Filter by:</span>
          <select className="border border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:border-orange-500">
            <option>All Types</option>
            <option>Granite</option>
            <option>Marble</option>
          </select>
          <select className="border border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:border-orange-500">
            <option>All Colors</option>
            <option>Black</option>
            <option>Brown</option>
            <option>White</option>
          </select>
          <input type="text" placeholder="Search products..." className="border border-gray-300 rounded px-3 py-1.5 ml-auto focus:outline-none focus:border-orange-500" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
          <ProductCard title="Black Pearl Granite" price="₹250-350/sqft" slug="black-pearl" image="/images/black-pearl.png" />
          <ProductCard title="Kashmir Gold Granite" price="₹200-280/sqft" slug="kashmir-gold" image="/images/kashmir-gold.png" />
          <ProductCard title="Tan Brown Granite" price="₹180-250/sqft" slug="tan-brown" image="/images/ruby-red.png" />
          <ProductCard title="Absolute Black Granite" price="₹300-400/sqft" slug="absolute-black" image="/images/black-pearl.png" />
          <ProductCard title="White Pearl Granite" price="₹220-300/sqft" slug="white-pearl" image="/images/white-pearl.png" />
          <ProductCard title="Steel Grey Granite" price="₹150-200/sqft" slug="steel-grey" image="/images/black-pearl.png" />
          <ProductCard title="Hassan Green Granite" price="₹180-240/sqft" slug="hassan-green" image="/images/kashmir-gold.png" />
          <ProductCard title="Ruby Red Granite" price="₹280-380/sqft" slug="ruby-red" image="/images/ruby-red.png" />
        </div>
      </div>
    </div>
  );
}

