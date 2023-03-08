import { useState, useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./Category.css";
import { Link, useParams } from "react-router-dom";
import { ButtonLike } from "../common/WishButton/WishButton";
import axios from "axios";

const Category = () => {
  const { category } = useParams();

  const [categories, setCategories] = useState<any>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setCategories(response.data);
    };
    getCategory();
  }, [category]);

  return (
    <Container>
      <Row>
        {categories.map((product: any) => {
          return (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="card">
                <ButtonLike product={product} />
                <Link to={`/product/details/${product.id}`} className="link">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    className="card-img"
                  />
                  <Card.Body>
                    <Card.Title className="card-title">
                      {product.title}
                    </Card.Title>
                    <Card.Text className="card-price">
                      $ {product.price}
                    </Card.Text>
                    <Card.Text className="card-text">
                      {product.description}
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Category;
