'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // Honeypot field for spam protection
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check honeypot
    if (formData.honeypot) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          honeypot: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen py-8 section-bg">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Have a project in mind or want to discuss opportunities? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
            <Card className="card-hover">
              <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-3">
                      <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-900 dark:text-neutral-100">Email</h3>
                      <a
                        href="mailto:jmenzies722@gmail.com"
                        className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        jmenzies722@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-3">
                      <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-900 dark:text-neutral-100">Location</h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Babylon, NY
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-3">
                      <Github className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-900 dark:text-neutral-100">GitHub</h3>
                      <a
                        href="https://github.com/jmenzies722"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        github.com/jmenzies722
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-3">
                      <Linkedin className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-900 dark:text-neutral-100">LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/in/josh-m123456/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        linkedin.com/in/josh-m123456
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response Info */}
              <Card className="mt-8">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                    Response Time
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    I typically respond to emails within 24 hours. For urgent matters, 
                    feel free to reach out via LinkedIn.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
            <Card className="card-hover">
              <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field - hidden from users */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
                          style={{ fontSize: '16px' }}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
                          style={{ fontSize: '16px' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
                        style={{ fontSize: '16px' }}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-3 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-base"
                        style={{ fontSize: '16px' }}
                      />
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <p className="text-green-800 dark:text-green-200 text-sm">
                          Thank you! Your message has been sent successfully. I'll get back to you soon.
                        </p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <p className="text-red-800 dark:text-red-200 text-sm">
                          Sorry, there was an error sending your message. Please try again or contact me directly via email.
                        </p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
