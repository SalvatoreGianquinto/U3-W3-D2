import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import HomePage from "./components/Homapage"
import "bootstrap/dist/css/bootstrap.min.css"
import ArticleDetail from "./components/ArticleDetail"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  )
}

export default App
