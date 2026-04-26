import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const CTA = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-gold/90 to-yellow-600/90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Legal consultation"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-20">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-30 container-max px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Title */}
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-primary-dark mb-6">
            {t('cta.title')}
          </h2>

          {/* Subtitle */}
          <p
            className={`text-xl lg:text-2xl text-primary-dark/80 mb-10 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {t('cta.subtitle')}
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={scrollToContact}
              className="bg-primary-dark text-primary-gold px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary-dark/90 hover:shadow-2xl hover:scale-105 inline-flex items-center"
            >
              <i className="fas fa-calendar-check mr-3"></i>
              {t('cta.button')}
            </button>
          </div>

          {/* Contact Info */}
          <div
            className={`mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center text-primary-dark">
              <i className="fas fa-phone text-2xl mr-3"></i>
              <div>
                <div className="font-semibold">Chiamaci ora</div>
                <div className="text-lg">+39 06 1234567</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-primary-dark/30"></div>
            <div className="flex items-center text-primary-dark">
              <i className="fas fa-envelope text-2xl mr-3"></i>
              <div>
                <div className="font-semibold">Scrivici</div>
                <div className="text-lg">info@studiolegale.it</div>
              </div>
            </div>
          </div>

          {/* Urgency Indicator */}
          <div
            className={`mt-8 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center bg-primary-dark/20 rounded-full px-6 py-2">
              <i className="fas fa-clock text-primary-dark mr-2"></i>
              <span className="text-primary-dark font-medium">
                Consulenza gratuita entro 24 ore
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
