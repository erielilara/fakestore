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

  const getCategory = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    console.log("response", response.data);
    setCategories(response.data);
  };
  getCategory();

  return (
    <Container>
      <Container className="card_container">
        <h1 className="title_1">{category}</h1>
        <Row xs={1} md={3} lg={4}>
          {categories.map((product: any) => (
            <Col key={product.id}>
              <Card key={product.id} className="card">
                <ButtonLike product={product} />
                <Link
                  to={`/product/details/${product.id}`}
                  className="card-link"
                >
                  <Card.Img
                    className="card-img"
                    src={product.image}
                    alt={product.name}
                  />
                  <Card.Title className="title">{product.title}</Card.Title>
                  <Card.Text id="text-1"> $ {product.price}</Card.Text>
                  <Card.Text className="text-3">
                    {product.description}
                  </Card.Text>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Category;
