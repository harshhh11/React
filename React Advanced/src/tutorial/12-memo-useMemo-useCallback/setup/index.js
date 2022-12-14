import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders
// React.memo doesn't re-renders the component if the value of the prop doesn't change  
// useCallback doesn't re-renders the component if the value of the function doesn't change // returns a memoized function 
//useMemo memorizes a value
const calcMostExpensive = (data) => {
  console.log('hello');
  return data.reduce((total, item) => {
    const price = item.fields.price;
    if(price >= total) {
      total = price;
    }
    return total;
  },0) / 100
}

const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart])


  const mostExpensive = useMemo(() => calcMostExpensive(products), [products])
  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{marginTop: '3rem'}}>
        Cart: {cart}
      </h1>
      <h1>Most Expensive: ${mostExpensive}</h1>
      <BigList products={products}  addToCart={addToCart}/>
    </>
  )
}

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log('Big list called')
  })
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product} addToCart={addToCart}></SingleProduct>
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count("single list called", );
  });
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  )
}
export default Index
