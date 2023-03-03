import { useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card, Container, Image } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import { ButtonLike } from "../common/WishButton/WishButton";
import { SearchBar } from "../common/SearchBar/SearchBar";

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
  //random clothes image from products
  const randomImage = () => {
    let images = [
      "https://img.freepik.com/premium-photo/nice-young-good-looking-man-stylish-blue-jeans-clothes-tile-street-european-guy-with-trendy-hairstyle-fashion-youth-denim-outfit-sits-city-near-road-fashionable-casual-menswear_338491-9081.jpg?w=360",
      "https://static.theceomagazine.net/wp-content/uploads/2022/06/29151016/luxury-jewellery.jpg",
      "https://media.istockphoto.com/id/1208148708/photo/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-cosmetics-on-a-light.jpg?s=612x612&w=0&k=20&c=9Y135GYKHLlPotGIfynBbMPhXNbYeuDuFzreL_nfDE8=",
    ];
    let random = Math.floor(Math.random() * images.length);
    return images[random];
  };

  return (
    <Container>
      <SearchBar search={search} setSearch={setSearch} />
      <Container>
        <Row xs={1} md={8} lg={12}>
          <Col xs={12} md={4} lg={6} className="left-Container">
            <h1 className="container-title">Fake Store</h1>
            <h2 className="container-subtitle">
              Simple, Easy and Convenient Shopping Experience.
            </h2>
          </Col>
          <Col xs={12} md={4} lg={6} className="left-Container">
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
      <Container>
        <Row xs={2} md={3} lg={4}>
          {products.map((product: any) => (
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

export default Home;
