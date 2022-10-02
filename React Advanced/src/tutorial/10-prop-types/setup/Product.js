//PropTypes exports a range of validators 
//that can be used to make sure the data you receive is valid. 
import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({image, name, price}) => {
  // Checks if the image is there and then only gets the url
  const url = image && image.url;
  // console.log(name, image, price);
  return <article className='product'>
    {/* <h4>single product</h4>   */}
    <img src={url || defaultImage} alt={name || 'default name'} />
    <h4>{name}</h4>
    <p>{price || 3.99}</p>
  </article>;
};

// You can't use || or with image.url because javascript still complains
// that it is reading the property of url undefined 

//Setting up a propTypes property on component
Product.propTypes = {
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
}
// Product.defaultProps = {
//   name:'default name',
//   price:'3.99',
//   image:defaultImage
// }

export default Product;
