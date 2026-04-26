import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {
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

  const stats = [
    { number: '20+', label: 'Anni di esperienza' },
    { number: '500+', label: 'Clienti soddisfatti' },
    { number: '95%', label: 'Casi risolti con successo' },
    { number: '24/7', label: 'Supporto disponibile' },
  ]

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-primary-dark">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Lady Justice statue"
                  className="w-full h-96 lg:h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-primary-gold p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-dark">20+</div>
                  <div className="text-sm text-primary-dark font-medium">Anni di esperienza</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary-gold rounded-full opacity-20"></div>
              <div className="absolute top-1/2 -right-6 w-12 h-12 bg-primary-gold/20 rounded-full"></div>
            </div>
          </div>

          {/* Content Column */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Section Label */}
            <div className="flex items-center mb-4">
              <div className="w-12 h-0.5 bg-primary-gold mr-4"></div>
              <span className="text-primary-gold font-medium uppercase tracking-wider text-sm">
                {t('about.label')}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary-light mb-6">
              {t('about.title')}
            </h2>

            {/* Content */}
            <div className="space-y-6 text-primary-gray leading-relaxed">
              <p className="text-lg">{t('about.content')}</p>
              <p>{t('about.content2')}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-4 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="text-3xl font-bold text-primary-gold mb-2">{stat.number}</div>
                  <div className="text-sm text-primary-gray font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mt-10 transition-all duration-1000 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <button
                onClick={() => {
                  const element = document.getElementById('team')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-primary"
              >
                <i className="fas fa-user-tie mr-2"></i>
                Conosci il nostro team
              </button>
              <button className="btn-secondary">
                <i className="fas fa-download mr-2"></i>
                Scarica la brochure
              </button>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div
          className={`mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-award text-primary-gold text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary-light mb-2">
                Eccellenza riconosciuta
              </h3>
              <p className="text-primary-gray">
                Premiati dalle principali associazioni legali italiane
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-primary-gold text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary-light mb-2">
                Approccio personalizzato
              </h3>
              <p className="text-primary-gray">
                Ogni cliente riceve un servizio su misura per le sue esigenze
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-primary-gold text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary-light mb-2">
                Disponibilità totale
              </h3>
              <p className="text-primary-gray">
                Supporto continuo durante tutto il processo legale
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
