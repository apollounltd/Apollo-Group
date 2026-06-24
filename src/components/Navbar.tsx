
import { useState, useEffect, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const subsidiaries = [
  {
    name: 'Apollo Consult',
    path: '/consult',
    desc: 'Drone & Aviation Advisory',
  },
  {
    name: 'Apollo Farms',
    path: '/farms',
    desc: 'Sustainable Agriculture',
  },
  {
    name: 'Apollo Technologies',
    path: '/technology',
    desc: 'Tech Solutions',
  },
]

type NavLinkItem = {
  label: string
  path: string
}

type NavbarConfig = {
  title: string
  subtitle: string
  home: string
  ctaText: string
  ctaHref: string
  showSubsidiaries: boolean
  links: NavLinkItem[]
}

export default function Navbar() {
  const location = useLocation()

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSubOpen(false)
  }, [location.pathname])

  const company = useMemo<NavbarConfig>(() => {
    const pathname = location.pathname

    if (pathname.startsWith('/consult')) {
      return {
        title: 'Apollo',
        subtitle: 'Consult',
        home: '/consult',
        ctaText: 'Book Consultation',
        ctaHref: 'mailto:info@apollogroup.com',
        showSubsidiaries: false,
        links: [
          { label: 'Home', path: '/consult' },
          { label: 'About', path: '/consult/about' },
          { label: 'Services', path: '/consult/services' },
          { label: 'Contact', path: '/consult/contact' },
        ],
      }
    }

    if (pathname.startsWith('/farms')) {
      return {
        title: 'Apollo',
        subtitle: 'Farms',
        home: '/farms',
        ctaText: 'Partner With Us',
        ctaHref: 'mailto:info@apollogroup.com',
        showSubsidiaries: false,
        links: [
          { label: 'Home', path: '/farms' },
          { label: 'About', path: '/farms/about' },
          { label: 'Services', path: '/farms/services' },
          { label: 'Contact', path: '/farms/contact' },
        ],
      }
    }

    if (pathname.startsWith('/technology')) {
      return {
        title: 'Apollo',
        subtitle: 'Technologies',
        home: '/technology',
        ctaText: 'Get Started',
        ctaHref: 'mailto:info@apollogroup.com',
        showSubsidiaries: false,
        links: [
          { label: 'Home', path: '/technology' },
          { label: 'About', path: '/technology/about' },
          { label: 'Services', path: '/technology/services' },
          { label: 'Contact', path: '/technology/contact' },
        ],
      }
    }

    return {
      title: 'Apollo',
      subtitle: 'Group',
      home: '/',
      ctaText: 'Get in Touch',
      ctaHref: 'mailto:info@apollogroup.com',
      showSubsidiaries: true,
      links: [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/#about' },
        { label: 'Contact', path: '/#contact' },
      ],
    }
  }, [location.pathname])

  const isActiveLink = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }

    return location.pathname === path
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-xl border-b border-navy-800/60 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={company.home} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-600 to-electric-700 flex items-center justify-center shadow-lg group-hover:shadow-electric-600/40 transition-shadow duration-300">
                <span className="text-white font-display font-bold text-lg">
                  A
                </span>
              </div>

              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gold-500 border-2 border-navy-950" />
            </div>

            <div>
              <div className="font-display font-bold text-white text-lg leading-none">
                {company.title}
              </div>

              <div className="font-body text-slate-400 text-xs tracking-widest uppercase">
                {company.subtitle}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {company.links.map((link) => {
              const active = isActiveLink(link.path)

              if (link.path.startsWith('/#')) {
                return (
                  <a
                    key={link.label}
                    href={link.path}
                    className={`nav-link ${active ? 'text-white' : ''}`}
                  >
                    {link.label}
                  </a>
                )
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${active ? 'text-white' : ''}`}
                >
                  {link.label}
                </Link>
              )
            })}

            {company.showSubsidiaries && (
              <div
                className="relative"
                onMouseEnter={() => setSubOpen(true)}
                onMouseLeave={() => setSubOpen(false)}
              >
                <button className="nav-link flex items-center gap-1">
                  Subsidiaries

                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      subOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {subOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 card-glass rounded-2xl py-2 shadow-2xl"
                    >
                      {subsidiaries.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-5 py-3 hover:bg-electric-600/10 transition-colors duration-200 group"
                        >
                          <div className="font-display font-semibold text-white text-sm group-hover:text-electric-400 transition-colors">
                            {item.name}
                          </div>

                          <div className="text-xs text-slate-400 mt-0.5">
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={company.ctaHref}
              className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
            >
              {company.ctaText}
            </a>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-navy-950/98 backdrop-blur-xl border-t border-navy-800"
          >
            <div className="px-6 py-6 space-y-1">
              {company.links.map((link) => {
                if (link.path.startsWith('/#')) {
                  return (
                    <a
                      key={link.label}
                      href={link.path}
                      className="block py-3 text-slate-300 hover:text-white transition-colors border-b border-navy-800"
                    >
                      {link.label}
                    </a>
                  )
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-3 border-b border-navy-800 transition-colors ${
                      isActiveLink(link.path)
                        ? 'text-white font-medium'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}

              {company.showSubsidiaries && (
                <div className="py-2 border-b border-navy-800">
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-3 pt-1">
                    Subsidiaries
                  </div>

                  {subsidiaries.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block py-2.5 text-slate-300 hover:text-electric-400 font-medium transition-colors pl-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              <div className="pt-4">
                <a
                  href={company.ctaHref}
                  className="btn-primary w-full justify-center text-sm"
                >
                  {company.ctaText}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

