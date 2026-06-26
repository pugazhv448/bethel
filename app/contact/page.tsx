import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-950 mb-4 text-center">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Get in touch with us for a free quote, consultation, or any inquiries about our granite products and installation services.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Container */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-slate-950">Send us a message</h2>
            <ContactForm />
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-slate-950">Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start">
                  <span className="text-xl mr-3 text-orange-500">📍</span>
                  <span><strong>Address:</strong><br/>135 Lakshmi Nagar, Mudichur<br/>Chennai, Tamil Nadu 600048</span>
                </p>
                <p className="flex items-center">
                  <span className="text-xl mr-3 text-orange-500">📞</span>
                  <span><strong>Phone:</strong> <a href="tel:+919884828642" className="hover:text-orange-500">+91 98848 28642</a></span>
                </p>
                <p className="flex items-center">
                  <span className="text-xl mr-3 text-orange-500">✉️</span>
                  <span><strong>Email:</strong> <a href="mailto:info@bethelstones.com" className="hover:text-orange-500">info@bethelstones.com</a></span>
                </p>
                <p className="flex items-center">
                  <span className="text-xl mr-3 text-orange-500">🕐</span>
                  <span><strong>Business Hours:</strong> 9:00 AM - 9:00 PM</span>
                </p>
              </div>
            </div>

            <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100">
              <MapEmbed />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

