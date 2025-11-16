import { useState } from 'react'
import { Menu, X, Snowflake, Phone, Mail } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#servicii', label: 'Servicii' },
    { href: '#marci', label: 'Mărci' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#acasa" className="flex items-center gap-2 font-bold text-slate-900">
            <Snowflake className="w-6 h-6 text-blue-600" />
            <span>Frigo Auto Service</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              <Phone className="w-4 h-4" /> Programare
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="Deschide meniul"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-slate-700 hover:text-blue-600">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md">
              <Phone className="w-4 h-4" /> Programare
            </a>
            <div className="flex items-center gap-4 pt-2 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><Phone className="w-4 h-4" /> 0722 000 000</span>
              <span className="inline-flex items-center gap-2"><Mail className="w-4 h-4" /> contact@frigoauto.ro</span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
