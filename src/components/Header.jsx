import React from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { store } from '../store';

function Header() {

    const {quantity}  = useSelector((store) => store.card)  

  return (
    <nav className='bg-cyan-600 py-2'>
      <div className='justify-between flex container'>
        <h3 className='mt-1 text-white font-bold text-xl'>Kurslarım</h3>
        <div className='flex'>
            <FaShoppingBasket className='text-white mt-4 w-8 h-8' />
            <div>
                <p className='text-white text-center pr-2 pl-2 mt-2 pt-0.5 rounded-xl  bg-red-500'>{quantity}</p>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
