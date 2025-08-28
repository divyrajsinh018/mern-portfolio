import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { api } from '../services/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await api.sendMessage(form);
      if (res.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setError(res.error);
      }
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong.');
    }
  };

  // Auto-clear success message
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => setStatus('idle'), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section
      id="contact"
      className="w-[108%] section py-16 md:py-24 bg-gray-50 dark:bg-gray-900"
    >
      <Helmet>
        <title>MERN Portfolio – Contact</title>
        <meta name="description" content="Contact form to reach me" />
      </Helmet>

      <div className="container mx-auto max-w-xl text-center px-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">Connect with me</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white my-4">
          Get in touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          I'd love to hear from you! If you have any questions, comments, or feedback,
          please use the form below.
        </p>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              aria-label="Your Name"
              type="text"
              required
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              aria-label="Your Email"
              type="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <textarea
            aria-label="Your Message"
            required
            minLength={10}
            rows={6}
            placeholder="Enter your message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {/* Error Message */}
          {error && (
            <p className="text-red-600 font-medium bg-red-100 dark:bg-red-800 px-4 py-2 rounded-md">
              ❌ {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="w-full md:w-auto px-6 py-3 bg-pink-600 text-white font-medium rounded-xl hover:bg-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Sending…' : 'Send Message'}
          </button>

          {/* Success Message */}
          {status === 'success' && (
            <p className="text-green-600 font-medium bg-green-100 dark:bg-green-800 px-4 py-2 rounded-md mt-2">
              ✅ Thanks! I will get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
