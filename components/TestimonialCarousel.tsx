export default function TestimonialCarousel() {
  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-950">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex text-orange-500 mb-4">
                {'★★★★★'}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Excellent quality granite and very professional installation. The team completed the work on time and left the place spotless."
              </p>
              <div className="font-semibold text-slate-900">- Customer {i}</div>
              <div className="text-sm text-gray-500">Chennai, TN</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="https://maps.app.goo.gl/KoEDaC81LZ3mAfhz9" className="text-orange-500 font-semibold hover:underline">
            Read All Reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
