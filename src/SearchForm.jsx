import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext()

  return (
    <form 
      className="flex flex-col items-center gap-6 px-4 py-10 bg-gradient-to-r from-indigo-100 via-white to-pink-100 shadow-lg rounded-xl max-w-2xl mx-auto mt-12"
      onSubmit={(e) => e.preventDefault()}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 tracking-wide capitalize">
        search your favouite  <span className="text-pink-600">news</span>
      </h2>
      
      <input
        type="text"
        className="w-full max-w-xl px-6 py-3 text-lg border-2 border-indigo-300 rounded-full shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 transition-all duration-300"
        placeholder="Search breaking news, trends, topics..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchForm
