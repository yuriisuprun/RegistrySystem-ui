import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-dark border-b border-primary-gold/20 py-2 hidden md:block">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm text-primary-gray">
            <div className="flex items-center space-x-6">
              <a href="tel:+390612345678" className="flex items-center hover:text-primary-gold transition-colors">
                <i className="fas fa-phone mr-2"></i>
                +39 06 1234567
              </a>
              <a href="mailto:info@studiolegale.it" className="flex items-center hover:text-primary-gold transition-colors">
                <i className="fas fa-envelope mr-2"></i>
                info@studiolegale.it
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => changeLanguage('it')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    i18n.language === 'it' ? 'bg-primary-gold text-primary-dark' : 'hover:text-primary-gold'
                  }`}
                >
                  IT
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    i18n.language === 'en' ? 'bg-primary-gold text-primary-dark' : 'hover:text-primary-gold'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage('ru')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    i18n.language === 'ru' ? 'bg-primary-gold text-primary-dark' : 'hover:text-primary-gold'
                  }`}
                >
                  RU
                </button>
              </div>
              <div className="flex space-x-3">
                <a href="#" className="text-primary-gray hover:text-primary-gold transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-primary-gray hover:text-primary-gold transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-primary-gray hover:text-primary-gold transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-dark/95 backdrop-blur-custom shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-heading font-bold text-primary-gold">
                Studio Legale
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-primary-light hover:text-primary-gold transition-colors font-medium"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-primary-light hover:text-primary-gold transition-colors font-medium"
              >
                {t('nav.professionals')}
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-primary-light hover:text-primary-gold transition-colors font-medium"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-primary-light hover:text-primary-gold transition-colors font-medium"
              >
                {t('nav.areas')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-primary-light hover:text-primary-gold transition-colors font-medium"
              >
                {t('nav.contact')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                {t('nav.appointment')}
              </button>
            </div>

            {/* Mobile Language Switcher */}
            <div className="flex items-center space-x-4 lg:hidden">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => changeLanguage('it')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    i18n.language === 'it' ? 'bg-primary-gold text-primary-dark' : 'text-primary-gray hover:text-primary-gold'
                  }`}
                >
                  IT
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    i18n.language === 'en' ? 'bg-primary-gold text-primary-dark' : 'text-primary-gray hover:text-primary-gold'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage('ru')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    i18n.language === 'ru' ? 'bg-primary-gold text-primary-dark' : 'text-primary-gray hover:text-primary-gold'
                  }`}
                >
                  RU
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary-light hover:text-primary-gold transition-colors"
              >
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-primary-dark/95 backdrop-blur-custom`}>
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-primary-light hover:text-primary-gold transition-colors font-medium py-2"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-primary-light hover:text-primary-gold transition-colors font-medium py-2"
            >
              {t('nav.professionals')}
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="block w-full text-left text-primary-light hover:text-primary-gold transition-colors font-medium py-2"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-primary-light hover:text-primary-gold transition-colors font-medium py-2"
            >
              {t('nav.areas')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-primary-light hover:text-primary-gold transition-colors font-medium py-2"
            >
              {t('nav.contact')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary w-full mt-4"
            >
              {t('nav.appointment')}
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar