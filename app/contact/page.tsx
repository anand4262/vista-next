"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import PageHeader from "@/components/page-header"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import WhatsappButton from "@/components/WhatsappButton"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const WEB3FORMS_API_KEY = "db4b5b63-08ed-4a46-800c-dc780a015076"

    try {
      const formPayload = {
        access_key: WEB3FORMS_API_KEY,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        subject: formData.subject || "New contact form submission",
        message: formData.message,
        from_website: window.location.hostname,
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Message Sent Successfully",
          description: "Thank you for contacting us. We'll get back to you shortly.",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          subject: "",
          message: "",
        })
      } else {
        toast({
          title: "Error",
          description: data.message || "There was an error sending your message. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      })
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="Have a legal question or need representation? Our team is here to help."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg border border-border bg-card p-8">
            <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+91"
                    value={formData.phone}
                    onChange={handleChange}
                    inputMode="numeric"
                    onKeyDown={(e) => {
                      const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"]
                      const isControlKey = allowedKeys.includes(e.key)
                      const isNumber = /^[0-9]$/.test(e.key)
                      const isPlus = e.key === "+" && formData.phone.length === 0
                      if (!isNumber && !isControlKey && !isPlus) {
                        e.preventDefault()
                      }
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Choose Service</Label>
                  <Select value={formData.service} onValueChange={handleServiceChange}>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="criminal-law">Criminal Law</SelectItem>
                      <SelectItem value="civil-law">Civil Law</SelectItem>
                      <SelectItem value="corporate-and-commercial-law">
                        Corporate and Commercial Law
                      </SelectItem>
                      <SelectItem value="litigation-and-dispute-resolution">
                        Litigation and Dispute Resolution
                      </SelectItem>
                      <SelectItem value="legal-documentation-and-advisory">
                        Legal Documentation and Advisory
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Legal Inquiry"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please describe your legal matter..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>

          {/* Contact Info and Map */}
          <div className="flex flex-col justify-between space-y-8">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Our Contact Information</h2>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Office Address</h3>
                    <p className="text-muted-foreground">
                      Office No.4, 2nd Floor, Eshwari Complex, Dr Rajkumar Rd,
                    </p>
                    <p className="text-muted-foreground">
                      Prakash Nagar, Rajajinagar, Bengaluru, Karnataka 560021
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:+918197741693" className="text-muted-foreground hover:underline">
                      +91 8197741693
                    </a>
                    <br />
                    <a href="tel:+919686402901" className="text-muted-foreground hover:underline">
                      +91 9686402901
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:vistalegalassociates@gmail.com"
                      className="text-muted-foreground hover:underline"
                    >
                      vistalegalassociates@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start">
                  <Instagram className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Social Media</h3>
                    <div className="flex space-x-4 mt-1">
                      <a
                        href="https://www.linkedin.com/company/vistalegal"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-white"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.instagram.com/vistalegal"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-white"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[300px] w-full overflow-hidden rounded-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.716481988701!2d77.55614797507675!3d12.98997698732703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d0001721367%3A0x4094641fd1b46226!2sVista%20Legal!5e0!3m2!1sen!2sin!4v1750495432459!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vista Legal Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* WhatsApp Floating Button */}
            <WhatsappButton />
    </div>
  )
}
