import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function AttorneysPage() {
  return (
    <div>
      <PageHeader
        title="Our Attorneys"
        description="Meet our team of experienced legal professionals dedicated to serving your needs."
      />

      <div className="container mx-auto px-4 py-16">
        <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-muted-foreground">
          Our team of experienced attorneys is dedicated to providing exceptional legal representation across a wide
          range of practice areas. Get to know the legal professionals who will be by your side.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AttorneyCard
            name="Fatima Jinnah"
            title="Founding Partner"
            image="/images/attorney-1.jpg"
            specialties={["Family Law", "Estate Planning"]}
            education={["LL.B., Punjab University Law College", "B.A., Lahore University of Management Sciences"]}
            barAdmissions={["Pakistan Bar Council", "Lahore High Court Bar Association"]}
            bio="Fatima Jinnah has over 25 years of experience in family law and estate planning. As a founding partner of Justice Law Firm, she has helped hundreds of clients navigate complex legal matters with compassion and expertise. Fatima is known for her strategic approach to negotiation and litigation, always focusing on achieving the best possible outcomes for her clients."
            email="fatima@justicelawfirm.pk"
            phone="+92 300 123 4567"
          />

          <AttorneyCard
            name="Ahmed Khan"
            title="Founding Partner"
            image="/images/attorney-2.jpg"
            specialties={["Corporate Law", "Intellectual Property"]}
            education={[
              "LL.M., Quaid-i-Azam University",
              "MBA, Institute of Business Administration",
              "B.Sc., FAST National University",
            ]}
            barAdmissions={[
              "Pakistan Bar Council",
              "Sindh High Court Bar Association",
              "Intellectual Property Organization of Pakistan",
            ]}
            bio="Ahmed Khan brings a unique combination of legal expertise and business acumen to his practice. With dual degrees in law and business, he provides strategic counsel to corporations of all sizes, from startups to multinational companies. Ahmed specializes in complex business transactions, intellectual property protection, and corporate governance matters."
            email="ahmed@justicelawfirm.pk"
            phone="+92 300 123 4568"
          />

          <AttorneyCard
            name="Zainab Malik"
            title="Senior Partner"
            image="/images/attorney-3.jpg"
            specialties={["Criminal Defense", "Civil Rights"]}
            education={["LL.B., Lahore University of Management Sciences", "B.A., Government College University"]}
            barAdmissions={[
              "Pakistan Bar Council",
              "Islamabad High Court Bar Association",
              "Supreme Court Bar Association of Pakistan",
            ]}
            bio="Zainab Malik is a formidable advocate with a passion for justice. Her practice focuses on criminal defense and civil rights litigation, where she has secured numerous acquittals and favorable settlements for her clients. Zainab's strategic thinking and thorough preparation make her a powerful presence in the courtroom. She is dedicated to protecting the constitutional rights of all individuals."
            email="zainab@justicelawfirm.pk"
            phone="+92 300 123 4569"
          />

          <AttorneyCard
            name="Imran Raza"
            title="Partner"
            image="/images/attorney-4.jpg"
            specialties={["Immigration Law", "Employment Law"]}
            education={["LL.B., University of Karachi", "B.A., Aga Khan University"]}
            barAdmissions={["Pakistan Bar Council", "Sindh Bar Council"]}
            bio="Imran Raza specializes in immigration and employment law, helping individuals and families navigate complex immigration processes and workplace issues. Fluent in Urdu, Punjabi, and English, Imran provides culturally sensitive representation to clients from diverse backgrounds. His deep understanding of immigration policy and employment regulations allows him to develop effective strategies for his clients."
            email="imran@justicelawfirm.pk"
            phone="+92 300 123 4570"
          />

          <AttorneyCard
            name="Ayesha Mahmood"
            title="Partner"
            image="/images/attorney-5.jpg"
            specialties={["Personal Injury", "Medical Malpractice"]}
            education={["LL.B., International Islamic University", "B.Sc., King Edward Medical University"]}
            barAdmissions={["Pakistan Bar Council", "Punjab Bar Council"]}
            bio="Ayesha Mahmood is a skilled litigator who has recovered millions of rupees for victims of negligence and medical malpractice. Her background in medicine gives her a unique advantage in understanding complex medical issues and effectively communicating them to judges and juries. Ayesha is known for her compassionate approach to client representation and her tenacity in pursuing justice."
            email="ayesha@justicelawfirm.pk"
            phone="+92 300 123 4571"
          />

          <AttorneyCard
            name="Usman Ali"
            title="Associate"
            image="/images/attorney-6.jpg"
            specialties={["Real Estate Law", "Business Litigation"]}
            education={["LL.B., University of the Punjab", "B.A., National University of Sciences and Technology"]}
            barAdmissions={["Pakistan Bar Council"]}
            bio="Usman Ali focuses his practice on real estate transactions and business litigation. He represents clients in property purchases and sales, lease negotiations, land use matters, and real estate disputes. Usman also handles a variety of business litigation cases, including contract disputes, partnership conflicts, and unfair competition claims. His analytical approach and attention to detail make him a valuable asset to the firm."
            email="usman@justicelawfirm.pk"
            phone="+92 300 123 4572"
          />
        </div>
      </div>
    </div>
  )
}

function AttorneyCard({
  name,
  title,
  image,
  specialties,
  education,
  barAdmissions,
  bio,
  email,
  phone,
}: {
  name: string
  title: string
  image: string
  specialties: string[]
  education: string[]
  barAdmissions: string[]
  bio: string
  email: string
  phone: string
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-md">
      <div className="relative h-[300px] w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Portrait of ${name}, ${title}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h2 className="mb-1 text-2xl font-bold">{name}</h2>
        <p className="mb-4 text-primary">{title}</p>

        <p className="mb-4 text-muted-foreground">{bio}</p>

        <div className="mb-4">
          <h3 className="mb-2 text-lg font-semibold">Areas of Practice</h3>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span key={index} className="rounded-full bg-muted px-3 py-1 text-sm">
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-lg font-semibold">Education</h3>
          <ul className="list-inside list-disc text-muted-foreground">
            {education.map((degree, index) => (
              <li key={index}>{degree}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-lg font-semibold">Bar Admissions</h3>
          <ul className="list-inside list-disc text-muted-foreground">
            {barAdmissions.map((admission, index) => (
              <li key={index}>{admission}</li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <h3 className="mb-2 text-lg font-semibold">Contact Information</h3>
          <div className="flex flex-col space-y-2 text-muted-foreground">
            <a href={`mailto:${email}`} className="flex items-center hover:text-primary">
              <Mail className="mr-2 h-4 w-4" /> {email}
            </a>
            <a href={`tel:${phone}`} className="flex items-center hover:text-primary">
              <Phone className="mr-2 h-4 w-4" /> {phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
