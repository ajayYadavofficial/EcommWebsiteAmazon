import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
    
        <div className='checkout_left'>
            <img className='checkout_ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/Jupiter22/Mainevent/diamond/pc_ohl_1.gif' />
            <div>

                <h3>Hey,{user?.email}</h3>
                <h2  className='checout_title'>
                    Your shopping Basket
                    {/* Checkout Products will render here */}
                </h2>
                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
        </div>

        <div className='checout_right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout