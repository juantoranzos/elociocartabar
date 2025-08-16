import Image from "next/image"
import Link from "next/link"
import tragos from "@/db/db"
import logo from "@/public/elociologo.jpeg"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black/40 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700/10 to-gray-600/10"></div>
        <div className="relative px-6 py-16 sm:py-24 text-center">
          <div className="mb-8 flex justify-center">
            <Image src={logo} alt='logo ocio' width={220} height={220} className="rounded-full"></Image>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ocio Bar</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto animate-fade-in-delay">
            Tu lugar para compartir momentos únicos
          </p>
        </div>
      </div>

      {/* Menu Section */}
      <div className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">Nuestra Carta de Tragos</h2>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tragos.map((trago, index) => (
            <article
              key={trago.id}
              className="group relative bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-800/50"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "slideInUp 0.6s ease-out forwards",
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={trago.imagen || "/placeholder.svg"}
                  alt={trago.titulo}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300">
                  {trago.titulo}
                </h3>
                <p className="text-gray-400 leading-relaxed line-clamp-3">{trago.descripcion}</p>
                 <p className="text-gray-400 leading-relaxed line-clamp-3">{trago.precio}</p>
                <p className="text-gray-400 leading-relaxed line-clamp-3">{trago.promo}</p>


                {/* Button */}
                <div className="pt-4">
                  <Link
                    href={`/tragos/${trago.id}`}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-gray-800 to-black hover:from-white hover:to-gray-200 text-white hover:text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:shadow-white/25"
                  >
                    <span>Ver Detalles</span>
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-8 w-1 h-1 bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}
