import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

export default function TestimonialSlider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 4,
      spacing: 24,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  const animation = { duration: 100000, easing: (t: number) => t };

  const testimonials = [
    {
      content:
        "C.J. Works handled everything with precision and care. The entire process was smooth and stress-free. I couldn’t be happier with the outcome.",
      name: "Emily R.",
    },
    {
      content:
        "Their team was professional, responsive, and truly understood my vision. The final build is stunning. I highly recommend C.J. Works.",
      name: "Jason L.",
    },
    {
      content:
        "From the first meeting to the final walk-through, C.J. Works delivered top-quality service. They made my dream space a reality.",
      name: "Sophia T.",
    },
    {
      content:
        "I was impressed by their craftsmanship and attention to detail. The project finished on time and within budget—couldn’t ask for more!",
      name: "Michael H.",
    },
    {
      content:
        "The team at C.J. Works is efficient, friendly, and talented. They turned my ideas into a beautiful, functional space.",
      name: "Olivia C.",
    },
    {
      content:
        "Excellent communication, reliable timelines, and a flawless finish. I’m so grateful I chose C.J. Works for my renovation.",
      name: "Daniel W.",
    },
    {
      content:
        "Their professionalism and work ethic really stood out. The entire process was well-organized and the result was beyond my expectations.",
      name: "Grace K.",
    },
    {
      content:
        "C.J. Works took care of everything—from permits to final touches. I felt supported every step of the way.",
      name: "Anthony S.",
    },
    {
      content:
        "They listened to my needs and delivered with perfection. It’s rare to find a contractor this trustworthy and skilled.",
      name: "Linda M.",
    },
    {
      content:
        "I can’t say enough good things about C.J. Works. They were transparent, creative, and dedicated to quality work.",
      name: "Brian D.",
    },
  ];
  return (
    <section className="mb-12 bg-gray-50 p-6 rounded">
      <h2 className="text-3xl font-bold text-center mb-6">
        What Our Clients Say?
      </h2>

      <div ref={sliderRef} className="keen-slider overflow-hidden relative">
        {testimonials.map((item, index) => (
          <div key={index} className="keen-slider__slide ">
            <blockquote className="bg-white p-4 rounded shadow flex flex-col h-full min-h-[300px]">
              <div>
                <p className="italic">{item.content}</p>
                <footer className="mt-2 text-right">— {item.name}</footer>
                <Image
                  src={`/images/p1.png`}
                  alt={`建築${1}`}
                  className="w-full h-auto object-contain mt-2"
                />
              </div>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
