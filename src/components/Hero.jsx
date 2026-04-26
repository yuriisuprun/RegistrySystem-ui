import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-primary-dark/90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Legal background"
          className="w-full h-full object-cover parallax-bg"
          loading="lazy"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-gold rounded-full animate-float opacity-60"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-gold rounded-full animate-float opacity-40"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary-gold rounded-full animate-float opacity-50"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-30 container-max px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-primary-light mb-6 leading-tight text-shadow">
            <span className="block">{t('hero.title').split(',')[0]},</span>
            <span className="block text-gradient mt-2">{t('hero.title').split(',')[1]}</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl lg:text-2xl text-primary-gray mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              <i className="fas fa-phone mr-2"></i>
              {t('hero.cta1')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
            >
              <i className="fas fa-calendar-alt mr-2"></i>
              {t('hero.cta2')}
            </button>
          </div>

          {/* Optional Video Play Button */}
          <div
            className={`mt-12 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button className="group flex items-center justify-center mx-auto">
              <div className="w-16 h-16 bg-primary-gold/20 rounded-full flex items-center justify-center group-hover:bg-primary-gold/30 transition-all duration-300 group-hover:scale-110">
                <i className="fas fa-play text-primary-gold text-xl ml-1"></i>
              </div>
            </button>
            <p className="text-primary-gray text-sm mt-2">
              Guarda il nostro video di presentazione
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="animate-bounce">
          <button
            onClick={() => scrollToSection('services')}
            className="text-primary-gold hover:text-primary-light transition-colors"
          >
            <i className="fas fa-chevron-down text-2xl"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
