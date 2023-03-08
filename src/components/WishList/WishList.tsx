import { useSelector } from "react-redux";
import { Row, Col, Card, Container, Image } from "react-bootstrap";
import "./WishList.css";
import { Link } from "react-router-dom";

const WishList = () => {
  const wishList = useSelector((state: any) => state.wishList);
  const uniqueWishList = wishList.filter(
    (wishList: any, index: any, self: any) =>
      index === self.findIndex((t: any) => t.id === wishList.id)
  );
  return (
    <Container>
      {uniqueWishList.length !== 0 ? (
        <Col xs={12} sm={12} md={12} lg={12} className="mb-4">
          <h1 className="wishlist-n">Your Wishlist</h1>
        </Col>
      ) : null}
      <Row>
        {uniqueWishList.length === 0 ? (
          <Col xs={12} sm={12} md={12} lg={12} className="mb-4">
            <h1 className="wishlist-title">Your wishlist is empty</h1>
          </Col>
        ) : (
          uniqueWishList.map((product: any) => {
            return (
              <Col
                key={product.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-4"
              >
                <Card className="card">
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
          })
        )}
      </Row>
    </Container>
  );
};

export default WishList;
