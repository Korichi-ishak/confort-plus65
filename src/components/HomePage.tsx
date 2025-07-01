import { motion } from 'framer-motion';
import { useState } from 'react';

const HomePage = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: 'Aide ménagère',
      description: 'Entretien professionnel de votre domicile avec soin et attention aux détails',
      price: '13,99$ CAD/h',
      features: ['Nettoyage complet', 'Lessive et repassage', 'Organisation des espaces'],
      color: 'emerald',
      bgGradient: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Préparation de repas',
      description: 'Repas équilibrés et savoureux adaptés à vos goûts et besoins nutritionnels',
      price: '16,99$ CAD/h',
      features: ['Courses incluses', 'Régimes spéciaux', 'Planification des menus'],
      color: 'green',
      bgGradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Accompagnement',
      description: 'Transport sécurisé et accompagnement pour vos rendez-vous et sorties',
      price: '16,99$ CAD/h',
      features: ['Transport médical', 'Accompagnement sorties', 'Présence rassurante'],
      color: 'teal',
      bgGradient: 'from-teal-500 to-cyan-600'
    },
    {
      title: 'Soins personnels',
      description: 'Aide bienveillante pour l\'hygiène et le bien-être quotidien',
      price: '16,99$ CAD/h',
      features: ['Toilette complète', 'Soins de confort', 'Aide à la mobilité'],
      color: 'cyan',
      bgGradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Courses et commissions',
      description: 'Gestion de vos achats et démarches administratives du quotidien',
      price: '12,99$ CAD/h',
      features: ['Épicerie', 'Pharmacie', 'Démarches administratives'],
      color: 'lime',
      bgGradient: 'from-lime-500 to-green-600'
    }
  ];

  const testimonials = [
    {
      name: 'Marie-Claire L.',
      location: 'Région de Québec',
      text: 'Grâce à Confort Plus65, je peux continuer à vivre chez moi dans le confort et la sécurité. L\'équipe comprend parfaitement mes besoins.',
      rating: 5,
      service: 'Maintien à domicile'
    },
    {
      name: 'Robert D.',
      location: 'Québec',
      text: 'Un service remarquable qui respecte mon rythme de vie. Je me sens en confiance et bien accompagné au quotidien.',
      rating: 5,
      service: 'Services personnalisés'
    },
    {
      name: 'Francine M.',
      location: 'Région de Québec',
      text: 'L\'aide apportée me permet de garder mon autonomie tout en ayant l\'assurance d\'un soutien professionnel. Excellente qualité.',
      rating: 5,
      service: 'Aide aux personnes âgées'
    }
  ];

  const stats = [
    { number: '2013', label: 'Avec vous depuis' },
    { number: '10+', label: 'Années d\'expérience' },
    { number: '5', label: 'Services spécialisés' },
    { number: '100%', label: 'À domicile' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>Consultation gratuite</span>
                  <div className="w-6 h-0.5 bg-white rounded-full"></div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-600 text-gray-300 hover:border-emerald-400 hover:text-emerald-400 px-10 py-5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 text-lg backdrop-blur-sm"
                >
                  <div className="w-4 h-4 border-2 border-current rounded-full"></div>
                  <span>(418) 123-4567</span>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-gray-700"
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
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.3'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                </div>
                
                <div className="relative z-10 text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-8 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-12 h-12 border-4 border-white/60 rounded-full"></div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-6">Services personnalisés</h3>
                  <p className="text-xl opacity-90 leading-relaxed">
                    Adaptés à vos besoins spécifiques et votre rythme de vie
                  </p>
                  
                  <div className="mt-8 flex justify-center space-x-4">
                    <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {/* Floating geometric elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl transform rotate-45"
                ></motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 w-16 h-16 border-2 border-white/30 rounded-full"
                ></motion.div>
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
                <div className={`w-3 h-3 rounded-full mr-3 inline-block ${
                  activeService === index ? 'bg-white/80' : `bg-${service.color}-500`
                }`}></div>
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
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 lg:p-16 shadow-2xl border border-gray-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${services[activeService].bgGradient} rounded-2xl mb-6 flex items-center justify-center`}>
                    <div className="w-8 h-8 bg-white/30 rounded-lg"></div>
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    {services[activeService].title}
                  </h3>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${services[activeService].bgGradient} bg-clip-text text-transparent`}>
                    {services[activeService].price}
                  </div>
                </div>
                
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  {services[activeService].description}
                </p>

                <ul className="space-y-4 mb-10">
                  {services[activeService].features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center text-gray-700 text-lg"
                    >
                      <div className={`w-6 h-6 bg-gradient-to-r ${services[activeService].bgGradient} rounded-full mr-4 flex items-center justify-center`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${services[activeService].bgGradient} text-white px-10 py-5 rounded-2xl font-semibold shadow-xl transition-all duration-300 text-lg`}
                >
                  Demander un devis
                </motion.button>
              </div>

              <div className="relative">
                <div className={`bg-gradient-to-br ${services[activeService].bgGradient} rounded-3xl p-12 text-center text-white relative overflow-hidden`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-8 flex items-center justify-center backdrop-blur-sm">
                      <div className="w-16 h-16 border-4 border-white/60 rounded-2xl flex items-center justify-center">
                        <div className="w-6 h-6 bg-white/80 rounded-full"></div>
                      </div>
                    </div>
                    
                    <h4 className="text-3xl font-bold mb-6">Service personnalisé</h4>
                    <p className="text-xl opacity-90 leading-relaxed">
                      Chaque intervention est adaptée à vos besoins spécifiques et vos préférences personnelles.
                    </p>
                    
                    <div className="mt-10 flex justify-center space-x-3">
                      <div className="w-4 h-4 bg-white/60 rounded-full"></div>
                      <div className="w-4 h-4 bg-white/80 rounded-full"></div>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [-15, 15, -15], rotate: [0, 180, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-3xl transform rotate-45"
                  ></motion.div>
                  
                  <motion.div
                    animate={{ y: [15, -15, 15], rotate: [360, 180, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-6 w-20 h-20 border-2 border-white/30 rounded-full"
                  ></motion.div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Rating dots */}
                <div className="flex justify-center mb-8 space-x-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                    ></motion.div>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-700 text-xl mb-10 text-center leading-relaxed font-medium">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Client Info */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="font-bold text-gray-900 text-xl mb-2">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-lg mb-4">
                    {testimonial.location}
                  </div>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-base font-medium">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    Service: {testimonial.service}
                  </div>
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
                    <div className="w-12 h-12 border-4 border-white/60 rounded-full"></div>
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
                gradient: 'from-emerald-500 to-teal-600'
              },
              {
                title: 'Tarifs transparents',
                description: 'Des prix clairs et compétitifs sans frais cachés. Consultation gratuite pour évaluer vos besoins',
                gradient: 'from-green-500 to-emerald-600'
              },
              {
                title: 'Services personnalisés',
                description: 'Chaque plan de soins est adapté aux besoins spécifiques et au rythme de vie de nos clients',
                gradient: 'from-teal-500 to-cyan-600'
              },
              {
                title: 'Équipe qualifiée',
                description: 'Personnel formé et expérimenté dans l\'aide aux personnes âgées et à mobilité réduite',
                gradient: 'from-cyan-500 to-blue-600'
              },
              {
                title: 'Flexibilité horaire',
                description: 'Services adaptés à vos horaires et disponibilités, 7 jours sur 7',
                gradient: 'from-blue-500 to-indigo-600'
              },
              {
                title: 'Région de Québec',
                description: 'Connaissance approfondie de la région et proximité pour un service réactif',
                gradient: 'from-indigo-500 to-purple-600'
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
                  <div className="w-8 h-8 bg-white/30 rounded-lg"></div>
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
                      <p className="text-gray-600">(418) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-teal-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@confort-plus65.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Zone de service</h4>
                      <p className="text-gray-600">Région de Québec</p>
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
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
                  >
                    Demander une consultation
                  </motion.button>
                  
                  <motion.a
                    href="tel:418-123-4567"
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
                <div className="w-12 h-12 bg-white/30 rounded-full"></div>
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