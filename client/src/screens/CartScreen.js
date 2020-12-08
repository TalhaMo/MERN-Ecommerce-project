import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../store/actions/cartAction';

const CartScreen = ({ match, location: { search }, history }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const productId = match.params.id;

  const qty = search ? Number(search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const handleRemoveFromCart= (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    history.push('/login?redirect=shipping');
  };

  return (
    <Row>
      {/* Added products section */}
      <Col md={8}>
        <h1>Shopping Cart</h1>

        {cartItems.length !== 0 ? (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>

                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>

                  <Col md={2}>{item.price} dt</Col>

                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      // Call addToCart again to set changed qty
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {/* Form an array like [0, 1, 2, 3, 4] and iterate it */}
                      {[...Array(item.countInStock).keys()].map((x) => (
                        // Show qty 1 to 5, not 0 to 4
                        <option key={x + 1} value={x + 1}>
                          {/* Visible Qty number */}
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>

                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => handleRemoveFromCart(item.product)}
                    >
                      <i className="fas fa-trash" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <Message>
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        )}
      </Col>

      {/* Cart subtotal section */}
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                {/* Accumulator and current cart item parameters. Reduces the array to a single value. Makes the calculations and the return value is stored in Subtotal acc. */}
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)} dt
            </ListGroup.Item>

            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
