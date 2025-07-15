import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Hammer, Star, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/images/hero-background.png"
          alt="High-quality construction work"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground drop-shadow-lg mb-4">
            Crafting Durable Elegance in Every Surface
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8">
            Acculate Constructions specializes in premium tiles, terrazzo, granite, and mosaic installations,
            transforming spaces with precision and artistry.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/products">View Products</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Short Intro / About Preview */}
      <section className="container text-center max-w-4xl space-y-6">
        <h2 className="text-4xl font-bold text-foreground">Welcome to Acculate Constructions</h2>
        <p className="text-lg text-muted-foreground">
          With years of expertise, Acculate Constructions is your trusted partner for high-quality surface solutions. We
          are committed to delivering exceptional craftsmanship and durable results that stand the test of time. Our
          dedication to excellence ensures every project reflects our passion for perfection.
        </p>
        <Button asChild variant="link" className="text-primary hover:text-primary/80">
          <Link href="/about">
            Learn More About Us <span className="sr-only">about Acculate Constructions</span>
          </Link>
        </Button>
      </section>

      {/* Services Preview */}
      <section className="container space-y-8">
        <h2 className="text-4xl font-bold text-center text-foreground">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6 bg-card border-border">
            <CardHeader>
              <Hammer className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl text-foreground">Tile Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                Expert installation of ceramic, porcelain, natural stone, and specialty tiles for floors and walls.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center p-6 bg-card border-border">
            <CardHeader>
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl text-foreground">Terrazzo & Granite</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                Beautiful and durable terrazzo and granite solutions for countertops, flooring, and custom designs.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center p-6 bg-card border-border">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl text-foreground">Consultancy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                Professional guidance on material selection, design, and project planning to achieve your vision.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="text-center pt-4">
          <Button
            asChild
            size="lg"
            variant="default"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/products">Explore All Services</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="container space-y-8">
        <h2 className="text-4xl font-bold text-center text-foreground">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 bg-card border-border">
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-lg italic text-muted-foreground">
                &quot;Acculate Constructions transformed our kitchen with stunning granite countertops. The team was
                professional, efficient, and the quality of work is simply outstanding!&quot;
              </p>
              <p className="font-semibold text-foreground">- Jane Doe, Homeowner</p>
            </CardContent>
          </Card>
          <Card className="p-6 bg-card border-border">
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-lg italic text-muted-foreground">
                &quot;Their expertise in terrazzo flooring for our commercial space was invaluable. The project was
                completed on time and within budget, exceeding our expectations.&quot;
              </p>
              <p className="font-semibold text-foreground">- John Smith, Business Owner</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center pt-4">
          <Button asChild variant="link" className="text-primary hover:text-primary/80">
            <Link href="/testimonials">
              Read More Testimonials <span className="sr-only">from our clients</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="container space-y-8">
        <h2 className="text-4xl font-bold text-center text-foreground">See Our Work in Action</h2>
        <div className="relative w-full h-[500px] bg-card rounded-lg overflow-hidden shadow-lg border border-border">
          <video
            className="w-full h-full object-cover"
            src="/videos/construction-showcase.mp4"
            controls
            loop
            muted
            autoPlay
            playsInline
            aria-label="Acculate Constructions project showcase video"
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"></div>
        </div>
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
          Witness the precision and quality of Acculate Constructions through our project showcase video. From initial
          design to final touches, see how we bring durable elegance to every surface.
        </p>
      </section>
    </div>
  )
}
