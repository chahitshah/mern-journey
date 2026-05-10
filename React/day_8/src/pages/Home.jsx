import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard';

const Home = () => {

    const [products, setProducts] = useState([]);

    const getData = async () => {

        const response = await axios.get(
            'https://fakestoreapi.com/products'
        );

        setProducts(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        getData();
    }, [])

    return (

        <div className='flex flex-wrap gap-5 justify-center p-5'>

            {products.map((elem,idx) => {

                return (

                    <ProductCard key={idx} id={elem.id} image={elem.image} title={elem.title} price ={elem.price} />
                )
            })}

        </div>
    )
}

export default Home