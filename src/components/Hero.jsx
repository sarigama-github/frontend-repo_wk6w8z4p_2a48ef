import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight, Wrench, Gauge, ThermometerSnowflake } from 'lucide-react'

const statItem = (label, value) => (
  <div className="px-4 py-3 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 shadow-sm">
    <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
    <p className="text-lg font-semibold text-slate-900">{value}</p>
  </div>
)

function Hero() {
  return (
    <section id="acasa" className="relative h-[92vh] min-h-[620px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-white/60"
          >
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-3 py-1 rounded-full mb-4">
              <ThermometerSnowflake className="w-4 h-4 mr-2" /> Frig Auto • Service autorizat
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Performance & Cold Chain pentru flota ta
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Întreținere, reparații și montaj pentru Carrier, Thermo King și Daikin. Intervenții rapide, piese omologate, garanție reală.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-colors shadow">
                Programează o intervenție <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#servicii" className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-50 border border-slate-200">
                Vezi serviciile
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
              {statItem('Timp mediu răspuns', '~60 min')}
              {statItem('Clienți mulțumiți', '1.2k+')} 
              {statItem('Unități service/an', '3.5k+')}
            </div>

            <div className="mt-6 flex items-center gap-4 text-slate-600">
              <div className="inline-flex items-center gap-2"><Wrench className="w-4 h-4 text-blue-600" /> Service mobil</div>
              <div className="inline-flex items-center gap-2"><Gauge className="w-4 h-4 text-blue-600" /> Testare etanșeitate</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"
      />

      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 text-slate-500 text-xs opacity-80">
        Derulează
      </div>
    </section>
  )
}

export default Hero
