import {FaTimes, FaClock, FaCheck} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.isDone ? ('done') : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} 
                <FaTimes className="task_delete"
                    onClick={() =>onDelete(task.id)}>
                </FaTimes>
                <FaCheck className="task_done" onClick={() => onToggle(task.id)}></FaCheck>
                </h3>
                
            <div className="task_data">
                <FaClock></FaClock>
                <p>{task.data}</p>
            </div>
            {task.isDone && 
            <div className="btn-task-done">
                Do you want to delete this task? <button onClick={()=>onDelete(task.id)} className="btn">Yes</button>
            </div>}
            
        </div>
    )
}

export default Task
