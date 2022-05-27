import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Detail from "./pages/Detail"
import Home from "./pages/Home"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:data" element={<Detail />} />
      </Routes>
    </Router>
  )
}

export default App