import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Root from "./components/Root"
import Work from "./components/Work"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path = "/" element = {<Root/>}>
      <Route index element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
      <Footer/>
    </>
  )
}

export default App
