import { useState, useEffect } from 'react'
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

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary-dark/95 backdrop-blur-custom shadow-lg'
            : 'bg-primary-dark/50 backdrop-blur-custom'
        }`}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-heading font-bold text-primary-gold">Studio Legale</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              <button
                onClick={() => scrollToSection('home')}
                className="px-3 py-2 text-primary-light hover:text-primary-gold transition-colors font-medium text-sm"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-3 py-2 text-primary-light hover:text-primary-gold transition-colors font-medium text-sm"
              >
                {t('nav.professionals')}
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="px-3 py-2 text-primary-light hover:text-primary-gold transition-colors font-medium text-sm"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-3 py-2 text-primary-light hover:text-primary-gold transition-colors font-medium text-sm"
              >
                {t('nav.areas')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-3 py-2 text-primary-light hover:text-primary-gold transition-colors font-medium text-sm"
              >
                {t('nav.contact')}
              </button>
            </div>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="flex items-center space-x-1 border-l border-primary-gold/20 pl-4">
                <button
                  onClick={() => changeLanguage('it')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    i18n.language === 'it'
                      ? 'bg-primary-gold text-primary-dark'
                      : 'text-primary-gray hover:text-primary-gold'
                  }`}
                >
                  IT
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    i18n.language === 'en'
                      ? 'bg-primary-gold text-primary-dark'
                      : 'text-primary-gray hover:text-primary-gold'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage('ru')}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    i18n.language === 'ru'
                      ? 'bg-primary-gold text-primary-dark'
                      : 'text-primary-gray hover:text-primary-gold'
                  }`}
                >
                  RU
                </button>
              </div>

              {/* CTA Button */}
              <button onClick={() => scrollToSection('contact')} className="btn-primary">
                {t('nav.appointment')}
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center space-x-3 lg:hidden">
              {/* Mobile Language Switcher */}
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => changeLanguage('it')}
                  className={`px-1.5 py-1 rounded text-xs font-medium transition-colors ${
                    i18n.language === 'it'
                      ? 'bg-primary-gold text-primary-dark'
                      : 'text-primary-gray hover:text-primary-gold'
                  }`}
                >
                  IT
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-1.5 py-1 rounded text-xs font-medium transition-colors ${
                    i18n.language === 'en'
                      ? 'bg-primary-gold text-primary-dark'
                      : 'text-primary-gray hover:text-primary-gold'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage('ru')}
                  className={`px-1.5 py-1 rounded text-xs font-medium transition-colors ${
                    i18n.language === 'ru'
                      ? 'bg-primary-gold text-primary-dark'
                      : 'text-primary-gray hover:text-primary-gold'
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
        <div
          className={`lg:hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-primary-dark/95 backdrop-blur-custom border-t border-primary-gold/20`}
        >
          <div className="px-4 py-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-primary-light hover:text-primary-gold hover:bg-primary-gold/10 transition-colors font-medium rounded"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-primary-light hover:text-primary-gold hover:bg-primary-gold/10 transition-colors font-medium rounded"
            >
              {t('nav.professionals')}
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="block w-full text-left px-3 py-2 text-primary-light hover:text-primary-gold hover:bg-primary-gold/10 transition-colors font-medium rounded"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-primary-light hover:text-primary-gold hover:bg-primary-gold/10 transition-colors font-medium rounded"
            >
              {t('nav.areas')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-primary-light hover:text-primary-gold hover:bg-primary-gold/10 transition-colors font-medium rounded"
            >
              {t('nav.contact')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-primary w-full mt-4">
              {t('nav.appointment')}
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
