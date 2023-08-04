import './style.css'
import { useContext } from "react"
import { MedicamentosContext } from "../../context/MedicamentosContext"

function CardMedicamento({medicamento}){
    
    const {FavoritarMedicamento} = useContext(MedicamentosContext)

    return(
        <div className="Card">
            <button onClick={() => FavoritarMedicamento(medicamento.id)}>Favorito: {medicamento.favorito.toString()}</button>
            <img width={120} src="https://img.freepik.com/vetores-premium/frasco-de-remedio-e-vitamina-icone-da-capsula-de-ferro_530733-2663.jpg?w=2000" alt="" />
            <h4> {medicamento.nome}</h4>
            <h4> {medicamento.laboratorio}</h4>
            <h4> {'R$ ' + medicamento.preco}</h4>

        </div>
    )
}
export default CardMedicamento