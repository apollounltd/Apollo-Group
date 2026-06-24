import { motion } from 'framer-motion'
import { Plane, Wheat, Cpu, ArrowRight, Shield, Globe, TrendingUp, Users, Award, CheckCircle, ChevronDown } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SubsidiaryCard from '../components/SubsidiaryCard'
import FadeIn from '../components/FadeIn'
import PageWrapper from '../components/PageWrapper'

const subsidiaries = [
  {
    name: 'Apollo Consult',
    tagline: 'Aviation & Drone Advisory',
    description: 'We help drone operators, corporate organizations, and government agencies design, document, and improve drone operations to the highest regulatory and safety standards.',
    path: '/consult',
    Icon: Plane,
    accentColor: '#3280F0',
    features: [
      'Drone Compliance Reviews',
      'Safety Management Systems',
      'ROC Registration Guidance',
      'IOGP Readiness Assessments',
    ],
  },
  {
    name: 'Apollo Farms',
    tagline: 'Sustainable Agriculture',
    description: 'Precision farming and sustainable agricultural solutions that feed communities and strengthen food systems through technology-driven cultivation and supply chain excellence.',
    path: '/farms',
    Icon: Wheat,
    accentColor: '#4CAF50',
    features: [
      'Precision Crop Management',
      'Agribusiness Advisory',
      'Supply Chain Optimization',
      'Smart Irrigation Systems',
    ],
  },
  {
    name: 'Apollo Technologies',
    tagline: 'Tech Solutions',
    description: 'Innovative software, data, and digital transformation solutions that empower businesses to scale intelligently and compete in the modern economy.',
    path: '/technology',
    Icon: Cpu,
    accentColor: '#C9922A',
    features: [
      'Custom Software Development',
      'Digital Transformation',
      'Data Analytics & AI',
      'Enterprise Integration',
    ],
  },
]

const values = [
  { Icon: Shield, title: 'Safety First', desc: 'Every decision is anchored in rigorous safety standards and risk-based thinking.' },
  { Icon: Award, title: 'Excellence', desc: 'We hold ourselves to aviation-grade quality across all our divisions and engagements.' },
  { Icon: Globe, title: 'Global Thinking', desc: 'We adopt international best practices while remaining deeply rooted in local context.' },
  { Icon: TrendingUp, title: 'Growth-Oriented', desc: 'We build scalable systems that grow with our clients and the industries we serve.' },
]

const stats = [
  { value: '3+', label: 'Subsidiaries', sub: 'Across key sectors' },
  { value: '50+', label: 'Clients Served', sub: 'And growing' },
  { value: '6+', label: 'Countries', sub: 'Global footprint' },
  { value: '100%', label: 'Commitment', sub: 'To excellence' },
]

export default function HomePage() {
  return (
    <PageWrapper>
      <Navbar />



      {/* ─── SUBSIDIARIES ─── */}
      <section id="subsidiaries" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="section-label mb-4">What We Do</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
              Three Companies,<br /><span className="gradient-text">One Vision</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
              Each Apollo subsidiary operates at the frontier of its industry, unified by a shared commitment to safety, excellence, and impact.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subsidiaries.map((s, i) => (
              <SubsidiaryCard key={s.path} {...s} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>


      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 grid-bg opacity-60" />

        {/* Radial glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/50 to-navy-950" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(ellipse, #1E6FE8 0%, transparent 70%)' }}
        />

        {/* Floating orbs */}
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-[10%] w-20 h-20 rounded-2xl border border-electric-600/20 bg-electric-600/5"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/3 right-[8%] w-14 h-14 rounded-xl border border-gold-500/25 bg-gold-500/8"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 right-[15%] w-3 h-3 rounded-full bg-electric-500 opacity-60"
          style={{ boxShadow: '0 0 15px rgba(30, 111, 232, 0.8)' }}
        />
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-1/4 left-[20%] w-2 h-2 rounded-full bg-gold-400 opacity-70"
          style={{ boxShadow: '0 0 12px rgba(201, 146, 42, 0.8)' }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] "
          >
            Excellence
            <br />
            <span className="gradient-text">Across Industries</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-slate-400 text-md md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Apollo Group is a diversified holding company delivering world-class solutions in aviation compliance, sustainable agriculture, and innovative technology across Africa and beyond.
          </motion.p>



          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-navy-800/60"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-bold text-3xl text-white mb-1">{s.value}</div>
                <div className="font-display text-sm text-electric-400 font-semibold">{s.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* ─── WHO WE SERVE ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="section-label mb-4">Our Clients</div>
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Who We Work With
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              We partner with organizations at every stage — from startups to established enterprises across diverse sectors.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: Users, label: 'Government Agencies' },
              { icon: Plane, label: 'Drone Operators' },
              { icon: Wheat, label: 'Agribusinesses' },
              { icon: Cpu, label: 'Tech Companies' },
              { icon: Shield, label: 'Oil & Gas Firms' },
              { icon: Globe, label: 'NGOs & INGOs' },
              { icon: TrendingUp, label: 'Startups & SMEs' },
              { icon: Award, label: 'Industrial Firms' },
              { icon: Users, label: 'Security Companies' },
              { icon: Shield, label: 'Infrastructure Ops' },
            ].map(({ icon: Icon, label }, i) => (
              <FadeIn key={label} delay={i * 0.05}>
                <div className="card-glass rounded-xl p-4 text-center group hover:border-electric-600/30 transition-all duration-300 cursor-default">
                  <Icon size={20} className="text-white group-hover:text-electric-400 transition-colors mx-auto mb-2" />
                  <div className="text-white text-xs font-medium group-hover:text-slate-200 transition-colors">{label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  )
}
