import './App.css'
import MainSection from './pages/MainSection'
import Header from './components/Header'
import { test } from './assets/donne'

function App() {

  return (
    <>
      <Header/>
      <MainSection cards={test}/>
    </>
  )
}

export default App
