"use client"

import { useState, type JSX } from "react"

interface Experience {
  id: number
  date: string
  name: string
  description: string | JSX.Element
  image: string
}

const experiences: Experience[] = [
  {
    id: 1,
    date: "August 2025",
    name: "GreenBin : Smart Waste Application",
    description: (
      <>
        <b>A smart waste management application</b> focused on organic waste, featuring educational articles, a point-based reward system redeemable for gifts, and integration with IoT smart bins that measure and send the weight of disposed waste to the app.
      </>
    ),
    image: "/greenbin.png",
  },
  {
    id: 1,
    date: "April 2025",
    name: "Christian Wijaya : Luxury Brand Clothes",
    description: (
      <>
        <b>A luxury brand clothing e-commerce platform</b> featuring a curated selection of high-end fashion items and a seamless shopping experience.
      </>
    ),
    image: "/christianwijaya.png",
  },
]

export default function Experience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">My Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A journey through my professional and personal milestones, highlighting the roles, projects, and challenges that shaped my skills and mindset.
          </p>
        </div>


        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((experience) => (
            <div key={experience.id} className="border-b border-gray-200 dark:border-gray-700 pb-12 last:border-b-0">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <img
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.name}
                    className="w-full border aspect-video object-cover rounded-lg cursor-pointer transition-opacity duration-300"
                    onClick={() => openModal(experience.image || "/placeholder.svg")}
                  />
                </div>

                <div className="md:w-2/3">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">{experience.date}</p>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{experience.name}</h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{experience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Project preview"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}
