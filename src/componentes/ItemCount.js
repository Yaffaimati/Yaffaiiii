import {useState} from "react"

const ItemCount = ({initial,stock, onAdd}) => {
    

    const[contador, setContador] = useState (initial)
    
     
    const sumar = () => contador < stock && setContador(contador + 1)
    const restar = () => contador > initial && setContador (contador - 1)
    const confirmar = () =>  onAdd 
    
            return (
            <div>
                <p id="parrafo">El Contador va:{contador}</p>
                <button onClick ={sumar}>Sumar</button>
                <button onClick ={restar}>Restar </button>
                <button onClick ={confirmar}>Agregar al Carrito</button>
            </div>)
}
export default ItemCount