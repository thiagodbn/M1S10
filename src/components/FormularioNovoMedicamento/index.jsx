import './style.css'
import { useContext, useState } from 'react'
import { MedicamentosContext } from '../../context/MedicamentosContext'

function FormularioNovoMedicamento(){

    const {AdicionarMedicamento} = useContext(MedicamentosContext)

const [nome, setNome] = useState("")
const [laboratorio,setLaboratorio] = useState("")
const [preco, setPreco] = useState(0)

const handleSubmit = (e) => {
    e.preventDefault()
    AdicionarMedicamento(nome, laboratorio, preco)
    
    setNome("")
    setLaboratorio("")
    setPreco(0) 
}

    return(
        <> 
        <h2> Formulario de Cadastro de Medicamento</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={nome} 
                placeholder='Nome Medicamento'
                onChange={(e) => setNome(e.target.value)}
            />
            <input 
                type="text" 
                value={laboratorio} 
                placeholder='Nome do Laboratorio'
                onChange={(e) => setLaboratorio(e.target.value)}
            />
            <input 
                type="number" 
                value={preco} 
                placeholder='preço'
                onChange={(e) => setPreco(Number(e.target.value))}
            />
            <button>Adicionar</button>
        </form>
        </>
    )
}

export default FormularioNovoMedicamento