import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const subsidiaries = [
  {
    name: 'Apollo Consult',
    path: '/consult',
    desc: 'Drone & Aviation Advisory',
    icon: '✦',
  },
  {
    name: 'Apollo Farms',
    path: '/farms',
    desc: 'Sustainable Agriculture',
    icon: '◈',
  },
  {
    name: 'Apollo Technologies',
    path: '/technology',
    desc: 'Tech Solutions',
    icon: '⬡',
  },
]

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Smoothly scrolls to an element whose id matches the hash fragment.
 * Works for both same-page and cross-page navigation.
 */
function scrollToHash(hash: string) {
  if (!hash) return
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const mobileOverlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const mobilePanelVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring', damping: 28, stiffness: 280 },
  },
  exit: {
    x: '100%',
    transition: { type: 'spring', damping: 32, stiffness: 320 },
  },
}

const mobileLinkContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
}

const mobileLinkVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', damping: 22, stiffness: 260 } },
}

const dropdownVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: 6,
    scale: 0.97,
    transition: { duration: 0.15 },
  },
}

const dropdownItemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.18, ease: 'easeOut' },
  }),
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function Logo({ title, subtitle, home }: { title: string; subtitle: string; home: string }) {
  return (
    <Link to={home} className="flex items-center gap-3 group shrink-0">
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-600 to-electric-700 flex items-center justify-center shadow-lg group-hover:shadow-electric-600/40 transition-shadow duration-300">
          <span className="text-white font-display font-bold text-lg">A</span>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gold-500 border-2 border-navy-950" />
      </div>
      <div>
        <div className="font-display font-bold text-white text-lg leading-none">{title}</div>
        <div className="font-body text-slate-400 text-xs tracking-widest uppercase">{subtitle}</div>
      </div>
    </Link>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState(false)
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // ── Scroll listener ──────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ── Body scroll lock while mobile menu is open ───────────────────────────
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = prev }
    }
  }, [mobileOpen])

  // ── Close everything on route change ─────────────────────────────────────
  useEffect(() => {
    setMobileOpen(false)
    setSubOpen(false)
    setMobileSubOpen(false)
  }, [location.pathname])

  // ── Navbar config by route ────────────────────────────────────────────────
  const company = useMemo<NavbarConfig>(() => {
    const p = location.pathname
    const anchorLinks: NavLinkItem[] = [
      { label: 'Home', path: '#home' },
      { label: 'About', path: '#about' },
      { label: 'Services', path: '#services' },
      { label: 'Contact', path: '#contact' },
    ]

    if (p.startsWith('/consult')) {
      return { title: 'Apollo', subtitle: 'Consult', home: '/consult', ctaText: 'Book Consultation', ctaHref: 'mailto:info@apollogroup.com', showSubsidiaries: false, links: anchorLinks }
    }
    if (p.startsWith('/farms')) {
      return { title: 'Apollo', subtitle: 'Farms', home: '/farms', ctaText: 'Partner With Us', ctaHref: 'mailto:info@apollogroup.com', showSubsidiaries: false, links: anchorLinks }
    }
    if (p.startsWith('/technology')) {
      return { title: 'Apollo', subtitle: 'Technologies', home: '/technology', ctaText: 'Get Started', ctaHref: 'mailto:info@apollogroup.com', showSubsidiaries: false, links: anchorLinks }
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

  // ── Link active check ─────────────────────────────────────────────────────
  const isActiveLink = useCallback(
    (path: string) => {
      if (path === '/') return location.pathname === '/'
      return location.pathname === path
    },
    [location.pathname],
  )

  // ── Anchor click handler (same-page smooth scroll OR cross-page nav) ──────
  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
      // Pure hash — scroll on the current page
      if (path.startsWith('#')) {
        e.preventDefault()
        scrollToHash(path)
        setMobileOpen(false)
        return
      }

      // Hash appended to a path — navigate then scroll
      if (path.includes('#')) {
        e.preventDefault()
        const [pagePath, hash] = path.split('#')
        const dest = `${pagePath}#${hash}`
        if (location.pathname === pagePath || (pagePath === '/' && location.pathname === '/')) {
          scrollToHash(`#${hash}`)
        } else {
          navigate(dest)
          // Scroll after the new page mounts
          setTimeout(() => scrollToHash(`#${hash}`), 200)
        }
        setMobileOpen(false)
        return
      }
    },
    [location.pathname, navigate],
  )

  // ── Dropdown hover with debounce so it doesn't flicker ───────────────────
  const handleDropdownEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
    setSubOpen(true)
  }
  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setSubOpen(false), 120)
  }

  // ── Render a single desktop nav item ─────────────────────────────────────
  function DesktopNavLink({ link }: { link: NavLinkItem }) {
    const active = isActiveLink(link.path)
    const isHash = link.path.startsWith('#') || link.path.includes('#')

    const cls = `nav-link text-sm font-medium transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-electric-500 after:transition-all after:duration-300 ${
      active
        ? 'text-white after:w-full'
        : 'text-slate-400 hover:text-white after:w-0 hover:after:w-full'
    }`

    if (isHash) {
      return (
        <a href={link.path} className={cls} onClick={(e) => handleAnchorClick(e, link.path)}>
          {link.label}
        </a>
      )
    }

    return (
      <Link to={link.path} className={cls}>
        {link.label}
      </Link>
    )
  }

  // ── Render a single mobile nav item ──────────────────────────────────────
  function MobileNavLink({ link }: { link: NavLinkItem }) {
    const active = isActiveLink(link.path)
    const isHash = link.path.startsWith('#') || link.path.includes('#')

    const cls = `flex items-center justify-between py-4 text-base font-medium border-b border-navy-800/60 transition-colors duration-200 ${
      active ? 'text-white' : 'text-slate-300 hover:text-white'
    }`

    const inner = (
      <>
        <span>{link.label}</span>
        {active && <span className="w-1.5 h-1.5 rounded-full bg-electric-500" />}
      </>
    )

    if (isHash) {
      return (
        <motion.a
          href={link.path}
          className={cls}
          onClick={(e) => handleAnchorClick(e, link.path)}
          variants={mobileLinkVariants}
        >
          {inner}
        </motion.a>
      )
    }

    return (
      <motion.div variants={mobileLinkVariants}>
        <Link to={link.path} className={cls} onClick={() => setMobileOpen(false)}>
          {inner}
        </Link>
      </motion.div>
    )
  }

  // ── JSX ───────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Nav bar ──────────────────────────────────────────────────────── */}
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
            <Logo title={company.title} subtitle={company.subtitle} home={company.home} />

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8">
              {company.links.map((link) => (
                <DesktopNavLink key={link.label} link={link} />
              ))}

              {/* Subsidiaries dropdown */}
              {company.showSubsidiaries && (
                <div
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className="nav-link flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
                    aria-expanded={subOpen}
                    aria-haspopup="true"
                  >
                    Subsidiaries
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${subOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {subOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72"
                        // Keep hover alive when cursor moves into dropdown
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {/* Arrow pointer */}
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-navy-900 border-l border-t border-navy-700/60" />

                        <div className="relative card-glass rounded-2xl overflow-hidden shadow-2xl border border-navy-700/50 py-2">
                          {/* Subtle top accent */}
                          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/40 to-transparent" />

                          {subsidiaries.map((item, i) => (
                            <motion.div
                              key={item.path}
                              custom={i}
                              variants={dropdownItemVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              <Link
                                to={item.path}
                                className="flex items-start gap-4 px-5 py-3.5 hover:bg-electric-600/10 transition-colors duration-200 group"
                              >
                                <span className="mt-0.5 text-electric-500/60 text-lg leading-none group-hover:text-electric-400 transition-colors shrink-0">
                                  {item.icon}
                                </span>
                                <div className="flex-1 min-w-0">
                                  <div className="font-display font-semibold text-white text-sm group-hover:text-electric-400 transition-colors">
                                    {item.name}
                                  </div>
                                  <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                                </div>
                                <ArrowUpRight
                                  size={13}
                                  className="shrink-0 mt-0.5 text-slate-600 group-hover:text-electric-400 transition-colors"
                                />
                              </Link>
                            </motion.div>
                          ))}

                          {/* Bottom accent */}
                          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/20 to-transparent" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* CTA + hamburger */}
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
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="block"
                    >
                      <X size={22} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="block"
                    >
                      <Menu size={22} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu — full-screen overlay + side panel ───────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Blurred backdrop */}
            <motion.div
              key="mobile-overlay"
              variants={mobileOverlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden fixed inset-0 z-40 bg-navy-950/70 backdrop-blur-md"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in panel */}
            <motion.div
              key="mobile-panel"
              variants={mobilePanelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-navy-950 border-l border-navy-800/70 shadow-2xl flex flex-col"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-navy-800/60 shrink-0">
                <Logo
                  title={company.title}
                  subtitle={company.subtitle}
                  home={company.home}
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable nav area */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {/* Staggered links */}
                <motion.nav
                  variants={mobileLinkContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {company.links.map((link) => (
                    <MobileNavLink key={link.label} link={link} />
                  ))}

                  {/* Subsidiaries section */}
                  {company.showSubsidiaries && (
                    <motion.div variants={mobileLinkVariants} className="mt-2">
                      <button
                        onClick={() => setMobileSubOpen((p) => !p)}
                        className="w-full flex items-center justify-between py-4 text-base font-medium text-slate-300 hover:text-white border-b border-navy-800/60 transition-colors duration-200"
                        aria-expanded={mobileSubOpen}
                      >
                        <span>Subsidiaries</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${mobileSubOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {mobileSubOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="py-1 pl-3 border-b border-navy-800/60">
                              {subsidiaries.map((item, i) => (
                                <motion.div
                                  key={item.path}
                                  initial={{ opacity: 0, x: 12 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.06 }}
                                >
                                  <Link
                                    to={item.path}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 py-3 group"
                                  >
                                    <span className="text-electric-500/60 text-base leading-none group-hover:text-electric-400 transition-colors">
                                      {item.icon}
                                    </span>
                                    <div>
                                      <div className="text-sm font-semibold text-slate-200 group-hover:text-electric-400 transition-colors">
                                        {item.name}
                                      </div>
                                      <div className="text-xs text-slate-500">{item.desc}</div>
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </motion.nav>
              </div>

              {/* CTA pinned to bottom */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3, ease: 'easeOut' }}
                className="px-6 py-6 border-t border-navy-800/60 shrink-0"
              >
                <a
                  href={company.ctaHref}
                  className="btn-primary w-full justify-center text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {company.ctaText}
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
