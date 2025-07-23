import Image from "next/image"
import { CheckCircle, Lightbulb, Users, Hammer } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="max-w-full w-full overflow-x-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-12 space-y-12 break-words">
      {/* Intro */}
      <section className="text-center space-y-3 max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight break-words whitespace-normal">
          About Acculate Constructions
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed break-words whitespace-normal">
          Crafting Durable Elegance in Every Surface. We are dedicated to transforming spaces with precision,
          quality, and artistic vision.
        </p>
      </section>

      {/* Company Background */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-w-0">
        <div className="space-y-4 min-w-0 break-words whitespace-normal max-w-full md:max-w-none">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight break-words whitespace-normal">
            Our Journey & Expertise
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed break-words whitespace-normal">
            Founded with a vision to redefine surface aesthetics and durability, Acculate Constructions has grown into a
            leading name in the industry. With over a decade of experience, we have successfully completed numerous
            residential, commercial, and industrial projects, earning a reputation for unparalleled craftsmanship and
            client satisfaction.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed break-words whitespace-normal">
            Our team comprises highly skilled artisans and technical experts who are passionate about their work. We
            combine traditional techniques with modern innovations to deliver results that are not only visually
            stunning but also built to last.
          </p>
        </div>
        <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg min-w-0">
          <Image
            src="/images/floor1.jpg"
            alt="Acculate Constructions team at work"
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-w-0">
        <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg md:order-2 min-w-0">
          <Image
            src="/images/pool1.jpg"
            alt="Visionary design concept"
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
        </div>
        <div className="space-y-6 md:order-1 min-w-0 break-words whitespace-normal max-w-full md:max-w-none">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight break-words whitespace-normal">
            Our Mission & Vision
          </h2>
          <div className="flex items-start gap-3 sm:gap-4 min-w-0">
            <Lightbulb className="h-5 w-5 sm:h-7 sm:w-7 text-primary flex-shrink-0 mt-1" />
            <div className="min-w-0">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground break-words whitespace-normal">
                Mission
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed break-words whitespace-normal">
                To deliver superior quality surface solutions that enhance the beauty and functionality of every space,
                ensuring client satisfaction through meticulous craftsmanship and innovative approaches.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4 min-w-0">
            <CheckCircle className="h-5 w-5 sm:h-7 sm:w-7 text-primary flex-shrink-0 mt-1" />
            <div className="min-w-0">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground break-words whitespace-normal">
                Vision
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed break-words whitespace-normal">
                To be the most trusted and sought-after construction company for premium surface installations,
                recognized for our commitment to excellence, sustainability, and client-centric service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="space-y-8 text-center break-words whitespace-normal max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight break-words whitespace-normal">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-w-0">
          <div className="space-y-4 p-5 sm:p-6 bg-card rounded-lg shadow-md border border-border min-w-0">
            <Users className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold text-foreground break-words whitespace-normal">
              Integrity
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-words whitespace-normal leading-relaxed">
              We operate with honesty, transparency, and ethical practices in all our dealings.
            </p>
          </div>
          <div className="space-y-4 p-5 sm:p-6 bg-card rounded-lg shadow-md border border-border min-w-0">
            <Hammer className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold text-foreground break-words whitespace-normal">
              Excellence
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-words whitespace-normal leading-relaxed">
              We are committed to delivering the highest quality of work and exceeding expectations.
            </p>
          </div>
          <div className="space-y-4 p-5 sm:p-6 bg-card rounded-lg shadow-md border border-border min-w-0">
            <Lightbulb className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold text-foreground break-words whitespace-normal">
              Innovation
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-words whitespace-normal leading-relaxed">
              We embrace new techniques and materials to provide cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
