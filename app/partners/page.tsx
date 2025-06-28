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
          <div className="flex flex-wrap justify-center gap-8">
            <AttorneyCard
              name="Subhash R."
              title="Founding Partner"
              image="/images/IMG_8729.jpg"
              specialties={["Family Law", "Estate Planning"]}
              education={["Ramaiah Law College (KSLU)"]}
              barAdmissions={["Karnataka Bar Council since 2021."]}
              bio="Manoj Kumar J Y is a founding partner of Vista Legal and specializes in family law and estate planning."
              email="manoj@vistalegal.in"
              phone="+91 9686402901"
            />
            <AttorneyCard
              name="Manoj Kumar J Y"
              title="Founding Partner"
              image="/images/IMG_8743.jpg"
              specialties={["Corporate Law", "Intellectual Property"]}
              education={["Ramaiah Law College (KSLU)"]}
              barAdmissions={["Karnataka Bar Council since 2021."]}
              bio="Subhash R. co-founded Vista Legal with a focus on corporate advisory and intellectual property law."
              email="subhash@vistalegal.in"
              phone="+91 8197741693"
            />
          </div>
        </div>

        {/* Associates Section */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold">Associates</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <AttorneyCard
              name="Spandana C. M"
              title="Associate"
              image="/images/IMG_8686.jpg"
              bio="Spandana C. M focuses her practice on real estate transactions and business litigation."
              minimal
            />
            <AttorneyCard
              name="Vandhana Jain"
              title="Associate"
              image="/images/IMG_8714.jpg"
              bio="Vandhana Jain specializes in immigration and employment law, helping individuals and families navigate legal complexities."
              minimal
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
  minimal = false,
}: {
  name: string
  title: string
  image: string
  specialties?: string[]
  education?: string[]
  barAdmissions?: string[]
  bio: string
  email?: string
  phone?: string
  minimal?: boolean
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-md max-w-sm">
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

        {!minimal && specialties && specialties.length > 0 && (
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
        )}

        {!minimal && education && education.length > 0 && (
          <div className="mb-4">
            <h3 className="mb-2 text-lg font-semibold">Education</h3>
            <ul className="list-inside list-disc text-muted-foreground">
              {education.map((degree, index) => (
                <li key={index}>{degree}</li>
              ))}
            </ul>
          </div>
        )}

        {!minimal && barAdmissions && barAdmissions.length > 0 && (
          <div className="mb-4">
            <h3 className="mb-2 text-lg font-semibold">Bar Admissions</h3>
            <ul className="list-inside list-disc text-muted-foreground">
              {barAdmissions.map((admission, index) => (
                <li key={index}>{admission}</li>
              ))}
            </ul>
          </div>
        )}

        {!minimal && (email || phone) && (
          <div className="mt-auto">
            <h3 className="mb-2 text-lg font-semibold">Contact Information</h3>
            <div className="flex flex-col space-y-2 text-muted-foreground">
              {email && (
                <a href={`mailto:${email}`} className="flex items-center hover:text-primary">
                  <Mail className="mr-2 h-4 w-4" /> {email}
                </a>
              )}
              {phone && (
                <a href={`tel:${phone}`} className="flex items-center hover:text-primary">
                  <Phone className="mr-2 h-4 w-4" /> {phone}
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
