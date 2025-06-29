"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import {
  ArrowRight,
  Scale,
  Gavel,
  FileText,
  Building,
  Shield,
} from "lucide-react"
import TestimonialSlider from "@/components/testimonial-slider"
import FaqAccordion from "@/components/faq-accordion"
import WhatsappButton from "@/components/WhatsappButton"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[url('/images/hero-background.jpg')] bg-cover bg-center py-32">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Justice & Excellence <span className="text-primary">In Practice</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            Dedicated legal professionals committed to protecting your rights and securing your future.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Our Practice Areas
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Scale className="h-6 w-6" />, title: "Criminal Law" },
              { icon: <Building className="h-6 w-6" />, title: "Civil Law" },
              { icon: <Gavel className="h-6 w-6" />, title: "Corporate and Commercial" },
              { icon: <FileText className="h-6 w-6" />, title: "Litigation & Dispute Resolution" },
              { icon: <Shield className="h-6 w-6" />, title: "Legal Documentation & Advisory" },
            ].map((area, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white transition-transform hover:scale-105">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold">{area.title}</h3>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/what-we-do"
              className="inline-flex items-center text-lg font-medium text-primary hover:underline"
            >
              View All Practice Areas <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto grid gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">About Vista Legal</h2>
            <p className="mb-4 text-muted-foreground">
              Founded by experienced advocates Manoj Kumar J Y and Subhash R., Vista Legal is dedicated to delivering
              strategic, ethical, and client-focused legal services across Bengaluru and Karnataka.
            </p>
            <p className="mb-6 text-muted-foreground">
              With strong foundations in criminal and civil litigation, our firm combines legal expertise with empathy
              to protect our clients’ rights and ensure justice.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/team-meeting.jpg"
              alt="Vista Legal team discussion"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials Section */}
      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Client Testimonials
          </h2>
          <div className="max-w-4xl mx-auto">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-muted-foreground">
            Find answers to common questions about our legal services and processes. If you don't see your question
            here, please don't hesitate to contact us.
          </p>
          <div className="mx-auto max-w-3xl">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Discuss Your Case?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Our team of experienced lawyers is ready to help you navigate your legal challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-white px-6 py-3 text-lg font-medium text-primary transition-colors hover:bg-gray-100"
          >
            Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <WhatsappButton />
    </div>
  )
}

// Gallery Section Component
function GallerySection() {
  const images = [
    "/images/gallery/IMG_8657.jpg",
    "/images/gallery/IMG_8553.jpg",
    "/images/gallery/IMG_8561.jpg",
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [images.length])

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  return (
    <section className="py-16 bg-muted/40">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Life at Vista Legal
        </h2>
        <div className="relative mx-auto h-[400px] w-full max-w-5xl overflow-hidden rounded-lg shadow-lg bg-white">
          <Image
            src={images[current]}
            alt={`Gallery image ${current + 1}`}
            fill
            className="object-contain transition-opacity duration-700"
            priority
          />
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-1 text-xl font-bold shadow hover:bg-white"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-1 text-xl font-bold shadow hover:bg-white"
          >
            ›
          </button>
        </div>
        <div className="mt-4 text-muted-foreground text-sm">
          {current + 1} / {images.length}
        </div>
      </div>
    </section>
  )
}
