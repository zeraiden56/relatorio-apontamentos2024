import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

// import Navbar from "./components/Navbar";
// import AppSidebar from "./components/AppSidebar";
import About from "./pages/About";
import { TableDemo } from "./components/TableDemo";
import "./App.css";
import { Input } from "@/components/ui/input";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Call a server global function here and handle the response with .then() and .catch()
    google.script.run
      .withSuccessHandler((response) => {
        console.log(response);
      })
      .withFailureHandler((error) => {
        console.error(error);
      })
      .getSheetData();
  }, []);
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Input />
        <TableDemo />
      </div>
      <Router>
        <div>
          {/* <Navbar />
          <AppSidebar /> */}
          <h1>Vite + React</h1>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more.
          </p>
        </div>
      </Router>
    </>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar';
// // import Home from './pages/Home';
// import About from './pages/About';
// // import Counter from './pages/Counter';
// import "./App.css";

// // function App() {
// //   return (
// //     // <div>
// //     //   <h1>Vite + React</h1>
// //     // </div>
//     <Router>
//       <div>
//         <Navbar />
//         <h1>Vite + React</h1>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           {/* <Route path="/counter" element={<Counter />} /> */}
//         </Routes>
//         <p className="read-the-docs">
//           Click on the Vite and React logos to learn more.
//         </p>
//       </div>
//     </Router>
// //   );
// // }

// // export default App;
