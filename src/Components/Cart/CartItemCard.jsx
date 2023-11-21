import React from 'react'
import "./CartItemCard.css"
import { Link } from "react-router-dom";

//item,deleteCartItems
const CartItemCard = ({}) => {
  return (
    <div className="CartItemCard">
    <img src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ssa" />
    <div>
      <Link to={`/product/${1}`}>White T-Shirt</Link>
      <span>{`Price: ₹${500}`}</span>
      <p>Remove</p>
    </div>
  </div>

  )
}

export default CartItemCard