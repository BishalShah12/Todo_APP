import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutThunk } from '../../store/slice/user/user.thunk'


function Home() {

  const dispatch = useDispatch()

  
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
    <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button 
      onClick={() => dispatch(logoutThunk())}
      className="btn btn-primary">Logout</button>
    </div>
  </div>
</div>
</div>
  )
}

export default Home