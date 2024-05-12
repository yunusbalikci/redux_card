import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { removeItem , increaseQuantity , decreaseQuantity } from '../control/cardSlice';

function CourseItem({id,name,price,quantity,image}) {
  
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <div className='flex justify-between border-2 rounded-lg m-2 h-32 p-3 shadow-md hover:shadow-lg duration-200 bg-gray-50'>
        <img src={image} className='w-32 mt-2 h-20 ' alt="" />
        <div className='font-bold w-20'>
            <h3>{name}</h3>
            <p className='text-red-500'>{price} TL</p>
            <div className='flex gap-2 mt-2'>
                <FaPlus className='text-green-500 mt-1 cursor-pointer' onClick={() => dispatch(increaseQuantity(id))} />
                {quantity}
                <FaMinus className='text-red-500 mt-1 cursor-pointer' onClick={() => dispatch(decreaseQuantity(id))} />
            </div>
            <div>
                <button onClick={() => dispatch(removeItem(id))} className='bg-red-500 text-white mt-2 w-10 rounded-xl'>Sil</button>
            </div>
        </div>
       
      </div>
    </div>
  )
}

export default CourseItem
