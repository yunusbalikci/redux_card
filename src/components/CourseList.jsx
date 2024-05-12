import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CourseItem from './CourseItem'
import { clearCart } from '../control/cardSlice'
function CourseList() {

    const dispatch = useDispatch();
    const {quantity,cartItems,total} = useSelector((store) => store.card)
    console.log(useSelector((store) => store.card));

  return (
    <div className='container'>
        {
            quantity < 1 ? (
                <div>
                    <p className='text-center text-4xl'>Sepetinizde Urun Bulunmuyor</p>
                </div>
            ) : (
                <div>
                    <h1 className='text-3xl mt-4'>Sepetim</h1>
                    <div>
                        {cartItems.map((item) => {
                            return <CourseItem {...item} />
                        })}
                    </div>
                    <hr />
                    <p>Toplam Tutar : {total} TL</p>
                    <button onClick={() => dispatch(clearCart())}>Temizle</button>
                </div>
            )
        }
    </div>
   
  )
}

export default CourseList
