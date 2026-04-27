import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Handle form submission here
    // TODO: Implement actual form submission logic
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    alert('Grazie per il tuo messaggio! Ti contatteremo presto.')
  }

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" className="bg-gray-900 relative overflow-hidden">
      {/* Contact Form Section */}
      <div className="section-padding border-b border-gray-700">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-heading font-bold text-primary-light mb-8">
                Contattaci
              </h2>
              <p className="text-primary-gray text-lg mb-8">
                Siamo qui per aiutarti. Contattaci per una consulenza gratuita e scopri come
                possiamo risolvere il tuo caso legale.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-gold/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-primary-gold"></i>
                  </div>
                  <div>
                    <h3 className="text-primary-light font-semibold mb-1">Indirizzo</h3>
                    <p className="text-primary-gray">{t('footer.address')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-gold/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-phone text-primary-gold"></i>
                  </div>
                  <div>
                    <h3 className="text-primary-light font-semibold mb-1">Telefono</h3>
                    <a
                      href="tel:+390612345678"
                      className="text-primary-gray hover:text-primary-gold transition-colors"
                    >
                      {t('footer.phone')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-gold/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-envelope text-primary-gold"></i>
                  </div>
                  <div>
                    <h3 className="text-primary-light font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:info@studiolegale.it"
                      className="text-primary-gray hover:text-primary-gold transition-colors"
                    >
                      {t('footer.email')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-gold/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-clock text-primary-gold"></i>
                  </div>
                  <div>
                    <h3 className="text-primary-light font-semibold mb-1">Orari di apertura</h3>
                    <div className="text-primary-gray">
                      <p>Lun - Ven: 9:00 - 18:00</p>
                      <p>Sab: 9:00 - 13:00</p>
                      <p>Dom: Chiuso</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-primary-light font-semibold mb-4">Seguici sui social</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary-gold/20 rounded-lg flex items-center justify-center hover:bg-primary-gold hover:text-primary-dark transition-all duration-300"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary-gold/20 rounded-lg flex items-center justify-center hover:bg-primary-gold hover:text-primary-dark transition-all duration-300"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary-gold/20 rounded-lg flex items-center justify-center hover:bg-primary-gold hover:text-primary-dark transition-all duration-300"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary-gold/20 rounded-lg flex items-center justify-center hover:bg-primary-gold hover:text-primary-dark transition-all duration-300"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-heading font-semibold text-primary-light mb-6">
                  Invia un messaggio
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-primary-gray text-sm font-medium mb-2"
                      >
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-primary-light placeholder-gray-400 focus:outline-none focus:border-primary-gold focus:ring-1 focus:ring-primary-gold transition-colors"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-primary-gray text-sm font-medium mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-primary-light placeholder-gray-400 focus:outline-none focus:border-primary-gold focus:ring-1 focus:ring-primary-gold transition-colors"
                        placeholder="la-tua-email@esempio.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-primary-gray text-sm font-medium mb-2"
                      >
                        Telefono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-primary-light placeholder-gray-400 focus:outline-none focus:border-primary-gold focus:ring-1 focus:ring-primary-gold transition-colors"
                        placeholder="+39 123 456 7890"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-primary-gray text-sm font-medium mb-2"
                      >
                        Oggetto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-primary-light focus:outline-none focus:border-primary-gold focus:ring-1 focus:ring-primary-gold transition-colors"
                      >
                        <option value="">Seleziona un&apos;area</option>
                        <option value="immigration">Diritto dell&apos;Immigrazione</option>
                        <option value="civil">Diritto Civile</option>
                        <option value="real-estate">Diritto Immobiliare</option>
                        <option value="liability">Responsabilità Civile</option>
                        <option value="other">Altro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-primary-gray text-sm font-medium mb-2"
                    >
                      Messaggio *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-primary-light placeholder-gray-400 focus:outline-none focus:border-primary-gold focus:ring-1 focus:ring-primary-gold transition-colors resize-vertical"
                      placeholder="Descrivi brevemente la tua situazione legale..."
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 mr-3 text-primary-gold focus:ring-primary-gold"
                    />
                    <label htmlFor="privacy" className="text-sm text-primary-gray">
                      Accetto il trattamento dei dati personali secondo la{' '}
                      <a href="#" className="text-primary-gold hover:underline">
                        Privacy Policy
                      </a>{' '}
                      e autorizzo l&apos;invio di comunicazioni commerciali.
                    </label>
                  </div>

                  <button type="submit" className="w-full btn-primary text-lg py-4">
                    <i className="fas fa-paper-plane mr-2"></i>
                    Invia messaggio
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-8 border-t border-gray-700">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and Copyright */}
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
              <h3 className="text-xl font-heading font-bold text-primary-gold mb-2 md:mb-0 md:mr-6">
                Studio Legale
              </h3>
              <p className="text-primary-gray text-sm">
                © {new Date().getFullYear()} Studio Legale. Tutti i diritti riservati.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <button
                onClick={() => scrollToSection('home')}
                className="text-primary-gray hover:text-primary-gold transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-primary-gray hover:text-primary-gold transition-colors"
              >
                Chi siamo
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-primary-gray hover:text-primary-gold transition-colors"
              >
                Servizi
              </button>
              <a href="#" className="text-primary-gray hover:text-primary-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-gray hover:text-primary-gold transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-gold text-primary-dark rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </footer>
  )
}

export default Footer
