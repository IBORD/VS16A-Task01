'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log('Dados enviados:', formData)

    alert('Formulário enviado com sucesso!')

    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-blue-50 via-white to-blue-50">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 sm:p-10">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-blue-900 drop-shadow-md">
          Entre em contato
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400
                         focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-600 transition"
              placeholder="Seu nome completo"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400
                         focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-600 transition"
              placeholder="seuemail@exemplo.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400
                         focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-600 transition resize-none"
              placeholder="Escreva sua mensagem aqui..."
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold py-3 rounded-xl
                       hover:bg-blue-800 active:scale-95 transition-transform duration-150"
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  )
}