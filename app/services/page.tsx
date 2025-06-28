import Image from "next/image"
import PageHeader from "@/components/page-header"
import { Gavel, Scale, Landmark, ShieldCheck } from "lucide-react"

const courts = [
  {
    name: "Supreme Court of India",
    icon: Landmark,
  },
  {
    name: "Delhi High Court",
    icon: Gavel,
  },
  {
    name: "Bombay High Court",
    icon: Scale,
  },
  {
    name: "Karnataka High Court",
    icon: ShieldCheck,
  },
  {
    name: "Madras High Court",
    icon: Landmark,
  },
  {
    name: "District & Session Courts",
    icon: Gavel,
  },
  {
    name: "Family Courts",
    icon: Scale,
  },
  {
    name: "Consumer Forums & Tribunals",
    icon: ShieldCheck,
  },
]

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Courts We Practice In"
        description="Our firm represents clients in various judicial and quasi-judicial forums across India."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courts.map(({ name, icon: Icon }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-xl border bg-white p-6 text-center shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold">{name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-muted-foreground">
          <p>
            Whether it’s a constitutional matter in the Supreme Court or a family dispute in a district court, our legal team is equipped to represent you at every level of the Indian judiciary.
          </p>
        </div>
      </div>
    </div>
  )
}
