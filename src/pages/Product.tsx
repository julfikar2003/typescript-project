import { useNavigate } from "react-router";


const Product = () => {
  const navigate = useNavigate();
  const backButton = () =>{
    alert("Product sussessfully")
    navigate('/')
  }
  return (
    <div className='bg-gray-900 max-w-2xl mx-auto mt-16 p-6 rounded-full text-white text-center'>
      <h1>your product sussessfully</h1>
      
        <button onClick={backButton} className="btn-btn-link text-red-600 bg-white border-2 border-red-600 hover:bg-red-600 hover:text-white font-bold py-2 px-4 rounded-full mt-3">Home</button>
      
    
      
    </div>
  )
}

export default Product
