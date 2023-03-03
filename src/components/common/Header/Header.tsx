import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props: any) => {
  const sendCategory = (e: any) => {
    props.setSearch(e.target.value);
  };
  // enviar opcion de categoria al padre

  const categories = [
    { name: "Jewelery", category: "jewelery" },
    { name: "Electronics", category: "electronics" },
    { name: `Men's clothing`, category: `men's clothing` },
    { name: `Women's clothing`, category: `women's clothing` },
  ];

  return (
    <Navbar expand="lg" className="nav-bar">
      <Container>
        <Navbar.Brand className="brand" href="/">
          Fake Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {categories.map((product) => (
              <Nav.Link href={`${product.category}`} className="card-link">
                {product.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
