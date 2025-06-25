import type React from "react"
import Link from "next/link"
import { ArrowRight, Scale, Gavel, FileText, Building, Shield, Users, CheckCircle, BookOpen } from "lucide-react"
import TestimonialSlider from "@/components/testimonial-slider"
import FaqAccordion from "@/components/faq-accordion"

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

      {/* Practice Areas Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Our Practice Areas</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <PracticeAreaCard
              icon={<Scale className="h-10 w-10" />}
              title="Criminal Law"
              description=""
            />
            <PracticeAreaCard
              icon={<Building className="h-10 w-10" />}
              title="Civil Law"
              description=""
            />
            <PracticeAreaCard
              icon={<Gavel className="h-10 w-10" />}
              title="Corporate and Commercial "
              description=""
            />
            <PracticeAreaCard
              icon={<FileText className="h-10 w-10" />}
              title="Litigation and Dispute Resolution"
              description=""
            />
            <PracticeAreaCard
              icon={<Shield className="h-10 w-10" />}
              title="Legal Documentation and Advisory"
              description=""
            />
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

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Client Testimonials</h2>
          <TestimonialSlider />
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-muted-foreground">
            Find answers to common questions about our legal services and processes. If you don't see your question
            here, please don't hesitate to contact us.
          </p>
          <div className="mx-auto max-w-3xl">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Discuss Your Case?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Our team of experienced attorneys is ready to help you navigate your legal challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-white px-6 py-3 text-lg font-medium text-primary-foreground transition-colors hover:bg-gray-100"
          >
            Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

function PracticeAreaCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:shadow-md">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function CaseResultCard({ amount, category, description }: { amount: string; category: string; description: string }) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:shadow-md">
      <div className="mb-2 flex items-center">
        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
        <span className="text-sm font-medium text-muted-foreground">{category}</span>
      </div>
      <h3 className="mb-3 text-2xl font-bold text-primary">{amount}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function ResourceCard({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:shadow-md">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-muted-foreground">{description}</p>
      <Link href={link} className="mt-auto inline-flex items-center text-primary hover:underline">
        Read More <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  )
}
