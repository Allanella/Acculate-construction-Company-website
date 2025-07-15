import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Building, Hammer, ImageIcon, Mail, Users, Star } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Building className="h-6 w-6 text-primary" />
            <span className="inline-block font-bold text-lg">Acculate Constructions</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
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
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
