
export default function GalleryPage() {
  const categories = ['Kitchen Countertops', 'Bathroom Vanities', 'Flooring', 'Feature Walls'];

  const galleryImages = [
    '/images/project-1.png',
    '/images/project-2.png',
    '/images/project-3.png',
    '/images/service-countertops.png',
    '/images/service-flooring.png',
    '/images/about.png',
    '/images/black-pearl.png',
    '/images/white-pearl.png',
    '/images/marble_kitchen.png',
    '/images/granite_bathroom.png',
  ];

  return (
    <div className="pt-32 pb-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-950 mb-4 text-center">Project Portfolio</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Take a look at some of our recent installations across Chennai. We take pride in delivering perfect finishes.
        </p>

        {categories.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-gray-200">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.slice(0, 4).map((img, i) => (
                <div key={i} className="aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden relative group">
                  <img src={img} alt={`${category} project ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium px-4 text-center">View Project</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

