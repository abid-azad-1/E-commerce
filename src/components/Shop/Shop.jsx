import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='shop-container'>
            {/* <div className='total-product'>
                <h2>Total Products (<span className='value'>{products.length}</span>)</h2>
            </div> */}
            <div className='products-container'>
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h3>order</h3>
            </div>

        </div>
    );
};

export default Shop;