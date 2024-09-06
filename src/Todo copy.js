import React, { useState } from "react";

function Todo() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('')
    const [error, setError] = useState('');

    const addTodo = () => {
        if (input !== "") {
            setTodos([...todos, input])
            setInput("")
            setError("")
        } else {
            setError("Enter Value")

        }
    }

    const removeTodo = (index) => {
        const newTodo = todos.filter((_, i) => i !== index);
        setTodos(newTodo)
    }

    console.log(todos)

    return (
        <div>
            <div className="container">
                <div className="wrapper">
                    <div className="head">
                        <h2>Todo</h2>
                    </div>

                    {error && <p style={{ color: 'red', margin: 0 }}>{error}</p>}
                    <div className="input-wrapper">

                        <input type="text" className="input-field" value={input} onChange={(e) => setInput(e.target.value)} />
                        <button onClick={addTodo}>Add</button>
                    </div>

                    <div className="data-container">
                        <ul>
                            {
                                todos.map((todo, index) => (
                                    <li key={index}>
                                        {todo} <button onClick={() => removeTodo(index)}>Delete</button>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todo;
