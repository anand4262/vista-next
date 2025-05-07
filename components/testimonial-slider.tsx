"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

type Testimonial = {
  id: number
  name: string
  position: string
  quote: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rashid Ahmed",
    position: "Family Law Client",
    quote:
      "Fatima Jinnah handled my divorce with compassion and professionalism. She fought for my rights while keeping the process as amicable as possible. I couldn't have asked for better representation during such a difficult time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mariam Siddiqui",
    position: "Immigration Law Client",
    quote:
      "Imran Raza changed our lives. My family and I had been struggling with immigration issues for years until we found Justice Law Firm. Imran guided us through the complex process with patience and expertise, and now we're settled in our new home.",
    rating: 5,
  },
  {
    id: 3,
    name: "Tariq Mahmood",
    position: "Personal Injury Client",
    quote:
      "After my accident, I was overwhelmed with medical bills and insurance claims. Ayesha Mahmood took over and handled everything, securing a settlement that covered all my expenses and compensated me for my suffering. I'm forever grateful.",
    rating: 5,
  },
  {
    id: 4,
    name: "Saima Khan",
    position: "Corporate Law Client",
    quote:
      "Ahmed Khan has been our company's attorney for over a decade. His strategic advice has helped us navigate complex business transactions and regulatory challenges. He's not just our lawyer; he's a trusted business advisor.",
    rating: 5,
  },
  {
    id: 5,
    name: "Faisal Malik",
    position: "Criminal Defense Client",
    quote:
      "When I was facing serious criminal charges, Zainab Malik was my fierce advocate. Her knowledge of the law and courtroom presence were impressive. Thanks to her defense strategy, my charges were reduced significantly.",
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, currentIndex])

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <div
      className="relative mx-auto max-w-4xl overflow-hidden rounded-lg border border-border bg-card p-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative min-h-[250px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute left-0 top-0 w-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="mb-4 flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                />
              ))}
            </div>

            <blockquote className="mb-6 text-xl italic text-muted-foreground">"{testimonial.quote}"</blockquote>

            <div>
              <p className="text-lg font-semibold">{testimonial.name}</p>
              <p className="text-muted-foreground">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <Button variant="outline" size="icon" onClick={prevSlide} aria-label="Previous testimonial">
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <Button variant="outline" size="icon" onClick={nextSlide} aria-label="Next testimonial">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
