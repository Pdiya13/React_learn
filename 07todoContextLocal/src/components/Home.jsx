import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

export default function Home() {
  const { todos, addTodo, removeTodo, updateTodo } = useTodo();
  const [todo, setTodo] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAdd = () => {
    if (todo.trim() === '') return;
    addTodo(todo);
    setTodo('');
  };

  const handleUpdate = (id) => {
    if (editText.trim() === '') return;
    updateTodo(id, editText);
    setEditId(null);
    setEditText('');
  };

  return (
    <div>
      <div className='flex flex-row justify-center mt-20 gap-5'>
        <input
          type='text'
          value={todo}
          placeholder='Write Todo..'
          onChange={(e) => setTodo(e.target.value)}
          className='border-black bg-white rounded-sm w-150 pr-10'
        />
        <button className='bg-gray-300 rounded-sm w-20 font-bold' onClick={handleAdd}>Add</button>
      </div>

      {/* Display Todos */}
      <ul>
        {todos.length === 0 ? (
          <p className="text-center mt-10 text-4xl font-bold">No todos yet.</p>
        ) : (
          todos.map((item) => (
            <li key={item.id} className="flex justify-center">
              {editId === item.id ? (
                <>
                  <input
                    type='text'
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className='border-black bg-white rounded-sm w-150 mr-10 mt-5 h-10'
                  />
                  <div className='flex flex-col mt-4'>
                    <button
                      onClick={() => handleUpdate(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      save
                    </button>
                    <button
                      onClick={() => {
                        setEditId(null);
                        setEditText('');
                      }}
                      className="text-red-500 hover:underline"
                    >
                      cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <span className='border-black bg-white rounded-sm w-150 mr-10 mt-5 h-10'>{item.text}</span>
                  <div className='flex flex-col mt-4'>
                    <button
                      onClick={() => removeTodo(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => {
                        setEditId(item.id);
                        setEditText(item.text);
                      }}
                      className="text-red-500 hover:underline"
                    >
                      update
                    </button>
                  </div>
                </>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
