import { motion } from 'framer-motion'
import {
  Wheat, Droplets, BarChart3, Leaf, Sun, Truck, Users, Globe,
  ArrowRight, ChevronDown, ArrowLeft, CheckCircle, TrendingUp
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'
import PageWrapper from '../components/PageWrapper'

const services = [
  {
    Icon: BarChart3,
    title: 'Precision Crop Management',
    desc: 'Data-driven cultivation planning using soil analysis, satellite imagery, and IoT sensors to optimize yields and minimize waste.',
    color: '#4CAF50',
  },
  {
    Icon: Droplets,
    title: 'Smart Irrigation Systems',
    desc: 'Automated, water-efficient irrigation solutions that deliver the right amount of water at the right time, reducing costs and environmental impact.',
    color: '#2196F3',
  },
  {
    Icon: Leaf,
    title: 'Sustainable Agribusiness Advisory',
    desc: 'Strategic guidance for agribusinesses looking to scale sustainably — from business planning and financing to certification and market access.',
    color: '#8BC34A',
  },
  {
    Icon: Truck,
    title: 'Supply Chain Optimization',
    desc: 'End-to-end supply chain solutions from farm gate to final consumer, reducing post-harvest losses and improving profitability.',
    color: '#FF9800',
  },
  {
    Icon: Sun,
    title: 'Renewable Farm Energy',
    desc: 'Solar and hybrid energy solutions for farms, reducing operational costs and enabling year-round productivity independent of the national grid.',
    color: '#FFC107',
  },
  {
    Icon: Users,
    title: 'Farmer Capacity Building',
    desc: 'Practical training programs for farmers, cooperatives, and agri-entrepreneurs on modern farming techniques and business management.',
    color: '#9C27B0',
  },
]

const impactStats = [
  { value: '500+', label: 'Hectares Managed', icon: Leaf },
  { value: '30%', label: 'Avg Yield Increase', icon: TrendingUp },
  { value: '40%', label: 'Water Savings', icon: Droplets },
  { value: '15+', label: 'Crop Varieties', icon: Wheat },
]

const crops = [
  'Maize & Corn', 'Rice', 'Cassava', 'Soybean',
  'Tomatoes', 'Peppers', 'Cocoa', 'Plantain',
]

export default function FarmsPage() {
  return (
    <PageWrapper>
      <Navbar />

      {/* ─── HERO ─── */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950" />

        {/* Green glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-12 blur-[100px]"
          style={{ background: 'radial-gradient(ellipse, #4CAF50 0%, transparent 70%)' }}
        />

        {/* Floating botanics */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 right-1/4 opacity-8"
        >
          <Leaf size={100} className="text-green-500" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors">
              <ArrowLeft size={16} /> Apollo Group
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm"
            style={{ background: 'rgba(76, 175, 80, 0.1)', border: '1px solid rgba(76, 175, 80, 0.25)' }}
          >
            <div className="w-2 h-2 rounded-full bg-green-500" style={{ boxShadow: '0 0 8px rgba(76, 175, 80, 0.8)' }} />
            <span className="text-slate-300">Sustainable Agriculture</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display font-bold text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            Apollo
            <br />
            <span
              className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent"
            >
              Farms
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="text-xl md:text-2xl text-slate-300 mb-4 font-display"
          >
            Feeding Tomorrow Through Precision Agriculture
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed text-lg"
          >
            Apollo Farms combines modern agronomy with technology-driven precision to produce high-quality crops sustainably, support farmer communities, and build resilient food systems across Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="mailto:farms@apollogroup.com" className="btn-primary text-base"
              style={{ background: 'linear-gradient(135deg, #2E7D32, #4CAF50)', boxShadow: '0 4px 24px rgba(76, 175, 80, 0.35)' }}>
              Partner With Us <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-secondary text-base border-green-600 text-green-400 hover:bg-green-700">
              Our Capabilities
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── IMPACT STATS ─── */}
      <section className="py-16 bg-navy-900/60 border-y border-navy-800">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map(({ value, label, icon: Icon }, i) => (
              <FadeIn key={label} delay={i * 0.1}>
                <div className="text-center stat-card">
                  <Icon size={24} className="mx-auto mb-3" style={{ color: '#4CAF50' }} />
                  <div className="font-display font-bold text-3xl text-white mb-1">{value}</div>
                  <div className="text-slate-400 text-sm">{label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="section-label mb-4" style={{ color: '#4CAF50' }}>About Us</div>
              <h2 className="font-display font-bold text-4xl text-white mb-6 leading-tight">
                Transforming Agriculture<br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  With Precision & Purpose
                </span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-5 text-lg">
                Apollo Farms believes that Africa's agricultural potential is its greatest untapped resource. We combine modern agronomy, precision technology, and sustainable practices to unlock that potential responsibly.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Our approach goes beyond just growing crops — we build end-to-end value chains, strengthen farming communities, and create systems that sustain themselves long after our direct involvement ends.
              </p>
              <div className="space-y-3">
                {[
                  'Technology-driven farm management',
                  'Environmentally responsible practices',
                  'Community-centered agribusiness models',
                  'Market linkage and off-take partnerships',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} style={{ color: '#4CAF50' }} className="flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="card-glass rounded-3xl p-8">
                <h3 className="font-display font-bold text-white text-xl mb-6 flex items-center gap-2">
                  <Wheat size={20} style={{ color: '#4CAF50' }} />
                  Crops We Cultivate
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {crops.map((crop) => (
                    <div
                      key={crop}
                      className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm text-slate-300"
                      style={{ background: 'rgba(76, 175, 80, 0.08)', border: '1px solid rgba(76, 175, 80, 0.15)' }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      {crop}
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl" style={{ background: 'rgba(76, 175, 80, 0.08)', border: '1px solid rgba(76, 175, 80, 0.2)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Globe size={16} style={{ color: '#4CAF50' }} />
                    <span className="font-display font-semibold text-white text-sm">Geographic Reach</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Operating across Nigeria's key agricultural zones with plans to expand into West Africa's major food production corridors.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-24 bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="section-label mb-4" style={{ color: '#4CAF50' }}>What We Do</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">Our Capabilities</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              From precision farming tools to agribusiness advisory and supply chain management.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ Icon, title, desc, color }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="card-glass-hover rounded-2xl p-6 h-full group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-3">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="contact" className="py-20 border-t border-b border-navy-800"
        style={{ background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(10, 22, 40, 0.95) 50%, rgba(76, 175, 80, 0.05) 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <Leaf size={40} className="mx-auto mb-6" style={{ color: '#4CAF50' }} />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Let's Grow Together
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Whether you're an investor, farmer, off-taker, or agribusiness professional, we'd love to explore partnership opportunities.
            </p>
            <a href="mailto:farms@apollogroup.com" className="btn-gold text-base">
              Start a Conversation <ArrowRight size={18} />
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  )
}
