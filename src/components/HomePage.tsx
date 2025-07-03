import { motion } from 'framer-motion';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Award, Tags, SlidersHorizontal, Users, Clock, MapPin, HeartHandshake, Briefcase } from 'lucide-react';

type FormType = 'consultation' | 'service' | 'job' | 'partnership';

interface HomePageProps {
  openModal: (formType: FormType, serviceName?: string) => void;
}

const HomePage = ({ openModal }: HomePageProps) => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: 'Aide ménagère',
      description: 'Entretien professionnel de votre domicile avec soin et attention aux détails',
      price: '13,99$ /h',
      features: ['Nettoyage complet', 'Lessive et repassage', 'Organisation des espaces'],
      color: 'emerald',
      bgGradient: 'from-emerald-500 to-teal-600',
      imageUrl: '/images/aide-menagere.jpg'
    },
    {
      title: 'Préparation de repas',
      description: 'Repas équilibrés et savoureux adaptés à vos goûts et besoins nutritionnels',
      price: '16,99$ /h',
      features: ['Courses incluses', 'Régimes spéciaux', 'Planification des menus'],
      color: 'green',
      bgGradient: 'from-green-500 to-emerald-600',
      imageUrl: '/images/preparation-repas-senior.jpg'
    },
    {
      title: 'Accompagnement',
      description: 'Transport sécurisé et accompagnement pour vos rendez-vous et sorties',
      price: '16,99$ /h',
      features: ['Transport médical', 'Accompagnement sorties', 'Présence rassurante'],
      color: 'teal',
      bgGradient: 'from-teal-500 to-cyan-600',
      imageUrl: '/images/aide-a-la-marche-senior.jpg'
    },
    {
      title: 'Soins personnels',
      description: 'Aide bienveillante pour l\'hygiène et le bien-être quotidien',
      price: '16,99$ /h',
      features: ['Toilette complète', 'Soins de confort', 'Aide à la mobilité'],
      color: 'cyan',
      bgGradient: 'from-cyan-500 to-blue-600',
      imageUrl: '/images/lecture-personne-agee.jpg'
    },
    {
      title: 'Courses et commissions',
      description: 'Gestion de vos achats et démarches administratives du quotidien',
      price: '12,99$ /h',
      features: ['Épicerie', 'Pharmacie', 'Démarches administratives'],
      color: 'lime',
      bgGradient: 'from-lime-500 to-green-600',
      imageUrl: '/images/aide-aux-courses-personne-agee.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Marie-Claire L.',
      location: 'Région de Québec',
      text: 'Grâce à Confort Plus65, je peux continuer à vivre chez moi dans le confort et la sécurité. L\'équipe comprend parfaitement mes besoins.',
      rating: 5,
      service: 'Maintien à domicile',
      photoUrl: '/images/femme.jpg'
    },
    {
      name: 'Robert D.',
      location: 'Québec',
      text: 'Un service remarquable qui respecte mon rythme de vie. Je me sens en confiance et bien accompagné au quotidien.',
      rating: 5,
      service: 'Services personnalisés',
      photoUrl: '/images/homme.jpg'
    },
    {
      name: 'Francine M.',
      location: 'Région de Québec',
      text: 'L\'aide apportée me permet de garder mon autonomie tout en ayant l\'assurance d\'un soutien professionnel. Excellente qualité.',
      rating: 5,
      service: 'Aide aux personnes âgées',
      photoUrl: '/images/femme2.jpg'
    }
  ];

  const stats = [
    { number: '2013', label: 'Avec vous depuis' },
    { number: '10+', label: 'Années d\'expérience' },
    { number: '5', label: 'Services spécialisés' },
    { number: '100%', label: 'À domicile' }
  ];

  return (
    <div className="min-h-screen bg-gray-900">

      {/* Hero Section */}
      <section id="accueil" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white overflow-hidden min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative w-full px-6 lg:px-16 xl:px-24 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-emerald-600/20 text-emerald-300 rounded-full text-base font-medium backdrop-blur-sm border border-emerald-500/30"
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                Services à domicile depuis 2013
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-6xl font-bold leading-tight"
              >
                Restez chez vous
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  en tout confort
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                Votre choix est de rester dans le confort de votre domicile ? Nous pouvons vous aider.
                <br />
                <span className="text-emerald-300 font-semibold">Avec vous depuis 2013. Merci pour la confiance.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  onClick={() => openModal('consultation')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>Consultation gratuite</span>
                  <div className="w-6 h-0.5 bg-white rounded-full"></div>
                </motion.button>

                <motion.a
                  href="tel:5142228271"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-10 py-5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
                >
                  <div className="w-4 h-4 border-2 border-current rounded-full"></div>
                  <span>514 222 8271</span>
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8"
              >
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      className="text-2xl lg:text-3xl font-bold text-emerald-400"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-3xl shadow-2xl overflow-hidden">
                <Carousel
                  autoPlay
                  infiniteLoop
                  showThumbs={false}
                  showStatus={false}
                  interval={3000}
                  className="hero-carousel"
                >
                  <div>
                    <img src="/images/carousel1.jpg" alt="Soins à domicile pour personnes âgées" style={{height: '400px', width: '100%', objectFit: 'cover', borderRadius: '1.5rem'}} />
                  </div>
                  <div>
                    <img src="/images/carousel2.jpg" alt="Accompagnement et soutien pour seniors" style={{height: '400px', width: '100%', objectFit: 'cover', borderRadius: '1.5rem'}} />
                  </div>
                  <div>
                    <img src="/images/carousel3.jpg" alt="Aide et confort pour le maintien à domicile" style={{height: '400px', width: '100%', objectFit: 'cover', borderRadius: '1.5rem'}} />
                  </div>
                </Carousel>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Nos services & tarifs
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Des services professionnels à domicile avec des tarifs transparents et compétitifs
            </p>
          </motion.div>

          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {services.map((service, index) => (
              <motion.button
                key={service.title}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveService(index)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 text-lg ${
                  activeService === index
                    ? `bg-gradient-to-r ${service.bgGradient} text-white shadow-xl`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {activeService === index && (
                  <div className="w-3 h-3 rounded-full mr-3 inline-block bg-white/80 animate-pulse"></div>
                )}
                {service.title}
              </motion.button>
            ))}
          </div>

          {/* Active Service Detail */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl p-10 lg:p-16 max-w-6xl mx-auto border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className={`text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${services[activeService].bgGradient}`}
                >
                  {services[activeService].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-xl text-gray-600 mb-8"
                >
                  {services[activeService].description}
                </motion.p>
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
                  }}
                  className="space-y-4 mb-8"
                >
                  {services[activeService].features.map((feature) => (
                    <motion.li
                      key={feature}
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: { y: 0, opacity: 1 }
                      }}
                      className="flex items-center text-lg"
                    >
                      <div className={`w-6 h-6 rounded-full mr-4 flex-shrink-0 bg-gradient-to-r ${services[activeService].bgGradient} flex items-center justify-center`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span className="text-gray-800">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div className="text-center md:text-left">
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <img src={services[activeService].imageUrl} alt={services[activeService].title} style={{objectFit: 'cover', width: '100%', height: '300px', borderRadius: '1.5rem'}} />
                </motion.div>
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className={`inline-block p-6 rounded-2xl bg-gradient-to-br ${services[activeService].bgGradient} shadow-lg text-white text-center`}
                  >
                    <p className="text-xl font-medium">À partir de</p>
                    <p className="text-5xl font-bold">{services[activeService].price.split('/')[0]}</p>
                    <p className="text-xl font-medium">/h</p>
                  </motion.div>
                  <motion.button
                    onClick={() => openModal('service', services[activeService].title)}
                   className="bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-900 w-full md:w-auto flex-grow"
                  >
                    Planifier ce service
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gray-50">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Ce que disent nos clients
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez les témoignages authentiques de familles qui nous font confiance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 flex flex-col items-center text-center"
              >
                <img 
                  src={testimonial.photoUrl} 
                  alt={testimonial.name} 
                  className="w-24 h-24 rounded-full mb-6 object-cover shadow-md border-4 border-white"
                />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.367-2.448a1 1 0 00-1.176 0l-3.367 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-gray-700 italic mb-6">"{testimonial.text}"</p>
                <div className="mt-auto">
                  <p className="font-bold text-lg text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.location}</p>
                  <p className="text-sm text-emerald-600 font-semibold mt-2">{testimonial.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos Section */}
      <section id="apropos" className="py-32 bg-white">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              À propos de Confort Plus65
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Avec vous depuis 2013. Merci pour la confiance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-8 flex items-center justify-center backdrop-blur-sm">
                    <HeartHandshake className="w-12 h-12 text-white/80" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6">Notre Mission</h3>
                  <p className="text-xl leading-relaxed">
                    Permettre aux personnes âgées de rester dans le confort de leur domicile en leur offrant des services personnalisés et bienveillants.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Depuis 2013, Confort Plus65 accompagne les familles de la région de Québec dans leur souhait de maintenir leurs proches à domicile. Notre approche humaine et professionnelle nous a permis de bâtir une relation de confiance durable avec nos clients.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Nous comprenons que chaque personne est unique, c'est pourquoi nous adaptons nos services aux besoins spécifiques de chacun, dans le respect de leur rythme de vie et de leurs habitudes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">10+</div>
                  <div className="text-gray-700">Années d'expérience</div>
                </div>
                <div className="bg-teal-50 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">2013</div>
                  <div className="text-gray-700">Année de création</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avantages concurrentiels Section */}
      <section id="avantages" className="py-32 bg-gray-50">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Nos avantages concurrentiels
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ce qui nous distingue dans le domaine des services à domicile
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {[
              {
                title: 'Expérience depuis 2013',
                description: 'Plus de 10 ans d\'expertise dans l\'accompagnement des personnes âgées à domicile',
                gradient: 'from-emerald-500 to-teal-600',
                icon: Award
              },
              {
                title: 'Tarifs transparents',
                description: 'Des prix clairs et compétitifs sans frais cachés. Consultation gratuite pour évaluer vos besoins',
                gradient: 'from-green-500 to-emerald-600',
                icon: Tags
              },
              {
                title: 'Services personnalisés',
                description: 'Chaque plan de soins est adapté aux besoins spécifiques et au rythme de vie de nos clients',
                gradient: 'from-teal-500 to-cyan-600',
                icon: SlidersHorizontal
              },
              {
                title: 'Équipe qualifiée',
                description: 'Personnel formé et expérimenté dans l\'aide aux personnes âgées et à mobilité réduite',
                gradient: 'from-cyan-500 to-blue-600',
                icon: Users
              },
              {
                title: 'Flexibilité horaire',
                description: 'Services adaptés à vos horaires et disponibilités, 7 jours sur 7',
                gradient: 'from-blue-500 to-indigo-600',
                icon: Clock
              },
              {
                title: 'Région de Québec',
                description: 'Connaissance approfondie de la région et proximité pour un service réactif',
                gradient: 'from-indigo-500 to-purple-600',
                icon: MapPin
              }
            ].map((avantage, index) => (
              <motion.div
                key={avantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${avantage.gradient} rounded-2xl mb-6 flex items-center justify-center`}>
                  <avantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{avantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{avantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Contactez-nous
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Prêt à commencer ? Contactez-nous pour une consultation gratuite
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Informations de contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Téléphone</h4>
                      <p className="text-gray-600">514 222 8271</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-teal-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fax</h4>
                      <p className="text-gray-600">514 222-8271</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">confortplus65@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Adresse</h4>
                      <p className="text-gray-600">3242, Avenue Gonthier.Suite A<br />Montréal.Qc. H1L 6J9</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Site web</h4>
                      <p className="text-gray-600">www.confort-plus65.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 text-white text-center">
                <h3 className="text-3xl font-bold mb-8">Consultation gratuite</h3>
                <p className="text-xl mb-8 opacity-90">
                  Contactez-nous aujourd'hui pour une évaluation personnalisée de vos besoins. Notre équipe vous accompagnera dans la mise en place des services adaptés.
                </p>
                
                <div className="flex flex-col gap-6">
                  <motion.button
                    onClick={() => openModal('consultation')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
                  >
                    Demander une consultation
                  </motion.button>
                  
                  <motion.a
                    href="tel:5142228271"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-emerald-600"
                  >
                    Appeler maintenant
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emploi Section */}
      <section id="emploi" className="py-32 bg-gray-50">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Offres d'emploi
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Rejoignez notre équipe et participez à notre mission d'aide aux personnes âgées
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-12 shadow-xl text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mx-auto mb-8 flex items-center justify-center">
                <Briefcase className="w-12 h-12 text-white/80" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Nous recrutons des professionnels passionnés
              </h3>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Vous souhaitez faire une différence dans la vie des personnes âgées ? Confort Plus65 recherche des professionnels bienveillants et expérimentés pour rejoindre notre équipe dans la région de Québec.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Ce que nous offrons</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Environnement de travail bienveillant</li>
                    <li>• Formation continue</li>
                    <li>• Horaires flexibles</li>
                    <li>• Équipe solidaire</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Profils recherchés</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Aide à domicile</li>
                    <li>• Personnel soignant</li>
                    <li>• Accompagnateurs</li>
                    <li>• Auxiliaires de vie</li>
                  </ul>
                </div>
              </div>

              <motion.button
                onClick={() => openModal('job')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300"
              >
                Postuler maintenant
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partenariat Section */}
      <section id="partenariat" className="py-32 bg-white">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Offres de partenariat
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Collaborons ensemble pour mieux servir nos communautés
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Partenaires recherchés
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Nous cherchons à développer des partenariats stratégiques avec des organisations qui partagent nos valeurs d'excellence et de bienveillance envers les personnes âgées.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  'Établissements de santé',
                  'Cliniques médicales', 
                  'Pharmacies',
                  'Organismes communautaires',
                  'Résidences pour aînés',
                  'Professionnels de la santé'
                ].map((partenaire, index) => (
                  <motion.div
                    key={partenaire}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
                    <span className="text-gray-700 text-lg">{partenaire}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-8">Avantages du partenariat</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Réseau étendu</h4>
                      <p className="opacity-90">Accès à notre réseau de clients et partenaires établis</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Expertise partagée</h4>
                      <p className="opacity-90">Échange de connaissances et de meilleures pratiques</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Croissance mutuelle</h4>
                      <p className="opacity-90">Développement conjoint de nouveaux services</p>
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={() => openModal('partnership')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-teal-600 px-8 py-4 rounded-2xl font-semibold text-lg mt-8 w-full transition-all duration-300"
                >
                  Discuter d'un partenariat
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;