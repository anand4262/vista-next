import Image from "next/image"
import PageHeader from "@/components/page-header"

const WhatWeDo = () => {
  return (
    <div>
      <PageHeader
        title="About Our Firm"
        description="Learn about our history, mission, values, and commitment to excellence in legal services."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
            <p className="mb-4 text-muted-foreground">
              At Vista Legal Firm, our mission is to provide exceptional legal representation with integrity,
              dedication, and a commitment to achieving the best possible outcomes for our clients. We believe in
              justice for all and strive to make quality legal services accessible to those who need them most.
            </p>
            <p className="text-muted-foreground">
              We approach each case with personalized attention, recognizing that every client's situation is unique and
              deserves a tailored legal strategy. Our attorneys work tirelessly to protect your rights and interests,
              guiding you through complex legal processes with clarity and compassion.
            </p>
          </div>
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/team-meeting.jpg"
              alt="Law firm team meeting in a conference room"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mb-16 grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/firm-history.jpg"
              alt="Historic law firm building"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Our History</h2>
            <p className="mb-4 text-muted-foreground">
              Founded in 1995 by Fatima Jinnah and Ahmed Khan, our firm began as a small practice focused on family law
              and criminal defense. Over the decades, we have grown into a full-service law firm with expertise across
              multiple practice areas, serving clients throughout Pakistan.
            </p>
            <p className="mb-4 text-muted-foreground">
              Throughout our history, we have maintained our founding principles of client-centered representation,
              ethical practice, and community involvement. Our attorneys have secured landmark victories in state and
              federal courts, establishing precedents that have shaped legal practice in our jurisdiction.
            </p>
            <p className="text-muted-foreground">
              Today, Vista Legal Firm stands as a respected legal institution with a track record of success and a
              reputation for excellence. We continue to evolve and adapt to changing legal landscapes while remaining
              true to our core values and commitment to our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default  WhatWeDo