import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

const TodoContext = createContext();

export const TodoContextprovider = ({children}) => {
    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const updateTodo = (id, newText) => {
        setTodos((prev) =>
            prev.map((t) =>
                t.id === id ? { ...t, text: newText } : t
            )
        );
    };

    const removeTodo = (id) =>
    {
        setTodos((prev) => prev.filter((t) => t.id !== id))
    }

    return(
        <TodoContext.Provider value={{todos,addTodo,removeTodo,updateTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => useContext(TodoContext)
