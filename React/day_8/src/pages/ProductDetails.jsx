import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams();

    const [productsdetails, setproductsdetails] = useState({});

    const getData = async () => {

        const response = await axios.get(
            `https://fakestoreapi.com/products/${params.id}`
        );

        setproductsdetails(response.data);
    }

    useEffect(() => {
        getData();
    }, [params.id])

    
  return (

  <div className='min-h-screen flex justify-center items-center bg-gray-100 p-5'>

    <div className='bg-black text-white max-w-4xl w-full rounded-xl p-6 flex flex-col md:flex-row gap-8'>

      <div className='flex justify-center items-center bg-white rounded-lg p-5 md:w-1/2'>
        <img
          className='h-[300px] object-contain'
          src={productsdetails.image}
          alt=""
        />
      </div>

      <div className='flex flex-col gap-4 md:w-1/2'>

        <h2 className='text-2xl font-bold'>
          {productsdetails.title}
        </h2>

        <p className='text-3xl font-bold text-green-400'>
          ${productsdetails.price}
        </p>

        <p className='text-sm leading-6 text-gray-300'>
          {productsdetails.description}
        </p>

        <p className='bg-white text-black px-3 py-1 rounded-md w-fit'>
          {productsdetails.category}
        </p>

        <button className='bg-white text-black px-5 py-2 rounded-md w-fit hover:bg-gray-300 transition'>
          Buy Now
        </button>

      </div>

    </div>

  </div>
)
}

export default ProductDetails
