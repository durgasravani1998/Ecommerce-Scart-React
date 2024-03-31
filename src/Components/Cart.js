import React, { useContext } from 'react';
import '../Cart.css';
import { PRODUCTS } from './Products';
import { ShopContext } from '../Context/Shop-Context';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

 const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout }= useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();
    

  return (
    <div className='cart'>
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className='cart'>
            {PRODUCTS.map((product)=>{
                if(cartItems[product.id] !==0){
                    return <CartItem data={product}/>;
                }
            })}

        </div>
        {totalAmount>0 ?(
        <div className='checkout'>
            <p>Subtotal: Rs.{totalAmount}</p>
            <button onClick={()=>navigate("/")}>Continue Shopping</button>
            <button onClick={()=>{
                checkout();
                navigate("/checkout");
            }

            }>{""}Checkout{""}</button>
        </div>
        ):(
            <h1> Your Cart is Empty</h1>
        )}
        

    </div>
  )
}

export default Cart