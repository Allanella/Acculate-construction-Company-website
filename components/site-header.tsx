"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Building, Hammer, ImageIcon, Mail, Users, Star } from "lucide-react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Building className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Acculate Constructions</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <Home className="h-4 w-4" /> Home
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors flex items-center gap-1">
            <Users className="h-4 w-4" /> About Us
          </Link>
          <Link href="/products" className="hover:text-primary transition-colors flex items-center gap-1">
            <Hammer className="h-4 w-4" /> Products
          </Link>
          <Link href="/projects" className="hover:text-primary transition-colors flex items-center gap-1">
            <ImageIcon className="h-4 w-4" /> Projects
          </Link>
          <Link href="/testimonials" className="hover:text-primary transition-colors flex items-center gap-1">
            <Star className="h-4 w-4" /> Testimonials
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors flex items-center gap-1">
            <Mail className="h-4 w-4" /> Contact
          </Link>
        </nav>

        {/* Get a Quote button (Desktop) */}
        <div className="hidden md:block">
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary focus:outline-none"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t px-4 pb-4 space-y-3">
          <Link href="/" className="block py-2 hover:text-primary flex items-center gap-2">
            <Home className="h-4 w-4" /> Home
          </Link>
          <Link href="/about" className="block py-2 hover:text-primary flex items-center gap-2">
            <Users className="h-4 w-4" /> About Us
          </Link>
          <Link href="/products" className="block py-2 hover:text-primary flex items-center gap-2">
            <Hammer className="h-4 w-4" /> Products
          </Link>
          <Link href="/projects" className="block py-2 hover:text-primary flex items-center gap-2">
            <ImageIcon className="h-4 w-4" /> Projects
          </Link>
          <Link href="/testimonials" className="block py-2 hover:text-primary flex items-center gap-2">
            <Star className="h-4 w-4" /> Testimonials
          </Link>
          <Link href="/contact" className="block py-2 hover:text-primary flex items-center gap-2">
            <Mail className="h-4 w-4" /> Contact
          </Link>
          <Button asChild variant="default" className="w-full bg-primary hover:bg-primary/90">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      )}
    </header>
  )
}
