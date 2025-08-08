"use client";

import Link from "next/link";
import Features from "./Features";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-[#9371F1] text-white pt-32 pb-20 md:pt-40 md:pb-20">
      <div className="md:max-w-8xl ms:max-w-7xl mx-auto px-6 sm:px-2 lg:px-10">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold leading-relaxed md:leading-tight">
            Your Smart
            <br />{" "}
            <span style={{ color: "#DCEBFE" }}>University Assistant</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mt-10 mb-12 md:mb-12  md:max-w-4xl mx-auto leading-loose md:leading-relaxed">
            Meet UniBot - the intelligent chatbot designed to help students
            navigate university life with ease. Get instant answers, academic
            support, and personalized guidance 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 md:gap-4 justify-center">
            <Link
              href="#waitlist"
              className="inline-block border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              style={{ color: "#1556EA", backgroundColor: "white" }}
            >
              Join Waitlist →
            </Link>
            <Link
              href="#features"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section - Now inside Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                                 style={{ backgroundColor: "#7178F7" }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Instant Answers
            </h3>
            <p className="text-blue-100 text-lg">
              Get immediate responses to your academic and campus questions
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#7278F7" }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Personalized Support
            </h3>
            <p className="text-blue-100 text-lg">
              Tailored guidance based on your academic journey and interests
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                                 style={{ backgroundColor: "#7178F7" }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Always Available
            </h3>
            <p className="text-blue-100 text-lg">
              24/7 accessibility whenever you need academic assistance
            </p>
          </div>
        </div>
      </div>

      {/* Background gradient circles */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20" />
    </section>
  );
}
