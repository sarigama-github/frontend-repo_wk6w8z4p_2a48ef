import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Brands />
      <Contact />
      <footer className="py-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Frigo Auto Service • Service pentru agregate frigorifice auto • Carrier, Thermo King, Daikin
        </div>
      </footer>
    </div>
  )
}

export default App
