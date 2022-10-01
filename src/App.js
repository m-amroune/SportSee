import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Aside />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
