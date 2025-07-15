import Image from "next/image"
import { Tally2Icon as Tiling, Gem, Sparkles, LayoutGrid, Wrench } from "lucide-react" // Assuming Tiling, Gem, Sparkles, LayoutGrid, Wrench are available or similar icons

// Placeholder for product data
const products = [
  {
    name: "Tiles",
    description:
      "A vast selection of high-quality tiles for every application, from elegant ceramic to durable porcelain and natural stone.",
    image: "/placeholder.svg?height=400&width=600",
    icon: Tiling, // Placeholder icon
    details: [
      "Floor Tiles: Durable and stylish options for high-traffic areas.",
      "Wall Tiles: Decorative and protective solutions for interior and exterior walls.",
      "Ceramic & Porcelain: Versatile and low-maintenance choices.",
      "Natural Stone: Luxurious marble, travertine, and slate for a timeless appeal.",
    ],
  },
  {
    name: "Terrazzo",
    description:
      "Custom-designed terrazzo surfaces offering unique patterns and exceptional durability for both modern and classic aesthetics.",
    image: "/placeholder.svg?height=400&width=600",
    icon: Sparkles, // Placeholder icon
    details: [
      "In-situ Terrazzo: Seamless and customizable flooring for large areas.",
      "Precast Terrazzo: Panels and tiles for stairs, countertops, and wall cladding.",
      "Restoration & Polishing: Bringing old terrazzo back to life.",
    ],
  },
  {
    name: "Granite",
    description:
      "Robust and beautiful granite solutions, perfect for countertops, flooring, and architectural features that demand strength and elegance.",
    image: "/placeholder.svg?height=400&width=600",
    icon: Gem, // Placeholder icon
    details: [
      "Kitchen Countertops: Heat and scratch-resistant surfaces.",
      "Bathroom Vanities: Elegant and durable options for wet areas.",
      "Flooring & Cladding: High-strength solutions for commercial and residential spaces.",
    ],
  },
  {
    name: "Mosaic",
    description:
      "Artistic mosaic installations that add a touch of intricate beauty and personalized flair to any space.",
    image: "/placeholder.svg?height=400&width=600",
    icon: LayoutGrid, // Placeholder icon
    details: [
      "Custom Murals: Unique designs for walls, floors, and pools.",
      "Decorative Borders: Enhancing tile layouts with intricate patterns.",
      "Glass & Stone Mosaics: A variety of materials for diverse aesthetic needs.",
    ],
  },
  {
    name: "Installation & Consultancy",
    description:
      "Beyond products, we offer expert installation services and professional consultancy to ensure your project's success from start to finish.",
    image: "/placeholder.svg?height=400&width=600",
    icon: Wrench, // Placeholder icon
    details: [
      "Professional Installation: Skilled craftsmen ensuring precise and durable application.",
      "Site Preparation: Comprehensive assessment and preparation for optimal results.",
      "Design Consultation: Expert advice on material selection, color schemes, and layout.",
      "Project Management: Seamless coordination and execution of your project.",
    ],
  },
]

export default function ProductsPage() {
  return (
    <div className="container py-16 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-foreground">Our Products & Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover our comprehensive range of high-quality materials and expert services designed to bring your vision
          to life.
        </p>
      </section>

      {products.map((product, index) => (
        <section key={product.name} className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`relative h-80 w-full rounded-lg overflow-hidden shadow-lg ${index % 2 === 1 ? "md:order-2" : ""}`}
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
          </div>
          <div className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
            <div className="flex items-center gap-4">
              {product.icon && <product.icon className="h-10 w-10 text-primary" />}
              <h2 className="text-4xl font-bold text-foreground">{product.name}</h2>
            </div>
            <p className="text-lg text-muted-foreground">{product.description}</p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
              {product.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  )
}
