import { Header } from "@/components/site/Header"
import { Hero } from "@/components/site/Hero"
import { AppDemo } from "@/components/site/AppDemo"
import { Features } from "@/components/site/Features"
import { Install } from "@/components/site/Install"
import { Footer } from "@/components/site/Footer"

function App() {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AppDemo />
        <Features />
        <Install />
      </main>
      <Footer />
    </div>
  )
}

export default App
