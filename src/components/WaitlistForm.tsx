'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    university: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, this would send data to an API
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank you for joining!</h3>
        <p className="text-gray-600">
          We\'ll notify you when UniBot launches at your university.
        </p>
      </div>
    );
  }

  return (
    <section id="waitlist" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="text-center mb-18">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Be the First to Experience UniBot
          </h2>
          <p className="text-xl mx-auto mb-8 max-w-3xl" style={{color: '#7F93BB'}}>
            Join our exclusive waitlist and get early access to the future of university assistance.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join the Waitlist
            </h3>
            <p className="text-lg" style={{color: '#7F93BB'}}>
              Get notified when UniBot launches at your university
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <label htmlFor="fullName" className="sr-only">
                Your full name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="block w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:border-transparent" onFocus={(e) => (e.target as HTMLElement).style.boxShadow = `0 0 0 2px #1556EA`} onBlur={(e) => (e.target as HTMLElement).style.boxShadow = 'none'}
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Your email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:border-transparent" onFocus={(e) => (e.target as HTMLElement).style.boxShadow = `0 0 0 2px #1556EA`} onBlur={(e) => (e.target as HTMLElement).style.boxShadow = 'none'}
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="university" className="sr-only">
                Your university name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <input
                  id="university"
                  name="university"
                  type="text"
                  required
                  className="block w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:border-transparent" onFocus={(e) => (e.target as HTMLElement).style.boxShadow = `0 0 0 2px #1556EA`} onBlur={(e) => (e.target as HTMLElement).style.boxShadow = 'none'}
                  placeholder="Your university name"
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-white py-3 px-6 rounded-lg transition-colors" style={{backgroundColor: '#1556EA'}} onMouseOver={(e) => (e.target as HTMLElement).style.backgroundColor = '#0d47c7'} onMouseOut={(e) => (e.target as HTMLElement).style.backgroundColor = '#1556EA'}
            >
              Join Waitlist
            </button>
          </div>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already <span className="font-semibold" style={{color: '#1556EA'}}>2,547</span> students waiting
        </p>
      </div>
    </section>
  );
}
