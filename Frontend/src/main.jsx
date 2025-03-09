import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./components/pages/Home/Home.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Card from './components/pages/Card/Card.jsx'
import {store} from "./components/store/store.js"
import { Provider } from 'react-redux'
import CardDetail from './components/pages/Card/CardDeatails.jsx'
import ProtectedRoute from './components/utils/Protected.jsx'
import {Edit} from './components/pages/Card/Edit.jsx'
import SignUpPage from './components/User/SignUpPage.jsx'
import LoginPage from './components/User/LogInPage.jsx'





const router = createBrowserRouter([
  {
  path:'/',
  element:<App/>,
  children:[
    {
      path:"/",
      element:
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
        
    },
    {
      path:"/todos",
      element:
      <ProtectedRoute>
        <Card/>
      </ProtectedRoute>
        
    },
    {
    
      path:"/allTodo",
      element:
      <ProtectedRoute>
        <CardDetail/>
      </ProtectedRoute>
      
    },
    {
    
      path:"/edit/:id",
      element:
      <ProtectedRoute>
        <Edit/>
      </ProtectedRoute>
      
    },
   
    {
      path:"/login",
      element:<LoginPage/>
    },
    {
      path:"/signup",
      element:<SignUpPage/>
    },
  ]
  },

])

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    </StrictMode>
 
)
