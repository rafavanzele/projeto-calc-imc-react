import { useState } from 'react'

// IMPORTANDO ARRAY DE DADOS
import {data} from './data/data'
// COMPONENTS
import ImcCalc from './components/ImcCalc'
import ImcTable from './components/ImcTable'
// ESTILOS
import './App.css'



function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault()

    if (!height || !weight) return 

    // convertendo 'letras' em numeros e trocando virgulas por ponto
    const weightFloat = +weight.replace(',', '.')
    const heightFloat = +height.replace(',', '.')

    // calc o imc
    const imcResult = (weightFloat/(heightFloat * heightFloat)).toFixed(1)

    setImc(imcResult)

    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })

    if(!info) return
  }


  // botão voltar
  const resetCalc = (e) => {
    e.preventDefault()

    setImc('')
    setInfo('')
    setInfoClass('')
  }


  const [imc, setImc] = useState('')
  const [info, setInfo] = useState('')
  const [infoClass, setInfoClass] = useState('')
  

  return (
    
    <div className='container'>
      {!imc ? (<ImcCalc calcImc={calcImc}/>) : (<ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/>)}
      
    </div>
  )
}

export default App
