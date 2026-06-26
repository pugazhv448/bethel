import Button from '@/components/Button';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  // Mock data based on slug
  const productName = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  let imageSrc = "/images/black-pearl.png";
  if (params.slug.includes('kashmir') || params.slug.includes('green')) imageSrc = "/images/kashmir-gold.png";
  else if (params.slug.includes('white')) imageSrc = "/images/white-pearl.png";
  else if (params.slug.includes('ruby') || params.slug.includes('brown')) imageSrc = "/images/ruby-red.png";

  return (
    <div className="pt-32 pb-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <a href="/products" className="text-orange-500 hover:underline">← Back to Catalog</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-slate-100 rounded-xl aspect-square flex items-center justify-center text-slate-400 overflow-hidden relative">
            <img src={imageSrc} alt={productName} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-slate-950 mb-2">{productName}</h1>
            <p className="text-2xl font-bold text-orange-500 mb-6">₹200-350/sqft</p>
            
            <p className="text-gray-700 text-lg mb-8">
              Premium quality {productName} perfect for any modern home. Known for its durability, unique patterns, and elegant finish. Ideal for kitchen countertops, bathroom vanities, and flooring.
            </p>

            <h3 className="font-bold text-lg mb-4 text-slate-900">Specifications</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Material</span>
                <span className="font-medium">Natural Granite</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Available Finishes</span>
                <span className="font-medium">Polished, Honed, Leathered</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Thickness</span>
                <span className="font-medium">18mm, 20mm, 30mm</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Origin</span>
                <span className="font-medium">South India</span>
              </li>
            </ul>

            <Button href="/contact" variant="primary" className="w-full sm:w-auto">
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
