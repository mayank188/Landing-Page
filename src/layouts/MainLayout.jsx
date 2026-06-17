import Header from '../components/Header/Header.jsx'
import Hero from '../components/Hero/Hero.jsx'
import RealityCheck from '../components/RealityCheck/RealityCheck.jsx'
import Templates from '../components/Templates/Templates.jsx'
import Features from '../components/Features/Features.jsx'
import CompareTable from '../components/CompareTable/CompareTable.jsx'
import Testimonials from '../components/Testimonials/Testimonials.jsx'
import Pricing from '../components/Pricing/Pricing.jsx'
import BookCall from '../components/BookCall/BookCall.jsx'
import FAQ from '../components/FAQ/FAQ.jsx'
import Footer from '../components/Footer/Footer.jsx'
import FloatingWhatsApp from '../components/FloatingWhatsApp/FloatingWhatsApp.jsx'

export default function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <RealityCheck />
        <Templates />
        <Features />
        <CompareTable />
        <Testimonials />
        <Pricing />
        <BookCall />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

