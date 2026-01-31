"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Let&apos;s Build the Future of Flight
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Get in touch with our engineering team for custom manufacturing requirements.
            </p>
            <div className="mt-10 space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Our Location</h3>
                <p className="mt-2 text-slate-700">Salem, Tamil Nadu, India</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Email Us</h3>
                <a href="mailto:makeinmech@gmail.com" className="mt-2 block text-accent hover:underline">
                  makeinmech@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Call Us</h3>
                <a href="tel:+919445180917" className="mt-2 block text-slate-700 hover:text-accent">+91 9445180917</a>
                <a href="tel:+917396687515" className="mt-1 block text-slate-700 hover:text-accent">+91 7396687515</a>
              </div>
            </div>
            <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">Industrial Partnership</h3>
              <p className="mt-2 text-slate-600">
                Specialized mechanical solutions for drone manufacturers across India. Fast-track your production with MakeInMech.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-semibold text-slate-900">Send us a message</h3>
            {submitted ? (
              <p className="mt-6 text-slate-600">
                Thank you for your message. We&apos;ll get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 shadow-sm focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 shadow-sm focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 shadow-sm focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="requirement" className="block text-sm font-medium text-slate-700">
                    Requirement Details
                  </label>
                  <textarea
                    id="requirement"
                    name="requirement"
                    rows={4}
                    required
                    className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 shadow-sm focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-light transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
