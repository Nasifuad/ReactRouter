import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Github, { githubInfoLoader } from "./Components/Github/Github";
import User from "./Components/User/User";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route path="user/:id" element={<User />} />
      {/* <Route
        path="*"
        element={
          <h1 className="text-4xl p-10 text-red-500  font-bold line-through">
            404 Not fucking found u dumbfuck
          </h1>
        }
      /> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
