"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import PageHeader from "@/components/page-header"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
          { }
          <div className="rounded-lg border border-border bg-card p-8">
            <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
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
                    placeholder="john@example.com"
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
                      placeholder="+92 300 123 4567"
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
                      <SelectItem value="family-law">Family Law</SelectItem>
                      <SelectItem value="corporate-law">Corporate Law</SelectItem>
                      <SelectItem value="criminal-defense">Criminal Defense</SelectItem>
                      <SelectItem value="estate-planning">Estate Planning</SelectItem>
                      <SelectItem value="personal-injury">Personal Injury</SelectItem>
                      <SelectItem value="immigration-law">Immigration Law</SelectItem>
                      <SelectItem value="employment-law">Employment Law</SelectItem>
                      <SelectItem value="real-estate-law">Real Estate Law</SelectItem>
                      <SelectItem value="intellectual-property">Intellectual Property</SelectItem>
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

          {}
          <div className="flex flex-col justify-between space-y-8">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Our Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Office Address</h3>
                    <p className="text-muted-foreground">123 Justice Avenue, Block F</p>
                    <p className="text-muted-foreground">Lahore, Punjab 54000</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+92 300 123 4567</p>
                    <p className="text-muted-foreground">Toll Free: 0800 12345</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">info@justicelawfirm.pk</p>
                    <p className="text-muted-foreground">support@justicelawfirm.pk</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Office Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM (By appointment)</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
 {/* Map */}
 <div className="h-[300px] w-full overflow-hidden rounded-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108704.15078080388!2d74.24743082321283!3d31.483104525226305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1652285420047!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}
