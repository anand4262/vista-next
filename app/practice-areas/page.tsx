import type React from "react"
import { Scale, Gavel, FileText, Building, Shield, Users, Briefcase, Home, Landmark } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function PracticeAreasPage() {
  return (
    <div>
      <PageHeader
        title="Our Practice Areas"
        description="Comprehensive legal services tailored to your specific needs across a wide range of practice areas."
      />

      <div className="container mx-auto px-4 py-16">
        <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-muted-foreground">
          At Justice Law Firm, we offer comprehensive legal services across a wide range of practice areas. Our
          experienced attorneys provide personalized representation tailored to your specific needs.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <PracticeAreaCard
            id="family-law"
            icon={<Scale className="h-12 w-12" />}
            title="Family Law"
            description="Our family law practice handles divorce, child custody, child support, alimony, adoption, and domestic violence cases with sensitivity and expertise. We understand the emotional challenges involved in family legal matters and provide compassionate guidance throughout the process."
            services={[
              "Divorce and separation",
              "Child custody and visitation",
              "Child support and alimony",
              "Adoption and guardianship",
              "Domestic violence protection",
              "Prenuptial and postnuptial agreements",
            ]}
          />

          <PracticeAreaCard
            id="corporate-law"
            icon={<Building className="h-12 w-12" />}
            title="Corporate Law"
            description="Our corporate law team provides comprehensive legal services for businesses at all stages of development. From formation to dissolution, we offer strategic counsel on governance, compliance, contracts, and transactions to help your business thrive in today's competitive environment."
            services={[
              "Business formation and structuring",
              "Corporate governance",
              "Contract drafting and negotiation",
              "Mergers and acquisitions",
              "Regulatory compliance",
              "Business litigation",
            ]}
          />

          <PracticeAreaCard
            id="criminal-defense"
            icon={<Gavel className="h-12 w-12" />}
            title="Criminal Defense"
            description="Our criminal defense attorneys provide aggressive representation for clients facing charges ranging from misdemeanors to serious felonies. We protect your rights throughout the legal process, from investigation through trial, developing strategic defenses tailored to your specific case."
            services={[
              "Felony and misdemeanor defense",
              "DUI/DWI defense",
              "Drug offenses",
              "White collar crimes",
              "Juvenile offenses",
              "Expungements and record sealing",
            ]}
          />

          <PracticeAreaCard
            id="estate-planning"
            icon={<FileText className="h-12 w-12" />}
            title="Estate Planning"
            description="Our estate planning practice helps clients protect their assets and provide for their loved ones. We create comprehensive plans tailored to your specific circumstances, ensuring your wishes are honored and your legacy is preserved for future generations."
            services={[
              "Wills and trusts",
              "Power of attorney",
              "Healthcare directives",
              "Estate and gift tax planning",
              "Probate administration",
              "Business succession planning",
            ]}
          />

          <PracticeAreaCard
            id="personal-injury"
            icon={<Shield className="h-12 w-12" />}
            title="Personal Injury"
            description="Our personal injury attorneys fight for fair compensation for victims of negligence. We handle cases involving auto accidents, slip and falls, medical malpractice, and more, working tirelessly to hold responsible parties accountable and secure the resources you need for recovery."
            services={[
              "Auto and motorcycle accidents",
              "Slip and fall injuries",
              "Medical malpractice",
              "Workplace injuries",
              "Product liability",
              "Wrongful death claims",
            ]}
          />

          <PracticeAreaCard
            id="immigration-law"
            icon={<Users className="h-12 w-12" />}
            title="Immigration Law"
            description="Our immigration law practice guides clients through complex immigration processes with expertise and personal attention. We assist with visa applications, green cards, citizenship, deportation defense, and more, helping individuals and families achieve their immigration goals."
            services={[
              "Family-based immigration",
              "Employment-based immigration",
              "Naturalization and citizenship",
              "Deportation defense",
              "Asylum and refugee status",
              "Visa applications and renewals",
            ]}
          />

          <PracticeAreaCard
            id="employment-law"
            icon={<Briefcase className="h-12 w-12" />}
            title="Employment Law"
            description="Our employment law attorneys represent both employees and employers in workplace matters. We handle discrimination, harassment, wage disputes, wrongful termination, and more, providing strategic counsel to protect your rights and interests in the workplace."
            services={[
              "Workplace discrimination",
              "Sexual harassment",
              "Wage and hour disputes",
              "Wrongful termination",
              "Employment contracts",
              "Workplace safety issues",
            ]}
          />

          <PracticeAreaCard
            id="real-estate-law"
            icon={<Home className="h-12 w-12" />}
            title="Real Estate Law"
            description="Our real estate practice handles residential and commercial property matters with precision and expertise. From purchases and sales to leases and disputes, we provide comprehensive legal services for all your real estate needs."
            services={[
              "Residential and commercial transactions",
              "Lease agreements",
              "Property disputes",
              "Land use and zoning",
              "Construction contracts",
              "Foreclosure defense",
            ]}
          />

          <PracticeAreaCard
            id="intellectual-property"
            icon={<Landmark className="h-12 w-12" />}
            title="Intellectual Property"
            description="Our intellectual property team protects your creative and business assets through comprehensive IP strategies. We handle patents, trademarks, copyrights, and trade secrets, helping you secure and enforce your intellectual property rights in today's competitive marketplace."
            services={[
              "Patent applications and prosecution",
              "Trademark registration and protection",
              "Copyright registration",
              "IP licensing agreements",
              "IP litigation",
              "Trade secret protection",
            ]}
          />
        </div>
      </div>
    </div>
  )
}

function PracticeAreaCard({
  id,
  icon,
  title,
  description,
  services,
}: {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  services: string[]
}) {
  return (
    <div id={id} className="flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:shadow-md">
      <div className="mb-4 text-primary">{icon}</div>
      <h2 className="mb-3 text-2xl font-bold">{title}</h2>
      <p className="mb-4 text-muted-foreground">{description}</p>

      <h3 className="mb-2 text-lg font-semibold">Our Services Include:</h3>
      <ul className="mb-4 list-inside list-disc text-muted-foreground">
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  )
}
