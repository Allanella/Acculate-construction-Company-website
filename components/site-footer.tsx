import Link from "next/link"
import { Building, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-card py-8">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-primary" />
            <span className="inline-block font-bold text-xl text-foreground">Acculate Constructions</span>
          </Link>
          <p className="text-muted-foreground text-sm">
            Crafting Durable Elegance in Every Surface. Specializing in tiles, terrazzo, granite, and mosaic
            installations.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-primary transition-colors">
                Products & Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-primary transition-colors">
                Projects Gallery
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-primary transition-colors">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>123 Construction Lane, City, Country</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+1 (123) 456-7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>info@acculateconstructions.com</span>
            </li>
          </ul>
          <div className="flex space-x-4 pt-2">
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container text-center text-sm text-muted-foreground mt-8 pt-4 border-t border-muted">
        &copy; {new Date().getFullYear()} Acculate Constructions. All rights reserved.
      </div>
    </footer>
  )
}
