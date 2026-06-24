import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, LucideIcon } from 'lucide-react'

interface SubsidiaryCardProps {
  name: string
  tagline: string
  description: string
  path: string
  Icon: LucideIcon
  accentColor: string
  features: string[]
  delay?: number
}

export default function SubsidiaryCard({
  name, tagline, description, path, Icon, accentColor, features, delay = 0
}: SubsidiaryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link to={path} className="group block h-full">
        <div className="relative h-full card-glass rounded-3xl p-8 transition-all duration-500 group-hover:border-current overflow-hidden"
          style={{ '--hover-border': accentColor } as React.CSSProperties}
        >
          {/* Background glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
            style={{ background: `radial-gradient(ellipse at top left, ${accentColor}10 0%, transparent 70%)` }}
          />

          {/* Icon */}
          <div
            className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
            style={{ background: `${accentColor}20`, border: `1px solid ${accentColor}30` }}
          >
            <Icon size={26} style={{ color: accentColor }} />
          </div>

          {/* Content */}
          <div className="relative">
            <div className="text-xs font-display font-bold tracking-[0.25em] uppercase mb-2" style={{ color: accentColor }}>
              {tagline}
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-white transition-colors">
              {name}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {description}
            </p>

            {/* Features */}
            <ul className="space-y-2 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }}></div>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div
              className="flex items-center gap-2 text-sm font-display font-semibold transition-all duration-300 group-hover:gap-3"
              style={{ color: accentColor }}
            >
              Explore {name.split(' ')[1]}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
