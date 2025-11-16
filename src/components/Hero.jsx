import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="acasa" className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl bg-white/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
              Frig Autovehicule • Service autorizat
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Service pentru agregate frigorifice auto
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Întreținere, reparații și montaj pentru Carrier, Thermo King și Daikin. Intervenim rapid, oriunde în România.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                Programează o intervenție
              </a>
              <a href="#servicii" className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-50 border border-slate-200">
                Vezi serviciile
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  )
}

export default Hero
