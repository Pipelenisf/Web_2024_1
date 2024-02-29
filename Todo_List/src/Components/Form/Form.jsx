import './Form.css'

export function Form(){
    return(
        <form>
            <input type="text" placeholder='Escribe tu tarea'/>
                
            
            <Button/>
        </form>
    )
}

export function Button(){
    return(
        <button>+</button>
    )
}