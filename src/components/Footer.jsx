import Container from "react-bootstrap/Container";
import { Link } from "react-router";
function footer() {
  return (
    <>
      <footer className=" py-3  border-top bg-dark ">
        <Container
          fluid
          className="d-flex flex-wrap justify-content-between align-items-center"
        >
          <p className="col-md-4 mb-0 text-white">© 2025 EpiBooks </p>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <Link className="nav-link px-2 text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-2 text-white" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-2 text-white">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-2 text-white">FAQs</Link>
            </li>
          </ul>
        </Container>
      </footer>
    </>
  );
}

export default footer;
