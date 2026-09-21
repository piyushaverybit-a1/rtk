import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Create from "./components/Create";
import Read from "./components/Read";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route exact path="/" element={<Create />} />
            <Route path="/:id" element={<Create />} />
            <Route exact path="/read" element={<Read />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;