import { motion } from 'framer-motion'
import {
  Cpu, Code, Database, BarChart3, Cloud, Smartphone,
  Shield, Zap, Users, ArrowRight, ChevronDown, ArrowLeft, CheckCircle
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'
import PageWrapper from '../components/PageWrapper'

const services = [
  {
    Icon: Code,
    title: 'Custom Software Development',
    desc: 'Bespoke applications built to your exact specifications — from enterprise platforms to customer-facing products, delivered with clean code and solid architecture.',
    color: '#C9922A',
  },
  {
    Icon: Database,
    title: 'Data Analytics & BI',
    desc: 'Transform raw data into strategic insight. We build dashboards, pipelines, and analytics platforms that help leadership make faster, better decisions.',
    color: '#9C27B0',
  },
  {
    Icon: Cloud,
    title: 'Cloud Infrastructure & DevOps',
    desc: 'Scalable cloud environments on AWS, GCP, and Azure. We design, migrate, and maintain infrastructure that grows with your business reliably.',
    color: '#2196F3',
  },
  {
    Icon: Smartphone,
    title: 'Mobile Application Development',
    desc: 'Cross-platform iOS and Android applications with native performance, intuitive UX, and backend integrations that keep your team and customers connected.',
    color: '#4CAF50',
  },
  {
    Icon: Zap,
    title: 'Digital Transformation',
    desc: 'We help organizations move from legacy systems and manual processes to modern, automated digital workflows that increase speed and reduce cost.',
    color: '#FF9800',
  },
  {
    Icon: Shield,
    title: 'Cybersecurity & Compliance',
    desc: 'Security assessments, penetration testing, and compliance frameworks to protect your digital assets and meet regulatory obligations.',
    color: '#EF5350',
  },
  {
    Icon: BarChart3,
    title: 'AI & Machine Learning',
    desc: 'Practical AI solutions — from predictive models and NLP to computer vision — embedded into your products and operations where they create real value.',
    color: '#00BCD4',
  },
  {
    Icon: Users,
    title: 'IT Strategy & Consulting',
    desc: 'Technology roadmaps, architecture reviews, vendor selection, and CTO-level advisory for growing organizations building their tech capabilities.',
    color: '#3280F0',
  },
]

const techStack = [
  'React / Next.js', 'Node.js', 'Python', 'TypeScript',
  'PostgreSQL', 'MongoDB', 'AWS', 'GCP',
  'Docker', 'Kubernetes', 'TensorFlow', 'FastAPI',
]

const process = [
  { title: 'Discover', desc: 'Deep-dive into your business context, technical needs, and desired outcomes to define the right scope.' },
  { title: 'Architect', desc: 'We design a technical solution that is maintainable, scalable, and aligned to your existing systems.' },
  { title: 'Build', desc: 'Agile, sprint-based development with regular demos, code reviews, and clear quality gates throughout.' },
  { title: 'Deploy', desc: 'Production-ready deployment with documentation, handover, and post-launch support to ensure stability.' },
]

export default function TechPage() {
  return (
    <PageWrapper>
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950" />

        {/* Gold glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-12 blur-[100px]"
          style={{ background: 'radial-gradient(ellipse, #C9922A 0%, transparent 70%)' }}
        />

        {/* Floating circuit orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -15 - i * 5, 0], x: [0, i % 2 === 0 ? 10 : -10, 0] }}
            transition={{ duration: 5 + i * 1.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
            className="absolute rounded-full opacity-20"
            style={{
              width: 6 + i * 3,
              height: 6 + i * 3,
              background: '#C9922A',
              top: `${20 + i * 15}%`,
              left: `${10 + i * 18}%`,
              boxShadow: '0 0 12px rgba(201, 146, 42, 0.6)',
            }}
          />
        ))}

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
            style={{ background: 'rgba(201, 146, 42, 0.1)', border: '1px solid rgba(201, 146, 42, 0.25)' }}
          >
            <div className="w-2 h-2 rounded-full bg-gold-500" style={{ boxShadow: '0 0 8px rgba(201, 146, 42, 0.8)' }} />
            <span className="text-slate-300">Innovation & Technology</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display font-bold text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            Apollo
            <br />
            <span className="shimmer-text">Technologies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="text-xl md:text-2xl text-slate-300 mb-4 font-display"
          >
            Engineering the Future, One Solution at a Time
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed text-lg"
          >
            Apollo Technologies delivers software, data, and digital transformation solutions that help organizations across Africa and beyond operate smarter, scale faster, and compete in the modern digital economy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="mailto:tech@apollogroup.com" className="btn-gold text-base">
              Start a Project <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-secondary text-base border-gold-500 text-gold-400 hover:bg-gold-600 hover:border-gold-600">
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

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="section-label mb-4" style={{ color: '#C9922A' }}>What We Build</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
              Our Technology Services
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              From custom software to enterprise transformation — we turn complex technical challenges into clean, reliable solutions.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ Icon, title, desc, color }, i) => (
              <FadeIn key={title} delay={i * 0.07}>
                <div className="card-glass-hover rounded-2xl p-6 h-full group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-2 leading-snug">{title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="py-20 bg-navy-900/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <div className="section-label mb-3" style={{ color: '#C9922A' }}>Technology Stack</div>
            <h2 className="font-display font-bold text-3xl text-white">Tools We Work With</h2>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-wrap gap-3 justify-center">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="px-5 py-2.5 card-glass rounded-full text-sm font-display font-semibold text-slate-300 hover:text-white hover:border-gold-600/40 transition-all duration-200 cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── HOW WE WORK ─── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="section-label mb-4" style={{ color: '#C9922A' }}>Our Process</div>
            <h2 className="font-display font-bold text-4xl text-white">How We Deliver</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.12}>
                <div className="card-glass rounded-2xl p-6 h-full relative overflow-hidden group">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ background: 'radial-gradient(ellipse at top left, rgba(201, 146, 42, 0.08) 0%, transparent 70%)' }}
                  />
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-sm font-display font-bold"
                    style={{ background: 'rgba(201, 146, 42, 0.12)', border: '1px solid rgba(201, 146, 42, 0.25)', color: '#C9922A' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="py-20 bg-navy-900/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="section-label mb-4" style={{ color: '#C9922A' }}>Why Apollo Technologies</div>
              <h2 className="font-display font-bold text-3xl text-white mb-6 leading-tight">
                Engineering Partners,<br />
                <span className="gold-gradient-text">Not Just Vendors</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                We don't just write code — we become strategic partners in your digital journey. Our team combines deep technical expertise with business acumen to ensure every solution delivers real, measurable value.
              </p>
              <div className="space-y-3">
                {[
                  'Senior-level engineers on every project',
                  'Transparent communication and reporting',
                  'Agile delivery with clear milestones',
                  'Code ownership transferred to you',
                  'Post-launch support and maintenance',
                  'Africa-first perspective, global standards',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-gold-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="card-glass rounded-3xl p-8">
                <Cpu size={32} className="text-gold-400 mb-6" />
                <div className="font-display font-bold text-white text-xl mb-4">Ready to Build Something?</div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Whether you need a minimum viable product, a full enterprise system, or an AI-powered tool — our team is ready to discuss your project.
                </p>
                <div className="space-y-3">
                  <a href="mailto:tech@apollogroup.com" className="btn-gold w-full justify-center text-sm">
                    Start a Project <ArrowRight size={16} />
                  </a>
                  <a href="tel:+2340000000000" className="btn-secondary w-full justify-center text-sm border-gold-600 text-gold-400 hover:bg-gold-700 hover:border-gold-500">
                    Schedule a Call
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 border-t border-b border-navy-800"
        style={{ background: 'linear-gradient(135deg, rgba(201, 146, 42, 0.06) 0%, rgba(10, 22, 40, 0.95) 50%, rgba(201, 146, 42, 0.06) 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <Zap size={40} className="mx-auto mb-6 text-gold-400" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Accelerate Your Digital Journey?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Apollo Technologies is your partner for building technology that lasts — on time, on budget, and built right.
            </p>
            <a href="mailto:tech@apollogroup.com" className="btn-gold text-base">
              Let's Talk Tech <ArrowRight size={18} />
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  )
}
