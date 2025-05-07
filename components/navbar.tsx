"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Scale, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background"}`}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Scale className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">Justice Law</span>
        </Link>

        <nav className="hidden space-x-6 md:flex">
          <NavLink href="/" active={isActive("/")}>
            Home
          </NavLink>
          <NavLink href="/about" active={isActive("/about")}>
            About
          </NavLink>
          <NavLink href="/practice-areas" active={isActive("/practice-areas")}>
            Practice Areas
          </NavLink>
          <NavLink href="/attorneys" active={isActive("/attorneys")}>
            Attorneys
          </NavLink>
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Contact Us</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 py-4">
                <Link href="/" className="flex items-center space-x-2">
                  <Scale className="h-6 w-6 text-primary" />
                  <span className="text-lg font-bold">Justice Law</span>
                </Link>

                <div className="flex flex-col space-y-3">
                  <MobileNavLink href="/" active={isActive("/")}>
                    Home
                  </MobileNavLink>
                  <MobileNavLink href="/about" active={isActive("/about")}>
                    About
                  </MobileNavLink>
                  <MobileNavLink href="/practice-areas" active={isActive("/practice-areas")}>
                    Practice Areas
                  </MobileNavLink>
                  <MobileNavLink href="/attorneys" active={isActive("/attorneys")}>
                    Attorneys
                  </MobileNavLink>
                </div>

                <Button asChild className="mt-4">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors hover:text-primary ${
        active ? "text-primary" : "text-foreground"
      }`}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`text-lg font-medium transition-colors hover:text-primary ${
        active ? "text-primary" : "text-foreground"
      }`}
    >
      {children}
    </Link>
  )
}
