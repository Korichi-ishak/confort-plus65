import Header from './components/Header'
import HomePage from './components/HomePage'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

export default App
