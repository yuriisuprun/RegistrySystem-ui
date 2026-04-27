import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Team = () => {
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

  const teamMembers = [
    {
      id: 'lawyer1',
      name: t('team.lawyer1.name'),
      title: t('team.lawyer1.title'),
      specialization: t('team.lawyer1.specialization'),
      description: t('team.lawyer1.description'),
      image: null,
      email: 'm.@studiolegale.it',
      credentials: ['Ordine Avvocati Roma dal 1998', 'Cassazionista'],
      featured: true,
    },
    {
      id: 'lawyer2',
      name: t('team.lawyer2.name'),
      title: t('team.lawyer2.title'),
      specialization: t('team.lawyer2.specialization'),
      description: t('team.lawyer2.description'),
      image: null,
      email: 'e.rossi@studiolegale.it',
      credentials: ['Ordine Avvocati Roma dal 2010'],
    },
    {
      id: 'lawyer3',
      name: t('team.lawyer3.name'),
      title: t('team.lawyer3.title'),
      specialization: t('team.lawyer3.specialization'),
      description: t('team.lawyer3.description'),
      image: null,
      email: 'g.bianchi@studiolegale.it',
      credentials: ['Ordine Avvocati Roma dal 2015'],
    },
    {
      id: 'lawyer4',
      name: t('team.lawyer4.name'),
      title: t('team.lawyer4.title'),
      specialization: t('team.lawyer4.specialization'),
      description: t('team.lawyer4.description'),
      image: null,
      email: 'f.conti@studiolegale.it',
      credentials: ['Ordine Avvocati Roma dal 2020'],
    },
  ]

  const certifications = [
    { icon: 'fas fa-certificate', text: 'Ordine degli Avvocati di Roma' },
    { icon: 'fas fa-balance-scale', text: 'Camera Civile di Roma' },
    { icon: 'fas fa-globe', text: 'Unione Internazionale Avvocati' },
    { icon: 'fas fa-award', text: 'Certificazione ISO 9001:2015' },
  ]

  return (
    <section
      id="team"
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
            {t('team.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('team.subtitle')}</p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`group card-hover transition-all duration-1000 ${
                member.featured ? 'md:col-span-2 lg:col-span-2' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="card-white rounded-xl overflow-hidden border border-gray-100 group-hover:border-primary-gold/30 transition-all duration-300">
                {/* Member Image */}
                <div className={`relative overflow-hidden ${member.featured ? 'h-80' : 'h-64'} bg-gray-200 flex items-center justify-center`}>
                  {member.image ? (
                    <>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                          <a
                            href="#"
                            className="w-10 h-10 bg-primary-gold text-primary-dark rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300"
                            aria-label="LinkedIn"
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a
                            href={`mailto:${member.email}`}
                            className="w-10 h-10 bg-primary-gold text-primary-dark rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300"
                            aria-label="Email"
                          >
                            <i className="fas fa-envelope"></i>
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-gray-400">
                      <i className="fas fa-image text-4xl mb-2"></i>
                      <p className="text-sm font-medium">Foto in arrivo</p>
                    </div>
                  )}
                </div>

                {/* Member Info */}
                <div className={`p-6 ${member.featured ? 'lg:p-8' : ''}`}>
                  <h3 className="text-xl font-heading font-semibold text-primary-dark mb-2 group-hover:text-primary-gold transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary-gold font-medium text-sm uppercase tracking-wide mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-600 italic text-sm mb-4">{member.specialization}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>

                  {/* Credentials */}
                  <div className="flex flex-wrap gap-2">
                    {member.credentials.map((credential, credIndex) => (
                      <span
                        key={credIndex}
                        className="bg-primary-gold/20 text-primary-gold px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {credential}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div
          className={`text-center transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-heading font-semibold text-primary-dark mb-8">
            {t('team.certifications')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-gold/50 hover:bg-primary-gold/5 transition-all duration-300"
              >
                <i className={`${cert.icon} text-primary-gold text-xl`}></i>
                <span className="text-gray-600 text-sm font-medium">{cert.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
