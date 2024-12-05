'use client'

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: false }))
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const newErrors = {
      name: formData.name === '',
      email: formData.email === '',
      message: formData.message === ''
    }

    setErrors(newErrors)

    if (Object.values(newErrors).some(error => error)) {
      setIsSubmitting(false)
      return
    }

    emailjs.sendForm('service_kl0jmhw', 'template_pn0qn46', form.current!, 'HtID1k-JrRkpTcz9A')
      .then((result) => {
        console.log(result.text)
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      }, (error) => {
        console.log(error.text)
        setSubmitStatus('error')
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div id="contact" className="py-10 bg-gray-200 dark:bg-gray-950 border-2 border-solid border-gray-600 rounded m-5">
      <div className="container mx-auto px-4">
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Contact Me</h1>
          <p className="mb-6 text-gray-600 text-xl dark:text-gray-100">Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-300`}
                  placeholder="What's your name?"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">Name is required</p>}
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email / Phone</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-300`}
                  placeholder="How can I reach you?"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">Email/Phone is required</p>}
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={10}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-300`}
                placeholder="Send me any inquiries or questions"
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-500">Message is required</p>}
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
          {submitStatus === 'success' && (
            <p className="mt-4 text-green-600 dark:text-green-400">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-4 text-red-600 dark:text-red-400">Failed to send message. Please try again.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactForm

