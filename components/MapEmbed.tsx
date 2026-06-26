export default function MapEmbed() {
  return (
    <div className="w-full h-[400px] bg-slate-200 rounded-xl overflow-hidden shadow-sm relative">
      {/* Fallback map if key is not available */}
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=Bethel+Stones,Mudichur,Chennai`}
        allowFullScreen
      ></iframe>
    </div>
  );
}
