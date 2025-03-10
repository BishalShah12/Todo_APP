import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTodo } from "../../store/slice/user/user.thunk"
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'


const Edit = () => {

  const {id} = useParams()
  const [data, setData] = useState("")  
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {todos,loading} = useSelector(state => state.user)
  
  
  
  if (loading) {
    return (<Loading/>)
  }
  
  
  useEffect(() => {
    if (id) { 
      const oneTodo = todos?.allTodo?.filter((todo) => todo._id === id)
      setData(oneTodo[0])
      console.log(oneTodo[0]);
      
    }

    },[])

    const newData = (e) => {
      const {name, value} = e.target
      setData({
        ...data,
        [name]:value
      })
    }

    const handleUpdate = (e) =>{
      e.preventDefault();
    }
    const editHandler = () => {
      dispatch(editTodo(data))
      navigate("/allTodo")
    }

    
    

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Todo List
      </h1>

      Add/Edit Todo Form
      <form onSubmit={handleUpdate} className="bg-gray-300 rounded-lg shadow-lg p-6 mb-8">
        <div className="grid gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              name='tittle'
              value={data && data?.tittle}
              onChange={newData}
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
              value={data && data?.description}
              onChange={newData}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              placeholder="Enter task description"
              rows="3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
            onClick={editHandler}
          >
            Save Task
            {/* {editId ? 'Update Task' : 'Add Task'} */}
          </button>
        </div>
      </form>
      </div>
      </div>
  )
}

export {Edit}