import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

import { useTheme } from "../context/contextTheme";
import { NavLink, useLocation } from "react-router";
import { FaMoon, FaSun } from "react-icons/fa";

function MyNav({
  categoria,
  handleCategoria,
  handleSearch,
  searchValue,
  booksData,
}) {
  const { theme, toggleTheme, colorText, darkMode } = useTheme();
  const location = useLocation();
  const isDetailsPage = location.pathname.startsWith("/books/");
  const isAboutPage = location.pathname.startsWith("/About");
  return (
    <>
      <Navbar bg={theme} data-bs-theme={theme}>
        <Button
          variant={theme === "dark" ? "light" : "dark"}
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{ width: "35px", height: "35px", padding: 0 }}
          onClick={toggleTheme}
        >
          {darkMode ? (
            <FaSun className="text-warning" />
          ) : (
            <FaMoon className="text-white" />
          )}
        </Button>
        <Container fluid className="d-flex flex-wrap flex-sm-nowrap">
          <Navbar.Brand style={{ color: colorText }} as={NavLink} to="/">
            EpiBOOKS
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{ color: colorText }} as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: colorText }} as={NavLink} to="/About">
              About
            </Nav.Link>
            <Nav.Link style={{ color: colorText }} href="#">
              Browse
            </Nav.Link>
          </Nav>
          {!(isDetailsPage || isAboutPage) && (
            <div className="d-flex align-items-center gap-2">
              <select
                className="form-select "
                value={categoria}
                onChange={handleCategoria}
              >
                {Object.keys(booksData).map((cat) => {
                  console.log(cat);
                  return <option key={cat}>{cat}</option>;
                })}
              </select>

              {/* <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Ricerca</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Ricerca il libro "
                onChange={handleSearch}
                value={searchValue}
              />
              {/* </Form.Group>
    </Form> */}
            </div>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav;
