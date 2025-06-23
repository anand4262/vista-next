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
        <p className="mx-auto mb-12 max-w-6xl text-center text-xl text-muted-foreground">
          At Vista Legal, we are committed to delivering exceptional legal services across a broad range of practice areas. Based in the heart of Bengaluru, our firm serves individuals, businesses, and organizations with precision, professionalism, and personalized attention. We understand that each legal matter is unique, and we pride ourselves on offering strategic, client-focused solutions that align with your goals.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <PracticeAreaCard
            id="Criminal Law"
            icon={<Scale className="h-12 w-12" />}
            title="Family Law"
            description="We provide strong legal representation in criminal matters, from bail applications and anticipatory bail to trial and appellate proceedings. With our roots in criminal litigation, we bring a sharp, tactical edge to every case we handle."
          />

          <PracticeAreaCard
            id="corporate-law"
            icon={<Building className="h-12 w-12" />}
            title="Civil Law"
            description="Our civil practice covers property disputes, injunctions, recovery suits, partition suits, contractual disagreements, and more. We work closely with our clients to protect their rights and resolve disputes efficiently."
          />

          <PracticeAreaCard
            id="criminal-defense"
            icon={<Gavel className="h-12 w-12" />}
            title="Corporate and Commercial Law"
            description="We assist businesses with company formation, regulatory compliance, shareholder agreements, commercial contracts, and legal due diligence. Whether you're a startup or an established enterprise, we offer sound legal counsel to support your growth."
          />

          <PracticeAreaCard
            id="estate-planning"
            icon={<FileText className="h-12 w-12" />}
            title="Litigation and Dispute Resolution"
            description="Vista Legal is experienced in handling litigation before various courts and tribunals, including the High Court of Karnataka, civil courts, consumer forums, and quasi-judicial bodies. We also offer arbitration and mediation services for clients seeking alternative dispute resolution."
          />

          <PracticeAreaCard
            id="personal-injury"
            icon={<Shield className="h-12 w-12" />}
            title="Legal Documentation and Advisory"
            description="We draft and review agreements, contracts, legal notices, and opinions to ensure our clients are protected and fully informed. Our advisory services are designed to prevent legal pitfalls and promote informed decision-making."
          />
        </div>
        <p className="mx-auto mt-16 mb-12 max-w-6xl text-center text-xl text-muted-foreground">
          At Vista Legal, we stand by our values of excellence, integrity, and client-first service. Every matter we take on is handled with dedication, attention to detail, and a relentless focus on achieving the best possible outcome. Our aim is not just to represent you—but to empower you with clarity, confidence, and trusted legal support every step of the way.
       </p>
      </div>
    </div>
  )
}

function PracticeAreaCard({
  id,
  icon,
  title,
  description,
}: {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div id={id} className="flex flex-col rounded-lg border h-80 border-border bg-card p-6 transition-all hover:shadow-md">
      <div className="mb-4 text-primary">{icon}</div>
      <h2 className="mb-3 text-2xl font-bold">{title}</h2>
      <p className="mb-4 text-muted-foreground">{description}</p>
    </div>
  )
}
