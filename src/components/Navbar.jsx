import { useEffect, useState } from 'react'
import { Menu, X, Snowflake, Phone, Mail, Gauge, Wrench } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: '#acasa', label: 'Acasă' },
    { href: '#servicii', label: 'Servicii' },
    { href: '#marci', label: 'Mărci' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b ${scrolled ? 'backdrop-blur-xl bg-white/70 border-white/40 shadow-sm' : 'backdrop-blur-md bg-white/40 border-white/30'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#acasa" className="group flex items-center gap-2 font-bold text-slate-900">
            <motion.span
              className="relative"
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <Snowflake className="w-6 h-6 text-blue-600" />
            </motion.span>
            <span className="tracking-tight">Frigo Auto Service</span>
            <span className="sr-only">Acasă</span>
          </a>

          <nav className="hidden md:flex items-center gap-2 text-slate-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 rounded-md hover:text-blue-700 transition-colors"
              >
                <span>{item.label}</span>
                <motion.span
                  layoutId="active-underline"
                  className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                />
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-md hover:from-blue-700 hover:to-cyan-700 transition-colors shadow-sm"
            >
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/90 backdrop-blur-xl border-t border-slate-100"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-slate-700 hover:text-blue-700"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.03 * idx }}
                >
                  {item.label}
                </motion.a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md">
                <Phone className="w-4 h-4" /> Programare rapidă
              </a>
              <div className="flex items-center gap-4 pt-2 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2"><Wrench className="w-4 h-4" /> Service autorizat</span>
                <span className="inline-flex items-center gap-2"><Gauge className="w-4 h-4" /> Testare rapidă</span>
                <span className="inline-flex items-center gap-2"><Mail className="w-4 h-4" /> contact@frigoauto.ro</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
