import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Main from "./Pages/Main";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/current" element={<Main/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
