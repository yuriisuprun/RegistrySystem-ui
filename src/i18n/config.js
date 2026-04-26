import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      nav: {
        home: 'Home',
        professionals: 'Professionisti',
        areas: 'Aree di competenza',
        contact: 'Contatti',
        appointment: 'Fissa un appuntamento'
      },
      hero: {
        title: 'Non sentirti impotente, lottiamo per la giustizia',
        subtitle: 'Studio legale di eccellenza con oltre 20 anni di esperienza nella tutela dei diritti dei nostri clienti',
        cta1: 'Contattateci',
        cta2: 'Fissa un appuntamento'
      },
      services: {
        title: 'Le nostre aree di competenza',
        subtitle: 'Offriamo consulenza legale specializzata in diverse aree del diritto',
        immigration: {
          title: 'Diritto dell\'Immigrazione',
          description: 'Assistenza completa per pratiche di immigrazione, permessi di soggiorno e cittadinanza'
        },
        civil: {
          title: 'Diritto Civile',
          description: 'Consulenza in controversie civili, contratti e diritto di famiglia'
        },
        real_estate: {
          title: 'Diritto Immobiliare',
          description: 'Assistenza legale per compravendite, locazioni e controversie immobiliari'
        },
        liability: {
          title: 'Responsabilità Civile',
          description: 'Tutela dei diritti in caso di danni e responsabilità civile'
        }
      },
      about: {
        label: 'Chi siamo',
        title: 'Studio Legale',
        content: 'Il nostro studio legale rappresenta l\'eccellenza nella consulenza giuridica, combinando tradizione e innovazione per offrire soluzioni legali efficaci. Con un team di avvocati altamente qualificati, ci impegniamo a tutelare i diritti dei nostri clienti con professionalità e dedizione.',
        content2: 'La nostra esperienza pluriennale e la conoscenza approfondita del diritto italiano ci permettono di affrontare anche i casi più complessi con competenza e determinazione.'
      },
      team: {
        title: 'I Nostri Avvocati',
        subtitle: 'Professionisti esperti al vostro servizio con competenze specializzate',
        certifications: 'Certificazioni e Appartenenze',
        lawyer1: {
          name: 'Avv. Marco ',
          title: 'Fondatore e Partner Senior',
          specialization: 'Diritto Civile, Diritto Immobiliare',
          description: 'Oltre 25 anni di esperienza nel diritto civile e immobiliare. Laureato con lode presso l\'Università La Sapienza di Roma, specializzato in controversie complesse e transazioni immobiliari di alto valore.'
        },
        lawyer2: {
          name: 'Avv. Elena Rossi',
          title: 'Partner',
          specialization: 'Diritto dell\'Immigrazione, Diritto Internazionale',
          description: 'Esperta in diritto dell\'immigrazione con focus su cittadinanza italiana e permessi di soggiorno. Fluente in italiano, inglese e russo.'
        },
        lawyer3: {
          name: 'Avv. Giuseppe Bianchi',
          title: 'Avvocato Senior',
          specialization: 'Responsabilità Civile, Diritto Assicurativo',
          description: 'Specialista in responsabilità civile e diritto assicurativo con particolare esperienza in sinistri stradali e responsabilità professionale.'
        },
        lawyer4: {
          name: 'Avv. Francesca Conti',
          title: 'Avvocato',
          specialization: 'Diritto di Famiglia, Diritto Minorile',
          description: 'Giovane professionista specializzata in diritto di famiglia e tutela dei minori, con approccio moderno e sensibile alle dinamiche familiari.'
        }
      },
      cta: {
        title: 'Hai bisogno di assistenza legale?',
        subtitle: 'Contattaci per una consulenza personalizzata',
        button: 'Prenota una consulenza'
      },
      footer: {
        address: 'Via Roma 123, 00100 Roma, Italia',
        phone: '+39 06 1234567',
        email: 'info@studiolegale.it',
        copyright: '© 2024 Studio Legale . Tutti i diritti riservati.'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        professionals: 'Professionals',
        areas: 'Practice Areas',
        contact: 'Contact',
        appointment: 'Book Appointment'
      },
      hero: {
        title: 'Don\'t feel powerless, we fight for justice',
        subtitle: 'Excellence law firm with over 20 years of experience protecting our clients\' rights',
        cta1: 'Contact Us',
        cta2: 'Book Appointment'
      },
      services: {
        title: 'Our Practice Areas',
        subtitle: 'We offer specialized legal consultation in various areas of law',
        immigration: {
          title: 'Immigration Law',
          description: 'Complete assistance for immigration procedures, residence permits and citizenship'
        },
        civil: {
          title: 'Civil Law',
          description: 'Consultation in civil disputes, contracts and family law'
        },
        real_estate: {
          title: 'Real Estate Law',
          description: 'Legal assistance for sales, rentals and real estate disputes'
        },
        liability: {
          title: 'Civil Liability',
          description: 'Protection of rights in case of damages and civil liability'
        }
      },
      about: {
        label: 'About Us',
        title: ' Law Firm',
        content: 'Our law firm represents excellence in legal consultation, combining tradition and innovation to offer effective legal solutions. With a team of highly qualified lawyers, we are committed to protecting our clients\' rights with professionalism and dedication.',
        content2: 'Our years of experience and deep knowledge of Italian law allow us to handle even the most complex cases with competence and determination.'
      },
      team: {
        title: 'Our Lawyers',
        subtitle: 'Expert professionals at your service with specialized expertise',
        certifications: 'Certifications and Memberships',
        lawyer1: {
          name: 'Atty. Marco ',
          title: 'Founder and Senior Partner',
          specialization: 'Civil Law, Real Estate Law',
          description: 'Over 25 years of experience in civil and real estate law. Graduated with honors from La Sapienza University of Rome, specialized in complex disputes and high-value real estate transactions.'
        },
        lawyer2: {
          name: 'Atty. Elena Rossi',
          title: 'Partner',
          specialization: 'Immigration Law, International Law',
          description: 'Expert in immigration law with focus on Italian citizenship and residence permits. Fluent in Italian, English and Russian.'
        },
        lawyer3: {
          name: 'Atty. Giuseppe Bianchi',
          title: 'Senior Attorney',
          specialization: 'Civil Liability, Insurance Law',
          description: 'Specialist in civil liability and insurance law with particular experience in road accidents and professional liability.'
        },
        lawyer4: {
          name: 'Atty. Francesca Conti',
          title: 'Attorney',
          specialization: 'Family Law, Juvenile Law',
          description: 'Young professional specialized in family law and child protection, with a modern and sensitive approach to family dynamics.'
        }
      },
      cta: {
        title: 'Need legal assistance?',
        subtitle: 'Contact us for personalized consultation',
        button: 'Book a consultation'
      },
      footer: {
        address: 'Via Roma 123, 00100 Rome, Italy',
        phone: '+39 06 1234567',
        email: 'info@studiolegale.it',
        copyright: '© 2024  Law Firm. All rights reserved.'
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        professionals: 'Специалисты',
        areas: 'Области права',
        contact: 'Контакты',
        appointment: 'Записаться на прием'
      },
      hero: {
        title: 'Не чувствуйте себя беспомощными, мы боремся за справедливость',
        subtitle: 'Превосходная юридическая фирма с более чем 20-летним опытом защиты прав наших клиентов',
        cta1: 'Связаться с нами',
        cta2: 'Записаться на прием'
      },
      services: {
        title: 'Наши области практики',
        subtitle: 'Мы предлагаем специализированные юридические консультации в различных областях права',
        immigration: {
          title: 'Иммиграционное право',
          description: 'Полная помощь в иммиграционных процедурах, разрешениях на проживание и гражданстве'
        },
        civil: {
          title: 'Гражданское право',
          description: 'Консультации по гражданским спорам, контрактам и семейному праву'
        },
        real_estate: {
          title: 'Недвижимость',
          description: 'Юридическая помощь в продаже, аренде и спорах по недвижимости'
        },
        liability: {
          title: 'Гражданская ответственность',
          description: 'Защита прав в случае ущерба и гражданской ответственности'
        }
      },
      about: {
        label: 'О нас',
        title: 'Юридическая фирма',
        content: 'Наша юридическая фирма представляет совершенство в юридических консультациях, сочетая традиции и инновации для предложения эффективных правовых решений. С командой высококвалифицированных юристов мы стремимся защищать права наших клиентов с профессионализмом и преданностью.',
        content2: 'Наш многолетний опыт и глубокое знание итальянского права позволяют нам справляться даже с самыми сложными делами с компетентностью и решимостью.'
      },
      team: {
        title: 'Наши Юристы',
        subtitle: 'Опытные профессионалы к вашим услугам со специализированной экспертизой',
        certifications: 'Сертификации и Членство',
        lawyer1: {
          name: 'Адв. ...',
          title: 'Основатель и Старший Партнер',
          specialization: 'Гражданское право, Право недвижимости',
          description: 'Более 25 лет опыта в гражданском праве и праве недвижимости. Окончил с отличием Университет Ла Сапиенца в Риме, специализируется на сложных спорах и сделках с недвижимостью высокой стоимости.'
        },
        lawyer2: {
          name: 'Адв. Елена Росси',
          title: 'Партнер',
          specialization: 'Иммиграционное право, Международное право',
          description: 'Эксперт по иммиграционному праву с фокусом на итальянском гражданстве и разрешениях на проживание. Свободно владеет итальянским, английским и русским языками.'
        },
        lawyer3: {
          name: 'Адв. Джузеппе Бьянки',
          title: 'Старший Адвокат',
          specialization: 'Гражданская ответственность, Страховое право',
          description: 'Специалист по гражданской ответственности и страховому праву с особым опытом в дорожных происшествиях и профессиональной ответственности.'
        },
        lawyer4: {
          name: 'Адв. Франческа Конти',
          title: 'Адвокат',
          specialization: 'Семейное право, Ювенальное право',
          description: 'Молодой профессионал, специализирующийся на семейном праве и защите несовершеннолетних, с современным и чутким подходом к семейной динамике.'
        }
      },
      cta: {
        title: 'Нужна юридическая помощь?',
        subtitle: 'Свяжитесь с нами для персональной консультации',
        button: 'Записаться на консультацию'
      },
      footer: {
        address: 'Виа Рома 123, 00100 Рим, Италия',
        phone: '+39 06 1234567',
        email: 'info@studiolegale.it',
        copyright: '© 2024 Юридическая фирма. Все права защищены.'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'it',
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;