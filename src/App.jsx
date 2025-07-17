import { Routes, Route, useLocation } from "react-router-dom";
import './theme/main.css'
import './theme/theme.css'
import Home from "./pages/Home";
import Search from "./pages/Search";
import Drawer from './components/Drawer'
import Details from './components/Drawer/components/Details'
import Cast from './components/Drawer/components/Cast'
import Images from './components/Drawer/components/Images'
import SimilarList from "./components/Drawer/components/SimilarList";
// import FullPage from './components/FullPage'; // اینو اضافه کن اگه نداری

export default function App() {
  const location = useLocation();
  const state = location.state;
  const backgroundLocation = state?.backgroundLocation;

  return (
    <>
      {/* روت‌های اصلی */}
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        {/* <Route path=":type/:id" element={<FullPage />}>
          <Route index element={<Details />} />
          <Route path="cast" element={<Cast />} />
          <Route path="images/:imageType?" element={<Images />} />
          <Route path="similar/:page?" element={<SimilarList />} />
        </Route> */}
      </Routes>

      {/* اگر از صفحه قبلی اومدیم، دراور رو باز کن */}
      {backgroundLocation && (
        <Routes>
          <Route path=":type/:id" element={<Drawer />}>
            <Route index element={<Details />} />
            <Route path="cast" element={<Cast />} />
            <Route path="images/:imageType?" element={<Images />} />
            <Route path="similar/:page?" element={<SimilarList />} />
          </Route>
        </Routes>
      )}
    </>
  )
}
