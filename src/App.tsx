
import { RouterProvider } from 'react-router-dom'
import './App.css'

import { routes } from './routers/Routes'
// import { products, type Product } from './db/db'




function App() {
 

  return (
    <>
    <RouterProvider router={routes}/>
    {/* <div className='flex flex-col items-center justify-center h-screen'>
  {
    products.map((item:Product, index:number)=> <div key={index}>{item.desc}</div>)
    
    }
  
 


    </div> */}
  
   
    </>
  )
}

export default App
