import React from 'react'
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 text-gray-800">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 tracking-tight mb-4">
            India Wants To Know
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the latest trending stories, stay informed, and take action. 
            Beautifully curated news just for you.
          </p>
        </header>

        <section className="mb-10">
          <SearchForm />
        </section>

        <section className="mb-10">
          <Buttons />
        </section>

       
        <section>
          <Stories />
        </section>
      </div>
    </main>
  )
}

export default App
