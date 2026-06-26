
export default function AboutPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-950 mb-8 text-center">About Bethel Stones</h1>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <p className="text-lg text-gray-700 mb-6">
            Bethel Stones is Chennai's premier granite and marble supplier, specializing in high-quality stone products and professional installation services. With years of experience and a commitment to excellence, we have built a reputation for delivering stunning results that stand the test of time.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to provide homeowners, builders, and designers with the finest materials and craftsmanship. From kitchen countertops to elegant flooring, we take pride in every project we undertake.
          </p>
          
          <h2 className="text-2xl font-bold text-slate-950 mt-10 mb-6">Why Choose Bethel Stones?</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
            <li><strong>25+ Years Experience:</strong> Deep expertise in the granite business.</li>
            <li><strong>Certified Installers:</strong> Professional, trained, and meticulous installation team.</li>
            <li><strong>Quality Guaranteed:</strong> We source only the best materials from top quarries.</li>
            <li><strong>Free Consultations:</strong> Expert advice to help you choose the right stone for your needs.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-950 mt-10 mb-6">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mt-6">
            <div className="bg-stone-50 p-4 rounded-lg">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-bold">1. Design</h3>
            </div>
            <div className="bg-stone-50 p-4 rounded-lg">
              <div className="text-3xl mb-2">🔍</div>
              <h3 className="font-bold">2. Selection</h3>
            </div>
            <div className="bg-stone-50 p-4 rounded-lg">
              <div className="text-3xl mb-2">🔨</div>
              <h3 className="font-bold">3. Install</h3>
            </div>
            <div className="bg-stone-50 p-4 rounded-lg">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="font-bold">4. Quality</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

