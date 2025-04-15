import { useEffect, useState } from "react"
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import Article from "../types"

function HomePage() {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Risposta non valida dal server")
        }
      })
      .then((data) => {
        setArticles(data.results)
      })
      .catch((error) => {
        console.error("Errore nel fetch:", error)
      })
  }, [])

  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-center">🛰️ Spaceflight News</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {articles.map((article) => (
          <Col key={article.id}>
            <Card>
              <Card.Img
                variant="top"
                src={article.image_url}
                alt={article.title}
              />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Fonte: {article.news_site}
                </Card.Subtitle>
                <Card.Text>{article.summary.slice(0, 120)}...</Card.Text>
                <Link to={`/article/${article.id}`}>
                  <Button variant="primary">Leggi tutto</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HomePage
