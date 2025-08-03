import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '../context/contextTheme';


function About() {
  const { theme, colorText } = useTheme(); 
  

  return (
    <div className={ `${theme==='dark' ? 'bg-dark':'bg-light'} ${colorText} py-5`}>
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <h2 className="mb-3">La Nostra Raccolta di Libri</h2>
            <p>
              Nata nel <strong>2024</strong>, la nostra raccolta include oltre <strong>600 libri</strong> suddivisi in
              quattro generi principali: <strong>Fantasy</strong>, <strong>Horror</strong>, <strong>Romance</strong> e <strong>Science Fiction</strong>.
            </p>
            <p>
              La collezione è pensata per offrire storie affascinanti, emozionanti e coinvolgenti
              a lettori di ogni età e gusto. Ogni libro è selezionato con cura per qualità, originalità e passione narrativa.
            </p>
          </Col>
        </Row>

        <Row className="text-center">
          <Col xs={6} md={3}>
            <h4>Fantasy</h4>
            <p>Draghi, magie e mondi epici</p>
          </Col>
          <Col xs={6} md={3}>
            <h4>Horror</h4>
            <p>Brividi e misteri oscuri</p>
          </Col>
          <Col xs={6} md={3}>
            <h4>Romance</h4>
            <p>Amori intensi e relazioni profonde</p>
          </Col>
          <Col xs={6} md={3}>
            <h4>Sci-Fi</h4>
            <p>Futuro, tecnologia e universi alternativi</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;