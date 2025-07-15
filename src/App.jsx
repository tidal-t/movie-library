import { Routes, Route } from "react-router-dom";
import './theme/main.css'
import './theme/theme.css'
import Home from "./pages/Home";
import Search from "./pages/Search";
import Drawer from './components/Drawer'
import Details from './components/Drawer/components/Details'
import Cast from './components/Drawer/components/Cast'
import Images from './components/Drawer/components/Images'
import SimilarList from "./components/Drawer/components/SimilarList";




export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path=":type/:id" element={<Drawer />} >
          <Route index element={<Details />} />
          <Route path="cast" element={<Cast />} />
          <Route path="images/:imageType?" element={<Images />} />
          <Route path="similar/:page?" element={<SimilarList />} />
        </Route>
        <Route path="search" element={<Search />} />
      </Routes>
    </>
  )
}
