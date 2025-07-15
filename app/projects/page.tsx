import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tag } from "lucide-react"

// Placeholder for project data
const projects = [
  {
    id: 1,
    title: "Modern Office Terrazzo Flooring",
    description:
      "Seamless terrazzo installation for a contemporary office space, combining durability with sleek design.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Terrazzo", "Commercial", "Flooring"],
  },
  {
    id: 2,
    title: "Luxury Bathroom Tile Renovation",
    description:
      "Exquisite marble and ceramic tile work for a high-end residential bathroom, featuring intricate patterns.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Tiles", "Residential", "Bathroom"],
  },
  {
    id: 3,
    title: "Outdoor Granite Paving",
    description:
      "Durable granite paving for a large outdoor patio, designed to withstand elements and heavy foot traffic.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Granite", "Outdoor", "Paving"],
  },
  {
    id: 4,
    title: "Custom Mosaic Wall Art",
    description: "A bespoke mosaic mural created for a hotel lobby, adding a unique artistic focal point.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Mosaic", "Commercial", "Art"],
  },
  {
    id: 5,
    title: "Residential Kitchen Tile Backsplash",
    description:
      "Stylish and functional tile backsplash installation for a modern kitchen, enhancing both aesthetics and hygiene.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Tiles", "Residential", "Kitchen"],
  },
  {
    id: 6,
    title: "Commercial Building Facade Cladding",
    description:
      "Large-format granite cladding for a commercial building facade, providing a grand and resilient exterior.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Granite", "Commercial", "Exterior"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="container py-16 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-foreground">Our Projects Gallery</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our portfolio of completed projects, showcasing our expertise in various materials and applications.
        </p>
        {/* Future enhancement: Filterable gallery */}
        <div className="text-sm text-muted-foreground italic">
          (Filtering options by material type or location can be added here in the future.)
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden bg-card border-border shadow-lg">
            <div className="relative h-60 w-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-xl font-semibold text-foreground">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground text-sm line-clamp-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    <Tag className="h-3 w-3" /> {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}
