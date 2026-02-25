import React from 'react'

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <h1 className="text-xl font-bold text-blue-600">Ledger Pro</h1>
      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
        Login
      </button>
    </nav>
  )
}
