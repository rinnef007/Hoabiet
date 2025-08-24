import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MysteryBoxPage from './pages/MysteryBoxPage'
import ShoppingCenter from './pages/ShoppingCenter'
import ProfilePage from './pages/ProfilePage'
import PartnerPage from './pages/PartnerPage'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mystery-boxes" element={<MysteryBoxPage />} />
          <Route path="/shopping" element={<ShoppingCenter />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/partner" element={<PartnerPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App