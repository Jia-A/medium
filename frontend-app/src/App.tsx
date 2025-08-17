import { Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth"
import Blog from "./pages/Blog"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Auth />}/>
      <Route path="/blog" element={<Blog />}/>
    </Routes>
  )
}

export default App
