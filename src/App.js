import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Detail from "./pages/Detail"
import Home from "./pages/Home"
import Locations from "./pages/Locations"
import LocationDetail from "./pages/LocationDetail"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:data" element={<Detail />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/location/:data" element={<LocationDetail />} />
      </Routes>
    </Router>
  )
}

export default App