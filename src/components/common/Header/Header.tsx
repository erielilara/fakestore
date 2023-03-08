import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import {
  GiDiamondRing,
  GiVibratingSmartphone,
  GiClothes,
  GiLargeDress,
} from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";

const Header = (props: any) => {
  const categories = [
    { name: "Jewelery", category: "jewelery", icon: <GiDiamondRing /> },
    {
      name: "Electronics",
      category: "electronics",
      icon: <GiVibratingSmartphone />,
    },
    { name: `Men's clothing`, category: `men's clothing`, icon: <GiClothes /> },
    {
      name: `Women's clothing`,
      category: `women's clothing`,
      icon: <GiLargeDress />,
    },
  ];

  return (
    <Navbar collapseOnSelect expand="lg" className="nav-bar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          Fake Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="navbar-collapse">
          <Nav className="me-auto">
            {categories.map((product: any) => {
              return (
                <Nav.Link
                  as={Link}
                  to={`/${product.category}`}
                  key={product.category}
                  className="categories"
                >
                  {product.icon} {product.name}
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav>
            <Nav.Link className="categories" as={Link} to="/wishlist">
              <AiOutlineHeart /> Wishlist
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
