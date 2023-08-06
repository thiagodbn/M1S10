import { useState, useContext } from 'react'
import './App.css'

import { MedicamentosContext } from './context/MedicamentosContext'

import Header from './components/Header'
import FormularioNovoMedicamento from './components/FormularioNovoMedicamento'
import CardMedicamento from './components/CardMedicamento'

//import Favoritar from './components/Favoritar'


function App() {

  const {listaMedicamentos} = useContext(MedicamentosContext)

  return(
    <>
    <Header/>
       

      <FormularioNovoMedicamento/>
      <div className='container-remedio'>
      {listaMedicamentos.map(medicamento => (
        <CardMedicamento key={medicamento.id} medicamento={medicamento} />
        ))}
        </div>

    </>
  )
}

export default App

/**
 *   const [listaMedicamento,setListaMedicamento] = useState()
  const adicionaMedicamento = (nome, laboratorio, preco) =>{
    if (nome == ""){
      alert("É necessário escrever um nome")
    return
  }
 * 
     <>
      <Header/>
      <FormularioNovoMedicamento adicionaMedicamento={adicionaMedicamento}/>
      <div>
        {listaMedicamento.map(remedio =>(
          <Favoritar 
              key={remedio.id} 
              id={remedio.id} 
              nomeRemedio={remedio.nomeRemedio} 
             nomeLaboratorio={remedio.nomeLaboratorio} 
             valorPreco={remedio.valorPreco} 
              favorito={remedio.favorito}/>
        ))}
      </div>
      <h1>M1S10</h1>
      <p className="read-the-docs">
        Thiago D B Noronha - DEVinHouse 2023
      </p>
    </>
 */