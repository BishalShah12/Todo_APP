import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/pages/Header/Header.js'
import {Outlet} from "react-router-dom"
import { useDispatch} from "react-redux"
import { getProfileData } from './components/store/slice/user/user.thunk.js'

function App() {
  
  const dispatch = useDispatch()
  
  
useEffect(() => {
  (async () => {
    await dispatch(getProfileData())

  })()
},[])
  return (
    <>
        <Header/>
       <Outlet/>
    </>
  )
}

export default App
