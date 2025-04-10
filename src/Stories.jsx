import React from 'react'
import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <section className="w-[90vw] max-w-6xl mx-auto mb-20 grid gap-8 md:grid-cols-2">
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story
        return (
          <article
            key={objectID}
            className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-2 leading-snug">{title}</h4>
            <p className="text-sm text-gray-500 mb-4">
              {points} points by <span className="font-medium text-indigo-600">{author}</span> | {num_comments} comments
            </p>
            <div className="flex items-center flex-wrap gap-4">
              <a
                href={url}
                className="text-sm text-indigo-600 font-medium hover:underline hover:text-indigo-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
              <button
                onClick={() => removeStory(objectID)}
                className="text-sm text-red-600 font-medium hover:underline hover:text-red-700 transition-colors"
              >
                Remove
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Stories
