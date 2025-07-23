"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ContactUsPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here (e.g., send to an API endpoint)
    console.log("Form submitted!")
    alert("Thank you for your message! We will get back to you soon.")
    e.currentTarget.reset() // Reset form after submission
  }

  return (
    <div className="container py-16 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-foreground">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We&apos;d love to hear from you! Whether you have a question about our services, need a quote, or just want to
          say hello, feel free to reach out.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-8 p-8 bg-card rounded-lg shadow-lg border border-border">
          <h2 className="text-3xl font-bold text-foreground">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-foreground">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                required
                className="bg-muted border-border text-foreground"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@example.com"
                required
                className="bg-muted border-border text-foreground"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject" className="text-foreground">
                Subject
              </Label>
              <Input
                id="subject"
                type="text"
                placeholder="Project Inquiry"
                required
                className="bg-muted border-border text-foreground"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message" className="text-foreground">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project or question..."
                rows={5}
                required
                className="bg-muted border-border text-foreground"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8 p-8 bg-card rounded-lg shadow-lg border border-border">
          <h2 className="text-3xl font-bold text-foreground">Our Details</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">Address</h3>
                <p className="text-muted-foreground">123 Construction Lane, Suite 100, City, Country, 12345</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">Phone</h3>
                <p className="text-muted-foreground">+256 700966715</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">Email</h3>
                <p className="text-muted-foreground">info@acculateconstructions.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Follow Us</h3>
            <div className="flex space-x-6">
              <Link
                href="#"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-8 w-8" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-8 w-8" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-8 w-8" />
              </Link>
            </div>
          </div>

          {/* Google Maps Placeholder */}
          <div className="w-full h-64 bg-muted rounded-lg overflow-hidden flex items-center justify-center text-muted-foreground text-center">
            <p>Google Maps Location Placeholder</p>
            {/* You can embed a real Google Map here using an iframe or a React map library */}
          </div>
        </div>
      </section>
    </div>
  )
}
