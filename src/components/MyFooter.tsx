import { Container, Row, Col } from "react-bootstrap"

function MyFooter() {
  return (
    <footer className="bg-info text-secondary py-4 mt-5">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Spaceflight News</p>
            <p>
              Built with{" "}
              <a href="https://reactjs.org" className="text-secondary">
                React
              </a>{" "}
              &amp;{" "}
              <a
                href="https://react-bootstrap.github.io"
                className="text-secondary"
              >
                React Bootstrap
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter
