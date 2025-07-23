import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full min-h-[600px]">
          <Image
            src="/images/porcelain1.jpg"
            alt="High-quality construction work"
            fill
            priority
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 py-16 text-center w-full max-w-full overflow-visible">
            <h1 className="text-2xl sm:text-4xl font-bold leading-snug break-words w-full max-w-full whitespace-normal">
              Crafting Durable Elegance in Every Surface
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed break-words w-full max-w-full whitespace-normal">
              Acculate Constructions specializes in premium tiles, terrazzo, granite,
              and mosaic installations, transforming spaces with precision and artistry.
            </p>

            <p className="mt-2 text-base sm:text-lg leading-relaxed break-words w-full max-w-full whitespace-normal">
              We are committed to delivering exceptional craftsmanship and durable
              results that stand the test of time.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Link
                href="/products"
                className="w-full sm:w-auto text-center bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition duration-200"
              >
                View Products
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center border border-white text-white py-3 px-6 rounded-lg hover:bg-white/10 transition duration-200"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 sm:px-6 py-12 text-center w-full overflow-visible">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 break-words w-full max-w-full whitespace-normal">
          Welcome to Acculate Constructions
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6 break-words w-full max-w-full whitespace-normal">
          With years of expertise, Acculate Constructions is your trusted partner for
          high-quality surface solutions. We are committed to delivering exceptional
          craftsmanship and durable results.
        </p>
        <Link
          href="/about"
          className="text-primary hover:text-primary/80 text-base underline"
        >
          Learn More About Us
        </Link>
      </section>
    </main>
  );
}
