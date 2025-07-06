"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TestimonialSlider from "@/components/TestimonialSlider";
import Image from "next/image";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  return (
    <main className="mx-auto">
      {/* Hero 區塊 */}
      <div
        ref={sliderRef}
        className="keen-slider w-full h-150 overflow-hidden relative"
      >
        <div className="keen-slider__slide">
          <Image
            src="/images/ADU.png"
            alt="建築1"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-white/30 flex flex-col justify-center items-center text-white w-100  h-150">
            <h1 className="text-4xl font-bold mb-4">打造專屬您的空間</h1>
            <a
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded text-white"
            >
              立即詢價 ➜
            </a>
          </div>
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/images/outside.png"
            alt="建築2"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/images/outside.png"
            alt="建築3"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
      </div>

      {/* 服務介紹 */}
      <section className="mb-12 py-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Building better homes one service at a time!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["室內裝潢", "舊屋翻新", "商空設計"].map((title, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded shadow hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">
                提供高品質的 {title} 解決方案，滿足您的各種需求。
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 關於我們 */}
      <section className="mb-12 bg-gray-100 p-6 rounded">
        <h2 className="text-3xl font-bold mb-4">關於我們</h2>
        <p className="text-gray-700 leading-relaxed">
          我們是一群熱愛建築與設計的團隊，擁有超過 10
          年的工程經驗，擅長打造舒適、實用又美觀的空間。
        </p>
      </section>
      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">
          Why Choose C.J. Works?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>✅ Customized services tailored to your needs</li>
              <li>
                ✅ Carefully selected materials that are both durable and
                aesthetic
              </li>
              <li>
                ✅ Transparent process with clear communication and fair pricing
              </li>
              <li>
                ✅ Post-completion follow-up to ensure satisfaction and quality
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow text-gray-700 leading-relaxed">
            {
              "Every space has its own story. At C.J. Works, we don't just build — we bring visions to life. From consultation and design to execution, our experienced team ensures every detail meets the highest standards."
            }
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <TestimonialSlider />

      {/* Enhanced Call to Action */}
      <section className="text-center mb-20">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to build your dream space?
        </h2>
        <p className="text-gray-600 mb-6">
          Whether it’s a home renovation, commercial project, or custom interior
          design, C.J. Works is your trusted partner every step of the way.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Contact Us Now ➜
        </a>
      </section>
    </main>
  );
}
