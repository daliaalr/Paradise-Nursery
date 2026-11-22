
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.cartItems
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(updateQuantity({
      id: item.id,
      quantity: item.quantity + 1
    }));
  };

  const handleDecrease = (item) => {
    dispatch(updateQuantity({
      id: item.id,
      quantity: item.quantity - 1
    }));
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>

      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#245c35',
        padding: '18px 30px',
        color: 'white',
        marginBottom: '30px'
      }}>
        <h2>Paradise Nursery</h2>

        <div style={{
          display: 'flex',
          gap: '25px'
        }}>
          <Link to="/" style={{ color: 'white' }}>
            Home
          </Link>

          <Link to="/plants" style={{ color: 'white' }}>
            Plants
          </Link>

          <Link to="/cart" style={{ color: 'white' }}>
            🛒 Cart ({cartItems.reduce(
              (total, item) => total + item.quantity, 0
            )})
          </Link>
        </div>
      </nav>

      <h1 style={{
        textAlign: 'center',
        color: '#245c35'
      }}>
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <h2>Your cart is empty!</h2>

          <p>Start shopping and bring nature into your home.</p>

          <Link to="/plants">
            <button style={{
              backgroundColor: '#245c35',
              color: 'white',
              padding: '12px 25px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div style={{ maxWidth: '900px', margin: '30px auto' }}>

          {cartItems.map(item => (
            <div key={item.id} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              flexWrap: 'wrap',
              borderBottom: '1px solid #ddd',
              padding: '20px 0'
            }}>

              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '110px',
                  height: '110px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />

              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price.toFixed(2)}</p>

                <p>
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <button
                  onClick={() => handleDecrease(item)}
                  style={{ padding: '8px 12px', cursor: 'pointer' }}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => handleIncrease(item)}
                  style={{ padding: '8px 12px', cursor: 'pointer' }}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleDelete(item.id)}
                style={{
                  backgroundColor: '#c0392b',
                  color: 'white',
                  padding: '9px 15px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>

            </div>
          ))}

          <div style={{
            textAlign: 'right',
            marginTop: '30px'
          }}>
            <h2>
              Total Amount: ${totalAmount.toFixed(2)}
            </h2>

            <button
              onClick={handleCheckout}
              style={{
                backgroundColor: '#245c35',
                color: 'white',
                padding: '12px 25px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                margin: '15px 10px'
              }}
            >
              Checkout
            </button>

            <Link to="/plants">
              <button style={{
                backgroundColor: '#4caf50',
                color: 'white',
                padding: '12px 25px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Continue Shopping
              </button>
            </Link>
          </div>

        </div>
      )}
    </div>
  );
}

export default CartItem;
