import React, { useState, useContext } from 'react';
import { TodoContext } from '../../../../contexts/todo.context';
import './style.css'

export default function TodoHeader() {

    const todoContext = useContext(TodoContext);
    const [todo, setTodo] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault()
        setTodo('')
        todoContext.dispatch({ type: 'add', payload: todo });
    }
    

    return (
        <div>
            <p className="title">Lista de Atividades</p>
            <div>
                <input className="inputFilter"  type="text" onChange={(e) => setTodo(e.target.value)} value={todo} placeholder="digite para filtrar"></input>
                <button  className="buttonAdd" type="button" onClick={(e) => handleAddTodo(e)} >Adicionar</button>
            </div>
        </div>
    )
}