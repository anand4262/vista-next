import type React from "react"
import Link from "next/link"
import { Scale, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <Scale className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Vista Legal</span>
            </Link>
            <p className="mb-4 max-w-xs text-muted-foreground">
              Dedicated legal professionals committed to protecting your rights and securing your future.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://twitter.com" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/practice-areas">Practice Areas</FooterLink>
              <FooterLink href="/attorneys">Our Attorneys</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Practice Areas</h3>
            <ul className="space-y-2">
              <FooterLink href="/practice-areas#family-law">Family Law</FooterLink>
              <FooterLink href="/practice-areas#corporate-law">Corporate Law</FooterLink>
              <FooterLink href="/practice-areas#criminal-defense">Criminal Defense</FooterLink>
              <FooterLink href="/practice-areas#estate-planning">Estate Planning</FooterLink>
              <FooterLink href="/practice-areas#personal-injury">Personal Injury</FooterLink>
              <FooterLink href="/practice-areas#immigration-law">Immigration Law</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  123 Justice Avenue, Block F
                  <br />
                  Lahore, Punjab 54000
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                <a href="tel:+923001234567" className="text-muted-foreground hover:text-primary">
                  +92 300 123 4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <a href="mailto:info@justicelawfirm.pk" className="text-muted-foreground hover:text-primary">
                  info@justicelawfirm.pk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Vista Legal Firm. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-muted-foreground hover:text-primary">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-white"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-muted-foreground hover:text-primary">
        {children}
      </Link>
    </li>
  )
}
