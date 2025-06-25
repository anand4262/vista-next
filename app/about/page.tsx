import Image from "next/image"
import PageHeader from "@/components/page-header"

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Our Firm"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Our Mission Section */}
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
              deserves a tailored legal strategy. Our lawyers work tirelessly to protect your rights and interests,
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

        {/* Our Vision Section */}
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
            <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
            <p className="mb-4 text-muted-foreground">
              To be recognized as one of Karnataka’s most trusted and forward-thinking law firms—renowned for ethical practice, 
              courtroom excellence, and strategic legal advisory. At Vista Legal, our vision is to redefine the client experience 
              by combining deep legal knowledge with innovation, empathy, and unwavering commitment to justice. 
              We aim to build lasting relationships that extend beyond the case, empowering clients with clarity, confidence, 
              and reliable representation.
            </p>
          </div>
        </div>

        {/* Firm Background and Founders */}
        <div className="w-[75%] mx-auto mb-16">
          <p className="mb-4 text-muted-foreground">
            A commitment to legal excellence, ethical practices, and personalized client service drives Vista Legal. 
            Founded in January 2024 by Advocates Manoj Kumar J Y and Subhash R., who graduated from Ramaiah Law College (KSLU) 
            and have been registered members of the Karnataka Bar Council since 2021, the firm was established with a shared 
            vision to provide comprehensive, transparent, and strategic legal services to individuals, businesses, and institutions.
          </p>
          <p className="mb-4 text-muted-foreground">
            Our journey began with a strong foundation in criminal litigation under the mentorship of S. Balan and other advocates, 
            where we learned the importance of precision, thorough preparation, and effective courtroom advocacy. This foundation 
            was further enhanced by extensive experience in civil and corporate law under Advocate Harish H V, helping us develop 
            a well-rounded understanding of both litigation and advisory aspects of the legal system.
          </p>
          <p className="mb-4 text-muted-foreground">
            Located in the heart of Bengaluru, Vista Legal offers a wide range of services, including criminal law, civil litigation, 
            corporate and commercial advisory, dispute resolution, and legal documentation. We represent clients before various forums, 
            including the High Court of Karnataka, civil and magistrate courts, family courts, consumer forums, KAT, RERA, and more.
          </p>
          <p className="text-muted-foreground">
            At Vista Legal, we are more than just your legal representatives; we are your partners in the pursuit of justice. 
            We believe in building lasting relationships based on trust, transparency, and effective results.
          </p>
        </div>
      </div>
    </div>
  )
}
