
export default function TestimonialsPage() {
  return (
    <div className="pt-32 pb-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-950 mb-4 text-center">Customer Testimonials</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. Read what our satisfied customers have to say about our granite quality and installation services.
        </p>

        <div className="bg-stone-50 p-8 rounded-xl text-center mb-16">
          <div className="text-5xl font-bold text-slate-950 mb-2">4.9/5</div>
          <div className="text-orange-500 text-2xl mb-2">★★★★★</div>
          <p className="text-gray-600">Based on 41+ Google Reviews</p>
          <a href="https://maps.app.goo.gl/KoEDaC81LZ3mAfhz9" className="inline-block mt-4 bg-white border border-gray-200 px-6 py-2 rounded-full text-slate-900 font-medium hover:bg-gray-50 transition">
            Leave a Review
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center text-slate-500 font-bold">
                {String.fromCharCode(64 + i)}
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div className="font-semibold text-slate-900">Happy Customer {i}</div>
                  <div className="text-sm text-gray-400">2 months ago</div>
                </div>
                <div className="flex text-orange-500 text-sm mb-3">★★★★★</div>
                <p className="text-gray-700">
                  "Absolutely brilliant service from Bethel Stones. They helped us choose the right granite for our kitchen countertops and the installation was flawless. Highly recommended!"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

