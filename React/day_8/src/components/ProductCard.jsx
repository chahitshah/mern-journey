import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { detaildatacontext } from '../context/CartContext'

const ProductCard = (props) => {

    const [cart, setcart] = useContext(detaildatacontext);
  return (
    <Link to={`/products/${props.id}`}>
    <div
                    
                        className='bg-black w-[220px] h-[320px] rounded-lg p-3'
                    >

                        <div className='flex flex-col gap-3 items-center text-white'>

                            <img
                                className='h-[150px] w-[150px] object-contain bg-white rounded-md'
                                src={props.image}
                                alt=""
                            />

                            <h2 className='text-sm text-center line-clamp-2'>
                                {props.title}
                            </h2>

                            <p className='text-lg font-bold'>
                                ${props.price}
                            </p>

                            <button onClick={(e)=>{
                                e.preventDefault();
                                setcart([...cart,props])
                            }} className='bg-white text-black px-4 py-1 rounded-md'>
                                Buy
                            </button>

                        </div>

    </div>
    </Link>
  )
}

export default ProductCard
