import  { useState } from 'react'
import { Link } from 'react-router';

const About = () => {
  const price = 999;
const [Count,setCount] = useState(0);
const increment = () => {setCount(Count + 1);}
const decrement = () =>{
  if(Count>0)
    {setCount(Count - 1);}
}
const reset = () => {setCount(0);}
const totalPrice = Count * price;

// 2
const price1 = 99;
const [Count1,setCount1] = useState(0);
const increment1 = () => {setCount1(Count1 + 1);}
const decrement1 = () =>{
  if(Count1>0){
  setCount1(Count1 - 1);}
}
const reset1 = () => {setCount1(0);};
const totalPrice1 = Count1 * price1;
//3
const price2 = 66;
const [Count2,setCount2] = useState(0);
const increment2 = () => {setCount2(Count2 + 1);}
const decrement2 = () =>{
  if(Count2>0){
  setCount2(Count2 - 1);}
}
const reset2 = () => {setCount2(0);};
const totalPrice2 = Count2 * price2;

  return (
    <div className='text-2xl font-bold text-black-500 text-center'>
     <h1 className="animate-fade-in-out text-4xl font-bold ">Our's Product</h1>
      
     <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-10 pb-10'>
{/* 1 */}
<div className="card bg-base-100 w-96 shadow-xl mx-auto my-4">
  <figure>
    <img
      src="1.jpg"
      alt="iphone" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">iphone 13</h2>
    <div className="card-actions justify-end">
        <p className="text-lg font-semibold text-white">count:{Count}</p>
        <p className="text-lg font-semibold text-red-700">Price per item: ${price}</p>
        <p className="text-lg font-bold text-red-700">Total Price: ${totalPrice}</p>
     
    
      <button className="btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition" onClick={increment}>+</button>
      <button className="btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition" onClick={decrement}>-</button>
      <button className="btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
       onClick={reset}>reset</button>
       
    </div>
    <div className="card-actions justify-end">
     <button className="btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"><Link to="/product">Buy Now</Link></button> 
    </div>
    
  </div>
</div>
{/* 2 */}
<div className="card bg-base-100 w-96 shadow-xl mx-auto my-4">
  <figure>
    <img
      src="images.png"
      alt="Watch" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Watch</h2>
    <div className="card-actions justify-end">
        <p className="text-lg font-semibold text-white">count:{Count1}</p>
        <p className='text-lg font-semibold text-red-700'>Price per item: ${price1}</p>
        <p className='text-lg font-bold text-red-700'>Total Price: ${totalPrice1}</p>
     
    
      <button className="btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition" onClick={increment1}>+</button>
      <button className="btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition" onClick={decrement1}>-</button>
      <button className="btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
       onClick={reset1}>reset</button>
       
    </div>
    <div className="card-actions justify-end">
     <button className="btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"><Link to="/product">Buy Now</Link></button> 
    </div>
    
  </div>
</div>
{/* 3 */}
<div className="card bg-base-100 w-96 shadow-xl mx-auto my-4">
  <figure>
    <img
      src="3.jpg"
      alt="Watch" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Watch</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    <div className="card-actions justify-end">
        <p className="text-lg font-semibold text-white">count:{Count2}</p>
        <p className='text-lg font-semibold text-red-700'>Price per item: ${price2}</p>
        <p className='text-lg font-bold text-red-700'>Total Price: ${totalPrice2}</p>
     
    
      <button className="btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition" onClick={increment2}>+</button>
      <button className="btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition" onClick={decrement2}>-</button>
      <button className="btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
       onClick={reset2}>reset</button>
       
    </div>
    <div className="card-actions justify-end">
     <button className="btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"><Link to="/product">Buy Now</Link></button> 
    </div>
    
  </div>
</div>
{/* 4 */}

     </section>
 
     
      

    </div>
  )
}

export default About
