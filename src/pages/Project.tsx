"use client"

import { useState, type JSX } from "react"

interface Project {
  id: number
  date: string
  name: string
  description: string | JSX.Element
  image: string
  githubUrl: string
  liveUrl?: string
  isLive: boolean
}

const projects: Project[] = [
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
    githubUrl: "https://github.com/hanifalfaqih/GreenBin-FIT2025",
    isLive: false,
  },
]

export default function Project() {
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
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects I've built, showcasing my skills in web & mobile development, design, and problem-solving.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="border-b border-gray-200 dark:border-gray-700 pb-12 last:border-b-0">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full aspect-video object-cover rounded-lg cursor-pointer transition-opacity duration-300"
                    onClick={() => openModal(project.image || "/placeholder.svg")}
                  />
                </div>

                <div className="md:w-2/3">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">{project.date}</p>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.name}</h3>

                  {project.isLive && (
                    <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Live
                    </div>
                  )}

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300 text-sm font-medium"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
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
