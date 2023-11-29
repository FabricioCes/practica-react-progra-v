/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Input } from "@nextui-org/react"
import { useState } from "react";

function TodoForm({ addTodo }) {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setValue('');
        }
    }

    return (
        <form className="mb-[1rem] dark text-foreground" onSubmit={handleSubmit}>
            <Input type="text" className="mt-4s w-[30rem]" value={value} onChange={(e) => setValue(e.target.value)} />
            <Button type="submit" variant="bordered" color="success" className="mt-5 text-foreground">Agregar Tarea</Button>
        </form>
    )
}

export default TodoForm