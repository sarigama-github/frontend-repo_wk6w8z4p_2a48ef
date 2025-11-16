import { ThermometerSnowflake, Fan, Snowflake, Gauge, Wrench, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: ThermometerSnowflake,
    title: 'Diagnoză și reparații',
    desc: 'Identificăm rapid problemele și reparam orice tip de agregat frigorific auto.'
  },
  {
    icon: Fan,
    title: 'Întreținere periodică',
    desc: 'Schimb filtre, curele, verificări freon și sistem electric pentru fiabilitate maximă.'
  },
  {
    icon: Gauge,
    title: 'Montaj și calibrare',
    desc: 'Instalare profesională pentru unități noi, calibrare și punere în funcțiune.'
  },
  {
    icon: Snowflake,
    title: 'Suport pe teren',
    desc: 'Echipă mobilă pentru intervenții rapide la fața locului în toată țara.'
  },
]

const brands = ['Carrier', 'Thermo King', 'Daikin', 'Lumikko', 'Hwasung']

function Brands() {
  return (
    <section id="servicii" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-blue-50/60 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Soluții complete pentru frig auto
          </h2>
          <p className="mt-3 text-slate-600">
            Specializați în Carrier, Thermo King și Daikin — pentru dube, camioane și semiremorci frigorifice.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.05 * idx }}
              className="rounded-2xl border border-slate-100 p-6 hover:shadow-lg transition-shadow bg-white"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-700 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="text-slate-600 mt-2 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          id="marci"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mt-16 rounded-2xl border border-slate-100 p-6 bg-slate-50"
        >
          <p className="text-center text-sm uppercase tracking-wider text-slate-500">Mărci deservite</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {brands.map((b, idx) => (
              <motion.div
                key={b}
                initial={{ y: 8, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * idx }}
                className="px-4 py-2 bg-white rounded-md border border-slate-200 text-slate-700 font-semibold hover:shadow-sm"
              >
                {b}
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-600">
            <div className="inline-flex items-center gap-2"><Truck className="w-4 h-4 text-blue-600" /> Flote comerciale</div>
            <div className="inline-flex items-center gap-2"><Wrench className="w-4 h-4 text-blue-600" /> Piese originale</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Brands
