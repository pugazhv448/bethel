'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone must be 10 digits'),
  serviceType: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-300 text-green-800 p-4 rounded-lg">
        ✓ Thank you! We'll contact you within 24 hours.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Full Name
        </label>
        <input
          id="name"
          {...register('name')}
          type="text"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            {...register('email')}
            type="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone (10 digits)
          </label>
          <input
            id="phone"
            {...register('phone')}
            type="tel"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            placeholder="9884828642"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-1">
          Service Type
        </label>
        <select
          id="service"
          {...register('serviceType')}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
        >
          <option value="">Select a service...</option>
          <option value="countertops">Granite Countertops</option>
          <option value="flooring">Granite Flooring</option>
          <option value="installation">Installation Only</option>
          <option value="consultation">Free Consultation</option>
          <option value="other">Other</option>
        </select>
        {errors.serviceType && (
          <p className="text-red-500 text-sm mt-1">
            {errors.serviceType.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition disabled:bg-gray-400"
      >
        {loading ? 'Sending...' : 'Get Free Quote'}
      </button>
    </form>
  );
}
