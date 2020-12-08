import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({product: { _id, name, image, rating, numReviews, price,countInStock}}) => {

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${_id}`}>
        <Card.Img src={image} variant="top" style={{width: "200px",height:"200px"}} />
      </Link>

      <Card.Body>
        <Link to={`/product/${_id}`}>
          <Card.Title as="div">
            <strong>{name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="h2">
          <Rating value={rating} text={`${numReviews} reviews`} />
        </Card.Text>

        <Card.Text as="h3"><strong>{price} dt</strong></Card.Text>
        <Card.Text as="h3"><strong style={{color:"green"}}>In Stock </strong>: {countInStock}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
