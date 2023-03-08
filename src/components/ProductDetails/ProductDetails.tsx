import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Col, Image, Row, Spinner } from "react-bootstrap";
import "./ProductDetails.css";
import { ButtonLike } from "../common/WishButton/WishButton";

const ProductDetails = (props: any) => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState<any>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductDetails = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProductDetail(response.data);
      setLoading(false);
    };
    getProductDetails();
  }, [id]);

  return (
    <Container>
      {loading ? (
        <Container>
          <Row>
            <Col xs={12} className="spinner-center">
              <Spinner animation="border" variant="dark" />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container className="detail-container">
          <Row>
            <Col xs={12} lg={5}>
              <ButtonLike product={productDetail} />
              <Image src={productDetail.image} className="detail-image" />
            </Col>
            <Col xs={12} lg={5} className="detail-text">
              <h5 className="detail-title"> {productDetail.title} </h5>
              <h6 className="detail-category"> {productDetail.category}</h6>
              <h4 className="detail-price"> {`$${productDetail.price}`} </h4>
              <p className="detail-description">{productDetail.description}</p>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
};

export default ProductDetails;
