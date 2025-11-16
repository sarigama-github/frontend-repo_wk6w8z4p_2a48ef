import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Contact și programări</h2>
            <p className="mt-3 text-slate-600">Spune-ne ce problemă ai la instalația frigorifică și revenim rapid cu soluția potrivită.</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Telefon</p>
                  <p className="text-slate-600">0722 000 000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <p className="text-slate-600">contact@frigoauto.ro</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Adresă</p>
                  <p className="text-slate-600">Șoseaua Industrială 10, București</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Program</p>
                  <p className="text-slate-600">Luni–Vineri: 08:00–18:00 • Sâmbătă: 09:00–14:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
            {sent ? (
              <div className="text-center py-12">
                <p className="text-2xl font-semibold text-slate-900">Mulțumim!</p>
                <p className="text-slate-600 mt-2">Mesajul tău a fost trimis. Te contactăm în cel mai scurt timp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Nume</label>
                    <input required type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Telefon</label>
                    <input required type="tel" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Descrie problema</label>
                  <textarea required rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md">Trimite cererea</button>
                <p className="text-xs text-slate-500 text-center">Prin trimiterea formularului ești de acord cu prelucrarea datelor personale.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
