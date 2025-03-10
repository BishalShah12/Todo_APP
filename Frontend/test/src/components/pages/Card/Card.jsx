
import React, { useEffect, useState } from 'react';
// import { TrashIcon, PencilIcon, CheckIcon } from '@heroicons/react/outline';
import {useDispatch, useSelector} from "react-redux"
import { addTodo, AllTodo } from '../../store/slice/user/user.thunk.js';
import { useNavigate } from 'react-router-dom';
import Loading from "../Loading/Loading.jsx"

const Card = () => {
  const [inputValue, setInputValue] = useState({
    tittle: '',
    description: '',
  }
  );

  const {loading} = useSelector(state => state.user)

  
  const navigate = useNavigate()

  const dispatch = useDispatch()
  
  const handleChanges = async (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value
    })
  }


  useEffect(() => {
     dispatch(AllTodo())
  }, [])

  if (loading) {
    return (<Loading/>)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addTodo(inputValue))
    await dispatch(AllTodo())
        setInputValue({
            tittle: "",
            description: "",
        })
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Todo List
      </h1>

      Add/Edit Todo Form
      <form onSubmit={handleSubmit} className="bg-gray-300 rounded-lg shadow-lg p-6 mb-8">
        <div className="grid gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              name='tittle'
              value={inputValue.tittle}
              onChange={handleChanges}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              placeholder="Enter task title"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              name='description'
              value={inputValue.description}
              onChange={handleChanges}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              placeholder="Enter task description"
              rows="3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
          >
            Add Task
            {/* {editId ? 'Update Task' : 'Add Task'} */}
          </button>
        </div>
      </form>

        <button className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-colors duration-300"
            onClick={() => navigate("/AllTodo")}
            >
                See All Todo
              </button>

      {/* Todo List */}
      {/* <div className="space-y-4">
        {todos?.length === 0 ? (
          <p className="text-center text-gray-500 py-4">No tasks found. Add your first task!</p>
        ) : (
          todos && todos.allTodo.map((todo) => (
            <div
              key={todo._id}
              className={`bg-white rounded-lg shadow-md p-4 flex items-start justify-between group hover:shadow-lg transition-all duration-300 ${
                todo.completed ? 'opacity-70 bg-gray-50' : ''
              }`}
            >
              <div className="flex items-start gap-4 flex-1">
                <button
                  onClick={() => toggleStatus(todo._id)}
                  className={`mt-1 w-5 h-5 border-2 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    todo.completed
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-300 hover:border-blue-500'
                  }`}
                >
                  
                </button>

                <div className="flex-1">
                  <h3
                    className={`text-lg font-medium ${
                      todo.completed
                        ? 'text-gray-400 line-through'
                        : 'text-gray-800'
                    }`}
                  >
                    {todo?.tittle}
                  </h3>
                  {todo.description && (
                    <p className="text-gray-600 mt-1 text-sm">
                      {todo.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={() => editTodo(todo.id)}
                  className="text-blue-500 hover:text-blue-600 p-2 rounded-md hover:bg-blue-50 transition-colors duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(todo._id)}
                  className="text-red-500 hover:text-red-600 p-2 rounded-md hover:bg-red-50 transition-colors duration-300"
                >
                 
                  delete
                </button>
              </div>
            </div>
          ))
        )}
      </div> */}
    </div>
  </div>
   

  );
};

export default Card;