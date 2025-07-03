import { useEffect, useState } from "react"
import Image from "next/image"

export default function GallerySection() {
  const images = [
    "/images/gallery/IMG_8553.jpg",
    "/images/gallery/IMG_8561.jpg",
    "/images/gallery/IMG_8797.jpg",
    "/images/gallery/IMG_8563.jpg",
    "/images/gallery/IMG_8570.jpg",
    "/images/gallery/IMG_8578.jpg",
    "/images/gallery/IMG_8582.jpg",
    "/images/gallery/IMG_8587.jpg",
    "/images/gallery/IMG_8589.jpg",
    "/images/gallery/IMG_8595.jpg",
    "/images/gallery/IMG_8600.jpg",
    "/images/gallery/IMG_8616.jpg",
    "/images/gallery/IMG_8625.jpg",
    "/images/gallery/IMG_8631.jpg",
    "/images/gallery/IMG_8653.jpg",
    "/images/gallery/IMG_8664.jpg",
    "/images/gallery/IMG_8675.jpg",
    "/images/gallery/IMG_8686.jpg",
    "/images/gallery/IMG_8701.jpg",
    "/images/gallery/IMG_8715.jpg",
    "/images/gallery/IMG_8729.jpg",
    "/images/gallery/IMG_8735.jpg",
    "/images/gallery/IMG_8740.jpg",
    "/images/gallery/IMG_8741.jpg",
    "/images/gallery/IMG_8743.jpg",
    "/images/gallery/IMG_8750.jpg",
    "/images/gallery/IMG_8758.jpg",
    "/images/gallery/IMG_8763.jpg",
    "/images/gallery/IMG_8782.jpg",
    "/images/gallery/IMG_8785.jpg",
    "/images/gallery/IMG_8787.jpg",
    "/images/gallery/IMG_8791.jpg",
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
      <div className="container px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Vista Legal Gallery
        </h2>

        <div className="relative mx-auto max-w-[90%] sm:max-w-5xl aspect-[3/2] rounded-lg shadow-md bg-white overflow-hidden flex items-center justify-center">
          <Image
            src={images[current]}
            alt={`Gallery image ${current + 1}`}
            fill
            className="object-contain transition-transform duration-700 ease-in-out"
            priority
          />
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 px-3 py-1 text-xl font-bold shadow hover:bg-white"
          >
            ‹
          </button>
          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 px-3 py-1 text-xl font-bold shadow hover:bg-white"
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
