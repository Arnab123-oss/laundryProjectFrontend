import React from "react";
import "./cart.css";
import CartItemCard from "./CartItemCard";
import { useNavigate } from "react-router-dom";
import { MdRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  const isAuthenticated = true;
  const navigate = useNavigate();

  const increaseQuantity = (id, quantity, stock) => {
    console.log("fuck");
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
  };

  const decreaseQuantity = (id, quantity) => {
    console.log("fuck");
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
  };

  const deleteCartItems = (id) => {};
  const checkOutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <>
      {1 === 0 ? (
        <div className="emptyCart">
          <MdRemoveShoppingCart />

          <p>No Product in Your Cart</p>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {/* For Testing without using map I manually Dfo 2 time this div */}

            <div className="cartContainer">
              <CartItemCard />
              {/* item={item} deleteCartItems={deleteCartItems}  */}
              <div className="cartInput">
                <button onClick={() => decreaseQuantity(0, 1)}>-</button>
               
                  <input type="number" value={0} readOnly />
         

                <button onClick={() => increaseQuantity(0, 2, 5)}>+</button>
              </div>
              <p className="cartSubtotal">{`₹${50 * 25}`}</p>
            </div>
            <div className="cartContainer">
              <CartItemCard />
              {/* item={item} deleteCartItems={deleteCartItems}  */}
              <div className="cartInput">
                <button onClick={() => decreaseQuantity(0, 1)}>-</button>
                <input type="number" value="5" readOnly />
                <button onClick={() => increaseQuantity(0, 2, 5)}>+</button>
              </div>
              <p className="cartSubtotal">{`₹${50 * 25}`}</p>
            </div>
            <div className="cartContainer">
              <CartItemCard />
              {/* item={item} deleteCartItems={deleteCartItems}  */}
              <div className="cartInput">
                <button onClick={() => decreaseQuantity(0, 1)}>-</button>
                <input type="number" value="5" readOnly />
                <button onClick={() => increaseQuantity(0, 2, 5)}>+</button>
              </div>
              <p className="cartSubtotal">{`₹${50 * 25}`}</p>
            </div>
            {/* For Testing without using map I manually Dfo 2 time this div */}
            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`₹${5000}`}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <Link to={isAuthenticated ? "/shipping" : "/login"}>
                  Check Out
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
