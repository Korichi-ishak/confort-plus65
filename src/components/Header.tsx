import { motion } from 'framer-motion';
import { useState } from 'react';

type FormType = 'consultation' | 'service' | 'job' | 'partnership';

interface HeaderProps {
  openModal: (formType: FormType) => void;
}

const Header = ({ openModal }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mainNavItems: { name: string; href: string; action?: () => void; }[] = [
    { name: 'Accueil', href: '#' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const dropdownItems: { name: string; href?: string; action?: () => void; }[] = [
    { name: 'Avantages concurrentiels', href: '#avantages' },
    { name: 'Offres d\'emploi', action: () => openModal('job') },
    { name: 'Partenariat', action: () => openModal('partnership') }
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white/90 backdrop-blur-lg fixed w-full top-0 z-50 border-b border-gray-100/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                </svg>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl opacity-20 animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Confort Plus65
              </h1>
              <p className="text-xs text-emerald-600 font-medium">Services à domicile depuis 2013</p>
            </div>
          </motion.div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 relative group rounded-lg hover:bg-emerald-50"
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full group-hover:left-0 transition-all duration-300"
                ></motion.div>
              </motion.a>
            ))}
            
            {/* Dropdown Menu */}
            <div className="relative">
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileHover={{ y: -2 }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 relative group rounded-lg bg-white hover:bg-emerald-50 flex items-center space-x-2 border border-gray-200"
              >
                <span>Plus</span>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-4 h-4 border-r-2 border-b-2 border-current transform rotate-45"
                ></motion.div>
                <motion.div
                  className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full group-hover:left-0 transition-all duration-300"
                ></motion.div>
              </motion.button>

              {/* Dropdown Content */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ 
                  opacity: isDropdownOpen ? 1 : 0, 
                  y: isDropdownOpen ? 0 : -10,
                  scale: isDropdownOpen ? 1 : 0.95
                }}
                transition={{ duration: 0.2 }}
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden ${
                  isDropdownOpen ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
              >
                {dropdownItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href || '#'}
                    onClick={(e) => {
                      if (item.action) {
                        e.preventDefault();
                        item.action();
                      }
                      setIsDropdownOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: isDropdownOpen ? 1 : 0, 
                      x: isDropdownOpen ? 0 : -20 
                    }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="block px-6 py-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="font-medium">{item.name}</span>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              onClick={() => openModal('consultation')}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Consultation Gratuite</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100/50 overflow-hidden"
      >
        <div className="px-4 py-6 space-y-4">
          {/* Main navigation items */}
          {mainNavItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href || '#'}
              onClick={(e) => {
                if (item.action) {
                  e.preventDefault();
                  item.action();
                }
                setIsMenuOpen(false);
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-all"
            >
              {item.name}
            </motion.a>
          ))}
          
          {/* Dropdown items in mobile */}
          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-3">
              Plus d'informations
            </div>
            {dropdownItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href || '#'}
                onClick={(e) => {
                  if (item.action) {
                    e.preventDefault();
                    item.action();
                  }
                  setIsMenuOpen(false);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: (mainNavItems.length + index) * 0.1 }}
                className="block px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all items-center space-x-3"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>{item.name}</span>
              </motion.a>
            ))}
          </div>
          
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold mt-6"
          >
            Consultation Gratuite
          </motion.button>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;