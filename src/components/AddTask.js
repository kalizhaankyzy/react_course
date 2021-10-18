import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [data, setData] = useState('')
    const [isDone, setIsDone] = useState(false)

    const submitTask = (e) =>{
        e.preventDefault()
        if(!text){
            alert("You cannot add empty task")
            return
        }
        onAdd({text,data,isDone})
        setText('')
        setData('')
        setIsDone(false)
    }
    return(
        <form className='add-form' onSubmit={submitTask}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                    type='text' 
                    placeholder='Add task'
                    value = {text}
                    onChange = {(e)=>setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input 
                    type='text' 
                    placeholder='Add day & Time'
                    value = {data}
                    onChange = {(e)=>setData(e.target.value)}/>
            </div>
            <input className='btn btn-save' type='submit' value='Save' />
        </form>
    )
}

export default AddTask