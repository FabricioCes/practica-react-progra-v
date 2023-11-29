import { Button, Input } from "@nextui-org/react";
import { useState } from "react"
/* eslint-disable react/prop-types */
function EditTodoForm({ editTodo, task }) {
    const [value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id)
    }

    return (
        <>
          <form onSubmit={handleSubmit}>
            <Input type="text" className="w-[30rem]" value={value} onChange={(e) => setValue(e.target.value)}/>
            <Button type="submit" className="mt-4 text-foreground" variant="flat" color="primary">Editar Tarea</Button>
          </form>
        </>
    );
}

export default EditTodoForm