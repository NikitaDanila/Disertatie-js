
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container className="footer fixed-bottom">
        <Row>
          <Col className="text-center py-3">Copyright &copy; Nikita</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
