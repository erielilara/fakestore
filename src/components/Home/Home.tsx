import { useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card, Container, Image } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import { ButtonLike } from "../common/WishButton/WishButton";
import { SearchBar } from "../common/SearchBar/SearchBar";
import Header from "../common/Header/Header";

const Home = () => {
  const allproducts = useSelector((state: any) => state.products);
  const [search, setSearch] = useState("");

  let products: any = [];
  if (search.length >= 1) {
    products = allproducts.filter((product: any) => {
      return (
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    });
  } else {
    products = allproducts;
  }

  const randomImage = () => {
    let images = [
      "https://static.theceomagazine.net/wp-content/uploads/2022/06/29151016/luxury-jewellery.jpg",
      "https://media.istockphoto.com/id/1208148708/photo/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-cosmetics-on-a-light.jpg?s=612x612&w=0&k=20&c=9Y135GYKHLlPotGIfynBbMPhXNbYeuDuFzreL_nfDE8=",
    ];
    let random = Math.floor(Math.random() * images.length);
    return images[random];
  };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="mb-4">
          <SearchBar search={search} setSearch={setSearch} />
        </Col>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} className="left-Container">
              <h1 className="container-title">Fake Store</h1>
              <h2 className="container-subtitle">
                Simple, Easy and Convenient Shopping Experience.
              </h2>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="left-Container">
              {
                <Image
                  className="image-random"
                  src={randomImage()}
                  alt="fakeStore"
                />
              }
            </Col>
          </Row>
        </Container>

        {products.map((product: any) => {
          return (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
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

export default Home;
