import { Link } from 'react-router-dom'
import { Mail, Phone, Linkedin, Twitter, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-navy-950 border-t border-navy-800">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-electric-600/10 via-navy-900 to-gold-600/10 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
          <div className="section-label mb-4">Ready to start?</div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-lg">
            From drone operations to smart agriculture and technology solutions — Apollo Group delivers excellence across every domain.
          </p>
          <a href="mailto:info@apollogroup.com" className="btn-gold text-base">
            Start a Conversation <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-600 to-electric-700 flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">A</span>
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-none">Apollo Group</div>
                <div className="font-body text-slate-500 text-xs tracking-widest uppercase">Excellence Across Industries</div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A diversified group of companies delivering aviation advisory, sustainable agriculture, and innovative technology solutions.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg card-glass flex items-center justify-center text-slate-400 hover:text-electric-400 hover:border-electric-600/40 transition-all duration-200">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg card-glass flex items-center justify-center text-slate-400 hover:text-electric-400 hover:border-electric-600/40 transition-all duration-200">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Subsidiaries */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-5 tracking-wide">Our Companies</h3>
            <ul className="space-y-3">
              {[
                { name: 'Apollo Consult', path: '/consult', sub: 'Aviation & Drone Advisory' },
                { name: 'Apollo Farms', path: '/farms', sub: 'Sustainable Agriculture' },
                { name: 'Apollo Technologies', path: '/technology', sub: 'Tech Solutions' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="group">
                    <div className="text-slate-300 hover:text-white font-medium text-sm transition-colors">{item.name}</div>
                    <div className="text-slate-500 text-xs">{item.sub}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-5 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {['About Apollo Group', 'Our Mission', 'Careers', 'News & Insights', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-5 tracking-wide">Contact</h3>
            <div className="space-y-4">
              <a href="mailto:info@apollogroup.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm group">
                <div className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center group-hover:bg-electric-600/20 transition-colors">
                  <Mail size={14} />
                </div>
                info@apollogroup.com
              </a>
              <a href="tel:+2340000000000" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm group">
                <div className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center group-hover:bg-electric-600/20 transition-colors">
                  <Phone size={14} />
                </div>
                +234 000 000 0000
              </a>
            </div>
            <div className="mt-6 p-4 card-glass rounded-xl">
              <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Headquarters</div>
              <div className="text-slate-300 text-sm">Lagos, Nigeria</div>
              <div className="text-slate-500 text-xs mt-1">Serving clients globally</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-sm">© {year} Apollo Group. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
