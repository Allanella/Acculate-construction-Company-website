import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

// Placeholder for testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    title: "Homeowner, Residential Project",
    quote:
      "Acculate Constructions exceeded all our expectations! The tile work in our new home is absolutely flawless. Their team was professional, efficient, and incredibly skilled. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "David L.",
    title: "Business Owner, Commercial Renovation",
    quote:
      "We needed a durable and aesthetically pleasing terrazzo floor for our retail space. Acculate Constructions delivered a stunning result on time and within budget. Their attention to detail is commendable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily R.",
    title: "Interior Designer, Custom Project",
    quote:
      "Working with Acculate Constructions on a custom granite installation was a pleasure. Their expertise and collaborative approach ensured our design vision came to life perfectly. True artisans!",
    rating: 5,
  },
  {
    id: 4,
    name: "Mark T.",
    title: "Property Developer, Multi-unit Project",
    quote:
      "For large-scale projects, reliability and quality are key. Acculate Constructions consistently provides both. Their mosaic installations added a unique touch to our latest development.",
    rating: 4,
  },
  {
    id: 5,
    name: "Jessica P.",
    title: "Restaurant Owner, Kitchen Remodel",
    quote:
      "The team at Acculate Constructions was fantastic. They installed our new kitchen tiles quickly and with minimal disruption. The finish is superb and easy to maintain.",
    rating: 5,
  },
  {
    id: 6,
    name: "Chris B.",
    title: "Architect, Public Space Project",
    quote:
      "Their consultancy services were invaluable in selecting the right materials for a high-traffic public area. The installation was executed with precision, and the final product is incredibly robust.",
    rating: 5,
  },
]

export default function TestimonialsPage() {
  return (
    <div className="container py-16 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-foreground">Client Testimonials</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Hear directly from our satisfied clients about their experiences with Acculate Constructions.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="p-6 bg-card border-border shadow-md flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-1 text-primary mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-muted-foreground" />
                ))}
              </div>
              <CardTitle className="text-lg font-semibold text-foreground">{testimonial.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground italic leading-relaxed">&quot;{testimonial.quote}&quot;</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}
