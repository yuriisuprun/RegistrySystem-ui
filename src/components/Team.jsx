import React, { useEffect, useRef, useState } from 'react'
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
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      email: 'm.raimondi@studiolegaleraimondi.it',
      credentials: ['Ordine Avvocati Roma dal 1998', 'Cassazionista'],
      featured: true
    },
    {
      id: 'lawyer2',
      name: t('team.lawyer2.name'),
      title: t('team.lawyer2.title'),
      specialization: t('team.lawyer2.specialization'),
      description: t('team.lawyer2.description'),
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      email: 'e.rossi@studiolegaleraimondi.it',
      credentials: ['Ordine Avvocati Roma dal 2010']
    },
    {
      id: 'lawyer3',
      name: t('team.lawyer3.name'),
      title: t('team.lawyer3.title'),
      specialization: t('team.lawyer3.specialization'),
      description: t('team.lawyer3.description'),
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      email: 'g.bianchi@studiolegaleraimondi.it',
      credentials: ['Ordine Avvocati Roma dal 2015']
    },
    {
      id: 'lawyer4',
      name: t('team.lawyer4.name'),
      title: t('team.lawyer4.title'),
      specialization: t('team.lawyer4.specialization'),
      description: t('team.lawyer4.description'),
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      email: 'f.conti@studiolegaleraimondi.it',
      credentials: ['Ordine Avvocati Roma dal 2020']
    }
  ]

  const certifications = [
    { icon: 'fas fa-certificate', text: 'Ordine degli Avvocati di Roma' },
    { icon: 'fas fa-balance-scale', text: 'Camera Civile di Roma' },
    { icon: 'fas fa-globe', text: 'Unione Internazionale Avvocati' },
    { icon: 'fas fa-award', text: 'Certificazione ISO 9001:2015' }
  ]

  return (
    <section id="team" ref={sectionRef} className="section-padding bg-gradient-to-b from-primary-dark to-gray-900">
      <div className="container-max">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary-light mb-4">
            {t('team.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p className="text-lg text-primary-gray max-w-3xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`group card-hover transition-all duration-1000 ${
                member.featured ? 'md:col-span-2 lg:col-span-2' : ''
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 group-hover:border-primary-gold/50 transition-all duration-300">
                {/* Member Image */}
                <div className={`relative overflow-hidden ${member.featured ? 'h-80' : 'h-64'}`}>
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
                </div>

                {/* Member Info */}
                <div className={`p-6 ${member.featured ? 'lg:p-8' : ''}`}>
                  <h3 className="text-xl font-heading font-semibold text-primary-light mb-2 group-hover:text-primary-gold transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary-gold font-medium text-sm uppercase tracking-wide mb-2">
                    {member.title}
                  </p>
                  <p className="text-primary-gray italic text-sm mb-4">
                    {member.specialization}
                  </p>
                  <p className="text-primary-gray text-sm leading-relaxed mb-4">
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
        <div className={`text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-heading font-semibold text-primary-light mb-8">
            {t('team.certifications')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-primary-gold/50 hover:bg-primary-gold/10 transition-all duration-300"
              >
                <i className={`${cert.icon} text-primary-gold text-xl`}></i>
                <span className="text-primary-gray text-sm font-medium">{cert.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team