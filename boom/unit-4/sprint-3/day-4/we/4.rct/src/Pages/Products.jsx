import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllProducts } from './api';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await getAllProducts();
      setProducts(result.data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <Row>
        {loading ? (
          <Spinner animation="border" />
        ) : (
          products.map(product => (
            <Col key={product._id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Link to={`/products/${product._id}`} className="btn btn-primary">
                    View Product
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default AllProducts;
