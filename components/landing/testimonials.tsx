"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO",
    company: "TechFlow Solutions",
    content:
      "InsightRelay transformed how we monitor our business metrics. The real-time alerts helped us catch a critical issue that could have cost us thousands.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Marcus Rodriguez",
    role: "Growth Manager",
    company: "ScaleUp Inc",
    content:
      "The automated reporting feature saves us 10+ hours per week. Our team can now focus on acting on insights rather than generating reports.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emily Watson",
    role: "Data Analyst",
    company: "Innovate Labs",
    content:
      "Best analytics platform we've used. The engagement tracking gives us unprecedented visibility into our customer communication effectiveness.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "David Kim",
    role: "Operations Director",
    company: "GrowthCorp",
    content:
      "InsightRelay's integration capabilities are outstanding. We connected all our tools in minutes and now have a unified view of our business.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F3F4F6] to-accent bg-clip-text text-transparent">
            Trusted by Growing Businesses
          </h2>
          <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
            See what our customers are saying about InsightRelay
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                  >
                    <div className="p-8 md:p-12 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10 text-center relative">
                      <Quote className="w-12 h-12 text-accent/30 mx-auto mb-6" />

                      <blockquote className="text-xl md:text-2xl text-[#F3F4F6] mb-8 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>

                      <div className="flex items-center justify-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-accent text-accent"
                          />
                        ))}
                      </div>

                      <div className="flex items-center justify-center gap-4">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full border-2 border-accent/30"
                        />
                        <div className="text-left">
                          <div className="font-semibold text-[#F3F4F6]">
                            {testimonial.name}
                          </div>
                          <div className="text-[#9CA3AF]">
                            {testimonial.role} at {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent scale-125"
                    : "bg-[#9CA3AF]/30 hover:bg-[#9CA3AF]/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
