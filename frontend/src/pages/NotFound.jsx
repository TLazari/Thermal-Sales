import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h2 className="text-2xl font-bold">404 - Página não encontrada</h2>
      <Link to="/" className="text-blue-500 underline">Voltar para o início</Link>
    </div>
  )
}
