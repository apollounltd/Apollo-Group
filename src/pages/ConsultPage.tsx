import { motion } from 'framer-motion'
import {
  Plane, Shield, FileText, AlertTriangle, CheckSquare, Users,
  BookOpen, Package, ArrowRight, ChevronDown, Phone, Mail, ArrowLeft
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'
import PageWrapper from '../components/PageWrapper'

const services = [
  {
    Icon: CheckSquare,
    title: 'Drone Compliance Reviews',
    desc: 'We assess your drone operations against applicable regulatory, operational, safety, documentation, and competency requirements — delivering a clear gap analysis.',
  },
  {
    Icon: FileText,
    title: 'Operations Manual Development',
    desc: 'We develop and improve drone operations manuals, SOPs, emergency procedures, and supporting documents for operators seeking formal approval.',
  },
  {
    Icon: AlertTriangle,
    title: 'Risk Assessments',
    desc: 'Structured risk assessments including job hazard analysis, BVLOS reviews, site-specific risk assessments, and emergency response planning.',
  },
  {
    Icon: Shield,
    title: 'Safety Management Systems',
    desc: 'We design practical SMS frameworks: safety policy, hazard reporting, risk management, incident reporting, and corrective action tracking.',
  },
  {
    Icon: Plane,
    title: 'IOGP Readiness Assessment',
    desc: 'For organizations working with oil and gas clients, we provide readiness assessments aligned with high-risk industrial operation expectations.',
  },
  {
    Icon: FileText,
    title: 'ROC Registration Guidance',
    desc: 'We guide operators through preparing for RPAS Operator Certificate requirements — documentation, structure, SOPs, safety systems, and more.',
  },
  {
    Icon: Users,
    title: 'Operational Design & Recruitment',
    desc: 'We help design the right drone operations structure: role definitions, org charts, competency frameworks, and duty matrices.',
  },
  {
    Icon: BookOpen,
    title: 'Training & Capacity Building',
    desc: 'Practical training for managers, pilots, technicians, and safety teams on drone operations, compliance, risk management, and operational excellence.',
  },
  {
    Icon: Package,
    title: 'Digital Toolkits & Templates',
    desc: 'Ready-to-use digital products including operations manual templates, SOP packs, SMS frameworks, audit checklists, and drone business playbooks.',
  },
]

const problems = [
  'Unclear regulatory requirements',
  'Weak or missing operations manuals',
  'Poorly structured safety management',
  'Incomplete risk assessments',
  'Lack of documented procedures',
  'Unclear personnel responsibilities',
  'Poor audit readiness',
  'Weak competency records',
  'Difficulty with ROC registration',
  'Failing corporate or oil & gas client expectations',
]

const outcomes = [
  { label: 'What is compliant', color: '#4CAF50' },
  { label: 'What is missing', color: '#EF5350' },
  { label: 'What is risky', color: '#FF9800' },
  { label: 'What needs to be fixed first', color: '#3280F0' },
  { label: 'What documents you need', color: '#C9922A' },
  { label: 'What systems you need', color: '#9C27B0' },
  { label: 'What steps to take next', color: '#00BCD4' },
]

const steps = [
  { num: '01', title: 'Book a Readiness Call', desc: 'We understand your operation, business goals, current gaps, and immediate priorities.' },
  { num: '02', title: 'Conduct Assessment', desc: 'We review your documents, structure, processes, risk controls, and operational readiness.' },
  { num: '03', title: 'Receive Gap Report', desc: 'You get a clear report showing your compliance, safety, documentation, and operational gaps.' },
  { num: '04', title: 'Implement the Roadmap', desc: 'Implement internally, purchase toolkits, or engage us for full implementation support.' },
]

export default function ConsultPage() {
  return (
    <PageWrapper>
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-15 blur-[100px]"
          style={{ background: 'radial-gradient(ellipse, #1E6FE8 0%, transparent 70%)' }}
        />

        {/* Animated plane icon */}
        <motion.div
          animate={{ x: ['-5%', '5%', '-5%'], y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 opacity-10"
        >
          <Plane size={120} className="text-electric-500 rotate-12" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors">
              <ArrowLeft size={16} /> Back to Apollo Group
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full card-glass mb-6 text-sm"
          >
            <div className="glow-dot" />
            <span className="text-slate-300">Aviation & Drone Advisory</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display font-bold text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            Apollo
            <br />
            <span className="gradient-text">Consult</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-xl md:text-2xl text-slate-300 mb-4 font-display"
          >
            Build Safe, Compliant, and Scalable Drone Operations
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed text-lg"
          >
            We help drone operators, corporate organizations, government agencies, and industrial companies design, document, review, and improve drone operations in line with regulatory, safety, and international best-practice requirements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="mailto:info@apollogroup.com" className="btn-primary text-base">
              Book a Compliance Readiness Call <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-secondary text-base">
              View Services
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

      {/* ─── PROBLEM SECTION ─── */}
      <section className="py-24 bg-navy-900/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="section-label mb-4">The Challenge</div>
              <h2 className="font-display font-bold text-4xl text-white mb-6">
                Is Your Drone Operation<br />
                <span className="gradient-text">Truly Ready?</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6 text-lg">
                Many organizations want to use drones for inspection, surveillance, mapping, security, agriculture, or emergency response. But most run into the same problems.
              </p>
              <div className="p-5 card-glass rounded-2xl border-l-4 border-electric-600">
                <p className="text-slate-300 italic text-sm leading-relaxed">
                  "In aviation, what is not documented is often treated as not done."
                </p>
                <p className="text-electric-400 text-xs font-display font-semibold mt-2">— Apollo Consult Principle</p>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {problems.map((p, i) => (
                  <motion.div
                    key={p}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 card-glass rounded-xl px-4 py-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-500 flex-shrink-0" />
                    <span className="text-slate-400 text-sm">{p}</span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="section-label mb-4">What We Offer</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
              Our Core Services
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              From compliance reviews to full operational design, we cover every dimension of professional drone operations.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="card-glass-hover rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-electric-600/15 border border-electric-600/20 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-electric-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-3">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FLAGSHIP OFFER ─── */}
      <section className="py-24 bg-gradient-to-b from-navy-900/60 to-navy-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <div className="section-label mb-4">Flagship Engagement</div>
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Drone Compliance &<br />
              <span className="gradient-text">Operations Readiness Assessment</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              A focused advisory engagement to understand the current state of your drone operations and build a roadmap to excellence.
            </p>
          </FadeIn>

          <div className="card-glass rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="font-display font-bold text-white text-xl mb-6">What You Get</h3>
                <div className="space-y-3">
                  {[
                    'Discovery session',
                    'Review of existing drone operations',
                    'Review of manuals, SOPs, forms & records',
                    'Compliance gap analysis',
                    'Safety and risk management review',
                    'Personnel and competency review',
                    'Operational structure review',
                    'Documentation gap report',
                    'Priority action plan',
                    'Management presentation',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckSquare size={16} className="text-electric-500 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-white text-xl mb-6">At the End, You Will Know:</h3>
                <div className="space-y-3 mb-8">
                  {outcomes.map(({ label, color }) => (
                    <div key={label} className="flex items-center gap-3 card-glass rounded-xl px-4 py-3">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                      <span className="text-slate-300 text-sm">{label}</span>
                    </div>
                  ))}
                </div>

                <a href="mailto:info@apollogroup.com" className="btn-primary w-full justify-center">
                  Book Your Assessment <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="section-label mb-4">The Process</div>
            <h2 className="font-display font-bold text-4xl text-white">How It Works</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ num, title, desc }, i) => (
              <FadeIn key={num} delay={i * 0.12}>
                <div className="relative card-glass rounded-2xl p-6 text-center h-full">
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3 z-10">
                      <ArrowRight size={16} className="text-electric-600/50" />
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-full bg-electric-600/15 border border-electric-600/30 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display font-bold text-electric-400 text-sm">{num}</span>
                  </div>
                  <h3 className="font-display font-bold text-white mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-electric-600/10 via-navy-900 to-electric-600/10 border-t border-b border-navy-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Build a Safer and More<br />Professional Drone Operation?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Whether you're just starting out or preparing for an audit, we have the right engagement for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@apollogroup.com" className="btn-primary text-base">
                <Mail size={18} /> Email Us Today
              </a>
              <a href="tel:+2340000000000" className="btn-secondary text-base">
                <Phone size={18} /> Call / WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  )
}
