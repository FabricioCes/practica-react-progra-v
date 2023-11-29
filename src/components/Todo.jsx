/* eslint-disable react/prop-types */

import { BsTrash, BsPencil} from 'react-icons/bs'

function Todo({ task, deleteTodo, editTodo, toggleComplete }) {
    return (
        <div className="flex justify-between items-center bg-[#8758ff] p-3 rounded-sm mb-4">
            <p
                className={`${task.completed ? "text-[#c5aeff] line-through cursor-pointer" : "cursor-pointer"}`}
                onClick={() => toggleComplete(task.id)}
            >
                {task.task}
            </p>
            <BsPencil className='cursor-pointer' onClick={() => editTodo(task.id)} />
            <BsTrash className='cursor-pointer' onClick={() => deleteTodo(task.id)} />
        </div>
    )
}

export default Todo