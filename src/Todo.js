import React, { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const warning = todos ? todos.length === 0 : "No data";

  // console.log(warning)

  const addTodo = () => {
    if (input.trim() === "") {
      alert("Enter Valid Input");
    } else {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    const newTodo = todos.filter((_, i) => i !== index);
    setTodos(newTodo);
  };

  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="head">
            <h2>Todo</h2>
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              className="input-field"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
          </div>

          <div className="data-container">

            {
              todos.length === 0 ? (
                <p>Data Not found</p>
              ) : <ul>


                {todos.map((todo, index) => (
                  <li key={index}>
                    {todo}
                    <button onClick={() => removeTodo(index)}>Delete</button>
                  </li>
                ))}
              </ul>
            }

            {/* 
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>
                  {todo}
                  <button onClick={() => removeTodo(index)}>Delete</button>
                </li>
              ))}
            </ul> */}


          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
