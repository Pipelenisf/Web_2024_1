import './Form.css'

export function Form(){
    return(
        <>
            <h2>Manage your task</h2>
            <form>
                <div className='add-container'>
                    <input type="text" placeholder='Escribe tu tarea'/>
                    <Button/>
                </div>
                <TaskCard name='Task 1' bgColor='#FF8A09'/>
            </form>
        </>

    )
}

export function Button(){
    return(
        <button>+</button>
    )
}

export function TaskCard(props){
    
    const {name, bgColor, state} = props

    return(
        <>
            <div className='task-card-container' style={{backgroundColor: bgColor}}>
                <p>{name}</p>
                <div className='card-state'>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}