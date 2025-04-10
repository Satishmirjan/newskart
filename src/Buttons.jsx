import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext()

  return (
    <div className="flex items-center justify-center gap-4 mt-8 mb-12">
      <button 
        disabled={isLoading} 
        onClick={() => handlePage('dec')}
        className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      
      <p className="text-lg font-semibold text-gray-700 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
        {page + 1} of {nbPages}
      </p>
      
      <button 
        disabled={isLoading} 
        onClick={() => handlePage('inc')}
        className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  )
}

export default Buttons
