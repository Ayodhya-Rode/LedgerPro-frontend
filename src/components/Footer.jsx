import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-white text-center py-6 text-sm text-slate-500">
      © {new Date().getFullYear()} Ledger Pro. All rights reserved.
    </footer>
  )
}
