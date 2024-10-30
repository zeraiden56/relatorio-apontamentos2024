import Contact from "./pages/Contact";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Home from "./pages/Home";

export const routes = [
  {
    title: "Home",
    url: "/",
    component: Home,
  },
  {
    title: "About",
    url: "/about",
    component: About,
  },
  {
    title: "Settings",
    url: "/settings",
    component: Settings,
  },
  {
    title: "Contact",
    url: "/contact",
    component: Contact,
  },
];
