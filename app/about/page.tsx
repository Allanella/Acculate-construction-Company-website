import Image from "next/image"
import { CheckCircle, Lightbulb, Users, Hammer } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="container py-16 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-foreground">About Acculate Constructions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Crafting Durable Elegance in Every Surface. We are dedicated to transforming spaces with precision, quality,
          and artistic vision.
        </p>
      </section>

      {/* Company Background */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-foreground">Our Journey & Expertise</h2>
          <p className="text-lg text-muted-foreground">
            Founded with a vision to redefine surface aesthetics and durability, Acculate Constructions has grown into a
            leading name in the industry. With over a decade of experience, we have successfully completed numerous
            residential, commercial, and industrial projects, earning a reputation for unparalleled craftsmanship and
            client satisfaction.
          </p>
          <p className="text-lg text-muted-foreground">
            Our team comprises highly skilled artisans and technical experts who are passionate about their work. We
            combine traditional techniques with modern innovations to deliver results that are not only visually
            stunning but also built to last.
          </p>
        </div>
        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Acculate Constructions team at work"
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg md:order-2">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Visionary design concept"
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
        </div>
        <div className="space-y-6 md:order-1">
          <h2 className="text-4xl font-bold text-foreground">Our Mission & Vision</h2>
          <div className="flex items-start gap-4">
            <Lightbulb className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold text-foreground">Mission</h3>
              <p className="text-lg text-muted-foreground">
                To deliver superior quality surface solutions that enhance the beauty and functionality of every space,
                ensuring client satisfaction through meticulous craftsmanship and innovative approaches.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold text-foreground">Vision</h3>
              <p className="text-lg text-muted-foreground">
                To be the most trusted and sought-after construction company for premium surface installations,
                recognized for our commitment to excellence, sustainability, and client-centric service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="space-y-8 text-center">
        <h2 className="text-4xl font-bold text-foreground">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 p-6 bg-card rounded-lg shadow-md border border-border">
            <Users className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl font-semibold text-foreground">Integrity</h3>
            <p className="text-muted-foreground">
              We operate with honesty, transparency, and ethical practices in all our dealings.
            </p>
          </div>
          <div className="space-y-4 p-6 bg-card rounded-lg shadow-md border border-border">
            <Hammer className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl font-semibold text-foreground">Excellence</h3>
            <p className="text-muted-foreground">
              We are committed to delivering the highest quality of work and exceeding expectations.
            </p>
          </div>
          <div className="space-y-4 p-6 bg-card rounded-lg shadow-md border border-border">
            <Lightbulb className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl font-semibold text-foreground">Innovation</h3>
            <p className="text-muted-foreground">
              We embrace new techniques and materials to provide cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
