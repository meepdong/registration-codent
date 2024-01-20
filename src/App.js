import logo from "./CoDent.png";
import "./App.css";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Container style={{ width: '100%' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
