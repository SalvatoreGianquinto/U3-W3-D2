import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Container, Card, Button } from "react-bootstrap"
import Article from "../types"

const ArticleDetail = function () {
  const { id } = useParams()
  const [article, setArticle] = useState<Article | null>(null)

  useEffect(() => {
    if (id) {
      fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error("Errore nel recupero dei dettagli")
          }
        })
        .then((data) => {
          setArticle(data)
        })
        .catch((error) => {
          console.log("Errore nel fetch:", error)
        })
    }
  }, [id])

  if (!article) {
    return <Container>Caricamento...</Container>
  }

  return (
    <Container className="mt-4">
      <h1>{article.title}</h1>
      <Card>
        <Card.Img variant="top" src={article.image_url} alt={article.title} />
        <Card.Body>
          <Card.Title>Dettagli Articolo</Card.Title>
          <Card.Text>
            <strong>Fonte:</strong> {article.news_site}
            <br />
            <strong>Autori:</strong>{" "}
            {article.authors.map((a) => a.name).join(", ") || "Sconosciuto"}
            <br />
            <strong>Pubblicato il:</strong>{" "}
            {new Date(article.published_at).toLocaleDateString()}
            <br />
            <strong>Riassunto:</strong> {article.summary}
            <br />
            <strong>Ultimo aggiornamento:</strong>{" "}
            {new Date(article.updated_at).toLocaleDateString()}
          </Card.Text>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Visita il link</Button>
          </a>
        </Card.Body>
      </Card>
      <Link to={"/"}>TORNA ALLA HOME</Link>
    </Container>
  )
}

export default ArticleDetail
