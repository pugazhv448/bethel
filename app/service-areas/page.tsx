import MapEmbed from '@/components/MapEmbed';

export default function ServiceAreasPage() {
  const areas = [
    'Mudichur', 'Tambaram', 'Chromepet', 'Pallavaram',
    'Chengalpattu', 'Kanchipuram', 'Guduvanchery', 'Vandalur',
    'Perungalathur', 'OMR', 'ECR', 'Velachery'
  ];

  return (
    <div className="pt-32 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-950 mb-4 text-center">Areas We Serve</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Bethel Stones provides premium granite supply and installation services across Chennai and surrounding districts.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-slate-950">Primary Service Areas</h2>
              <ul className="grid grid-cols-2 gap-y-4 text-gray-700">
                {areas.map((area, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span> {area}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600 italic">
                  Don't see your area listed? Contact us anyway! We frequently take on projects outside our primary zones depending on the scope.
                </p>
              </div>
            </div>
          </div>
          
          <div className="sticky top-24">
            <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100">
              <MapEmbed />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

