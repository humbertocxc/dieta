import './App.scss'
import Calculadora from './components/calculadora/Calculadora'
import Sidebar from './components/sidebar/Sidebar'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

export default function App() {
  return (
    <div className="app">
      <Header />
      <Calculadora />
      <Sidebar />
      <Header />
    </div>
  )
}
