import { ThermometerSnowflake, Fan, Snowflake, Gauge } from 'lucide-react'

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

function Brands() {
  return (
    <section id="servicii" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Soluții complete pentru frig auto
          </h2>
          <p className="mt-3 text-slate-600">
            Specializați în Carrier, Thermo King și Daikin — pentru dube, camioane și semiremorci frigorifice.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-100 p-6 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="text-slate-600 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        <div id="marci" className="mt-16 rounded-2xl border border-slate-100 p-6 bg-slate-50">
          <p className="text-center text-sm uppercase tracking-wider text-slate-500">Mărci deservite</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {['Carrier', 'Thermo King', 'Daikin', 'Lumikko', 'Hwasung'].map((b) => (
              <div key={b} className="px-4 py-2 bg-white rounded-md border border-slate-200 text-slate-700 font-semibold">
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands
