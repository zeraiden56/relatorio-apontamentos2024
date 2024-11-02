import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";
import Home from "./pages/Home";

export const routes = [
  {
    title: "Home",
    url: "/",
    component: Home,
  },
  {
    title: "Tasks",
    url: "/Tasks",
    component: Tasks,
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

  {
    title: "Profile",
    url: "/profile",
    component: Profile,
  },
];
