import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { routes } from "@/routes";
import "./App.css";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {routes.map((route) => (
            <Route path={route.url} element={<route.component />} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
