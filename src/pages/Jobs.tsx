
import { useNavigate } from 'react-router'

const Jobs = () => {
  const navigate = useNavigate();
  const buttonHandler =()=>{
    alert("Apply Successfully")
    navigate('/')
  }
  return (
    <div>
      <div className='bg-gray-900 max-w-2xl mx-auto mt-16 p-6 rounded-full text-white text-center' >
         <h1>this is job page</h1>
         
      <button onClick={buttonHandler} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4'>Apply</button>
      </div>
    </div>
  )
}

export default Jobs
