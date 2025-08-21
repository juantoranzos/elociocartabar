"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import tragos from "@/db/db"
import Link from "next/link"

export default function TragoDetail() {
  const { id } = useParams()
  const trago = tragos.find((trago) => trago.id == id)

  if (!trago) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center p-8 bg-black/30 backdrop-blur-md rounded-2xl border border-gray-800/50">
          <h2 className="text-2xl font-bold text-white mb-4">Trago no encontrado</h2>
          <Link
            href="/"
            className="inline-flex items-center bg-gradient-to-r from-gray-800 to-black hover:from-white hover:to-gray-200 text-white hover:text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300"
          >
            Volver al menú
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <div className="mb-8 animate-fade-in">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            <svg
              className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al menú
          </Link>
        </div>

        {/* Content Card */}
        <article className="bg-black/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50 animate-slide-up">
          {/* Header */}
          <div className="p-8 pb-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {trago.titulo}
            </h1>
            <p className="text-gray-400 text-lg">{trago.fecha}</p>
            <p className="text-gray-400 text-lg">{trago.precio}</p>
            <p className="text-gray-400 text-lg">{trago.promo}</p>
          </div>

          {/* Image */}
          <div className="relative h-96 sm:h-[500px] mx-8 mb-8 rounded-xl overflow-hidden">
            <Image
              src={trago.imagen || "/placeholder.svg"}
              alt={trago.titulo}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>

          {/* Description */}
          <div className="p-8 pt-0">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed text-lg">{trago.descripcionLarga}</p>
            </div>

            {/* Action Button */}
            <div className="mt-8 pt-6 border-t border-gray-800/50">
              <button className="w-full sm:w-auto bg-gradient-to-r from-gray-800 to-black hover:from-white hover:to-gray-200 text-white hover:text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/25">
                Ordenar este trago
              </button>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
