import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function AttorneysPage() {
  return (
    <div>
      <PageHeader
        title="Our Partners and Associates"
        description="Meet our team of experienced legal professionals dedicated to serving your needs."
      />
      <div className="container mx-auto px-4 py-16">
  <p className="mx-auto mb-12 max-w-7xl text-center text-xl text-muted-foreground">
    Our team of experienced lawyers is dedicated to providing exceptional legal representation across a wide
    range of practice areas. Get to know the legal professionals who will be by your side.
  </p>
    
  {/* Partners Section */}
  <div className="mb-16">
    <h2 className="mb-8 text-center text-3xl font-bold">Partners</h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <AttorneyCard
        name="Manoj Kumar J Y "
        title="Founding Partner"
        image="/images/attorney-6.jpg"
        specialties={["Family Law", "Estate Planning"]}
        education={["LL.B., Punjab University Law College", "B.A., Karnataka University of Management Sciences"]}
        barAdmissions={["Indian Bar Council", "Karnataka High Court Bar Association"]}
        bio="Manoj Kumar J Y  has over 25 years of experience in family law and estate planning..."
        email="fatima@justicelawfirm.pk"
        phone="+92 300 123 4567"
      />

      <AttorneyCard
        name="Subhash. R"
        title="Founding Partner"
        image="/images/attorney-2.jpg"
        specialties={["Corporate Law", "Intellectual Property"]}
        education={[
          "LL.M., Quaid-i-Azam University",
          "MBA, Institute of Business Administration",
          "B.Sc., FAST National University",
        ]}
        barAdmissions={[
          "Indian Bar Council",
          "Sindh High Court Bar Association",
          "Intellectual Property Organization of Pakistan",
        ]}
        bio="Ahmed Khan brings a unique combination of legal expertise and business acumen..."
        email="ahmed@justicelawfirm.pk"
        phone="+92 300 123 4568"
      />
    </div>
  </div>

  {/* Associates Section */}
  <div>
    <h2 className="mb-8 text-center text-3xl font-bold">Associates</h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <AttorneyCard
        name="Spandana. C. M
"
        title="Associate"
        image="/images/attorney-3.jpg"
        specialties={["Real Estate Law", "Business Litigation"]}
        education={["LL.B., University of the Punjab", "B.A., National University of Sciences and Technology"]}
        barAdmissions={["Indian Bar Council"]}
        bio="Spandana. C. M focuses his practice on real estate transactions and business litigation..."
        email="usman@justicelawfirm.pk"
        phone="+92 300 123 4572"
      />

      <AttorneyCard
        name="Vandhana Jain"
        title="Associate"
        image="/images/attorney-1.jpg"
        specialties={["Immigration Law", "Employment Law"]}
        education={["LL.B., University of Karachi", "B.A., Aga Khan University"]}
        barAdmissions={["Indian Bar Council", "Sindh Bar Council"]}
        bio="Vandhana Jain specializes in immigration and employment law, helping individuals and families..."
        email="imran@justicelawfirm.pk"
        phone="+92 300 123 4570"
      />
    </div>
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
