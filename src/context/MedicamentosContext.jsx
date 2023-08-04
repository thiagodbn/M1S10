/**
 * PASSO PAEA CRIAR UM CONTEXTO
 * 1 - [X] - importe o createContext do react
 * 2 - [X] - criar a variavel do context 
 *          obs:por padrão o contexto recebe o mesmo ome do arquivo
 *          obs: Lembre-se de exportar a variavel do context
 * 3 - [x] - defina o provider
 *      3.1 - [x] defina os dados globais
 *      3.2 - [X] defina o valuie do provider 
 *                  obs: geralmente o value vai ser um objeto
 *                     obs: lembre-se de exportar a variavel provider
 *      3.3 - [x] defina o children
 */

import { createContext, useState } from "react";

export const MedicamentosContext = createContext()
export const MedicamentosContextProvider = ({children}) => {

    const [listaMedicamentos, setListaMedicamentos] = useState(JSON.parse(localStorage.getItem("listaMedicamentos")) || [] )

    const AdicionarMedicamento = (nome, laboratorio, preco) => {
        if(nome.length == "" || laboratorio.length == "" || preco == 0 || preco == ""){
            alert("Preencha todos os campos")
            return
        }

        const novoMedicamento = {
            id: listaMedicamentos.length + 1,
            nome: nome,
            laboratorio: laboratorio,
            preco: preco,
            favorito: false
          }

          const novaLista = [...listaMedicamentos, novoMedicamento]
          localStorage.setItem("listaMedicamentos", JSON.stringify(novaLista))
          //novaLista.push(novoMedicamento) //tbm funciona ou add ,novomedicamento acima
          setListaMedicamentos(novaLista)
          alert("Medicamento adicionado")
    }

    const FavoritarMedicamento = (id) => {
        const lista = listaMedicamentos.map(item => {
            if(item.id == id){
             item.favorito = !item.favorito
            }
           
            return item
           })
       
           setListaMedicamentos(lista)
         }


    return(
        <MedicamentosContext.Provider value={{listaMedicamentos, AdicionarMedicamento, FavoritarMedicamento}}>
        {children}
        </MedicamentosContext.Provider>
    )
}


