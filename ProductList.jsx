
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from './CartSlice';

const plants = [
  // Air Purifying Plants
  {
    id: 1,
    name: 'Snake Plant',
    price: 25,
    category: 'Air Purifying Plants',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400'
  },
  {
    id: 2,
    name: 'Peace Lily',
    price: 30,
    category: 'Air Purifying Plants',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400'
  },
  {
    id: 3,
    name: 'Spider Plant',
    price: 20,
    category: 'Air Purifying Plants',
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400'
  },
  {
    id: 4,
    name: 'Aloe Vera',
    price: 18,
    category: 'Air Purifying Plants',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 5,
    name: 'Areca Palm',
    price: 35,
    category: 'Air Purifying Plants',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400'
  },
  {
    id: 6,
    name: 'Boston Fern',
    price: 28,
    category: 'Air Purifying Plants',
    image: 'https://images.unsplash.com/photo-1597055181300-a8b4be4f4a2b?w=400'
  },

  // Succulent Plants
  {
    id: 7,
    name: 'Jade Plant',
    price: 22,
    category: 'Succulent Plants',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 8,
    name: 'Echeveria',
    price: 15,
    category: 'Succulent Plants',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400'
  },
  {
    id: 9,
    name: 'Haworthia',
    price: 19,
    category: 'Succulent Plants',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400'
  },
  {
    id: 10,
    name: 'String of Pearls',
    price: 27,
    category: 'Succulent Plants',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400'
  },
  {
    id: 11,
    name: 'Zebra Cactus',
    price: 17,
    category: 'Succulent Plants',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 12,
    name: 'Burro Tail',
    price: 24,
    category: 'Succulent Plants',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400'
  },

  // Decorative Plants
  {
    id: 13,
    name: 'Monstera',
    price: 45,
    category: 'Decorative Plants',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400'
  },
  {
    id: 14,
    name: 'Fiddle Leaf Fig',
    price: 55,
    category: 'Decorative Plants',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 15,
    name: 'Rubber Plant',
    price: 38,
    category: 'Decorative Plants',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400'
  },
  {
    id: 16,
    name: 'Calathea',
    price: 32,
    category: 'Decorative Plants',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400'
  },
  {
    id: 17,
    name: 'Philodendron',
    price: 40,
    category: 'Decorative Plants',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400'
  },
  {
    id: 18,
    name: 'Pothos',
    price: 26,
    category: 'Decorative Plants',
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400'
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.cartItems
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    'Air Purifying Plants',
    'Succulent Plants',
    'Decorative Plants'
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>

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

        <div style={{ display: 'flex', gap: '25px' }}>
          <Link to="/" style={{ color: 'white' }}>Home</Link>
          <Link to="/plants" style={{ color: 'white' }}>Plants</Link>
          <Link to="/cart" style={{ color: 'white' }}>
            🛒 Cart ({cartCount})
          </Link>
        </div>
      </nav>

      <h1 style={{ textAlign: 'center', color: '#245c35' }}>
        Our Houseplants
      </h1>

      <p style={{ textAlign: 'center' }}>
        Discover beautiful plants for your home.
      </p>

      {categories.map(category => (
        <section key={category} style={{ marginTop: '40px' }}>
          <h2 style={{
            color: '#245c35',
            borderBottom: '2px solid #245c35',
            paddingBottom: '10px'
          }}>
            {category}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '20px'
          }}>
            {plants
              .filter(plant => plant.category === category)
              .map(plant => {
                const isAdded = cartItems.some(
                  item => item.id === plant.id
                );

                return (
                  <div key={plant.id} style={{
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    padding: '15px',
                    textAlign: 'center',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                  }}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      style={{
                        width: '100%',
                        height: '170px',
                        objectFit: 'cover',
                        borderRadius: '8px'
                      }}
                    />

                    <h3>{plant.name}</h3>

                    <p>Price: ${plant.price.toFixed(2)}</p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isAdded}
                      style={{
                        backgroundColor: isAdded ? '#999' : '#245c35',
                        color: 'white',
                        padding: '10px 18px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: isAdded ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {isAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
