import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Services = () => {
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

  const services = [
    {
      icon: 'fas fa-passport',
      title: t('services.immigration.title'),
      description: t('services.immigration.description'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: 'fas fa-balance-scale',
      title: t('services.civil.title'),
      description: t('services.civil.description'),
      color: 'from-green-500 to-green-600',
    },
    {
      icon: 'fas fa-home',
      title: t('services.real_estate.title'),
      description: t('services.real_estate.description'),
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: 'fas fa-shield-alt',
      title: t('services.liability.title'),
      description: t('services.liability.description'),
      color: 'from-red-500 to-red-600',
    },
  ]

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding section-light"
    >
      <div className="container-max">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary-dark mb-4">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('services.subtitle')}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group card-hover transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="card-white p-8 h-full border border-gray-100 hover:border-primary-gold/30 transition-all duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <i className={`${service.icon} text-white text-2xl`}></i>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-primary-dark mb-4 group-hover:text-primary-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                {/* Learn More Link */}
                <div className="mt-auto">
                  <button className="text-primary-gold hover:text-primary-dark transition-colors duration-300 font-medium group-hover:translate-x-2 transform transition-transform duration-300 flex items-center">
                    Scopri di più
                    <i className="fas fa-arrow-right ml-2 text-sm"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-600 mb-6">
            Non trovi l&apos;area di competenza che stai cercando?
          </p>
          <button className="btn-secondary">
            <i className="fas fa-phone mr-2"></i>
            Contattaci per maggiori informazioni
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
