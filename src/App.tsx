import Home from './pages/home/Home'
import Faq from './pages/faq/Faq'
import './App.css'
import Carregamento from './components/Carregamento'
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import Layout from './Layout'
import ScrollToTop from './components/ScrollToTop';
import { Programacao } from './pages/programacao/Programacao';

function App() {
  const [loading, setLoading] = useState(true);
  const [ counterCat , setCounterCat ] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading && <Carregamento />}
      <ScrollToTop />
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
              <Home
                setCounterCat = {setCounterCat}
                counterCat = {counterCat}
              />
            }
          />
          <Route path="perguntas_frequentes" element={<Faq/>} />
          <Route path="programacao" element={<Programacao counterCat={counterCat}/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App