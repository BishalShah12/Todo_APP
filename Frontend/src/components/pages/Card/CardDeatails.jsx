import React, { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AllTodo, deleteTodo, editTodo } from "../../store/slice/user/user.thunk";
import Loading from "../Loading/Loading";

const CardDetail = () => {  

  const dispatch = useDispatch()
   const {todos, loading} = useSelector(state => state.user)
   
   useEffect(() => {
     dispatch(AllTodo())
    },[])
    
    if (loading) {
      return (<Loading/>)
    }

  const deleteHandle = async(id) => {
    await dispatch(deleteTodo(id)) 
    await dispatch(AllTodo())
  }

  return (
    <>
      <div className="min-h-screen flex-wrap gap-4 bg-gray-700 flex items-start justify-start p-4">
    {todos?.length === 0 ? (
      <p className="text-center text-gray-500 py-4">No tasks found. Add your first task!</p>
    ) :( todos && todos.allTodo.map((todo) => 
      (
      
      <div key={todo._id} className="max-w-sm rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-8 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      {/* Decorative element */}
      <div className="h-2 w-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-6" />
      
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
      {todo.tittle}
      </h2>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
      {todo.description}
      </p>
      <Link to={`/edit/${todo._id}`} 
      className="inline-flex mr-2 items-center px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-colors duration-300"
      >
          Edit

        </Link>
      <button className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-colors duration-300"
      onClick={() => deleteHandle(todo._id)}
      >
          Delete
        </button>
      </div>
      )
    )
    )}
    </div>
    </>
  );
};

export default CardDetail;