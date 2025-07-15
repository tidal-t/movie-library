import { useState } from 'react';
import './header.css'
import { useLocation, useNavigate } from 'react-router-dom';
export default function Header() {
  const [search, setSearch] = useState("")
  const location = useLocation();
  const navigate = useNavigate();

  function handleSearchKey(event) {
    if (event.key === "Enter") {
      const params = new URLSearchParams(location.search);
      params.set("q", search);

      navigate(`${location.pathname.includes("search") ? location.pathname : "/search" + location.pathname}?${params.toString()}`);
    }
  }
  return (
    <header className="main__header">
      <div className="header--group">
        <div>
          <ul className="header--options">
            <li>
              <a className="header_nav_item" href="#test">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
                Movies</a>
            </li>
            <li>
              <a className="header_nav_item" href="#test">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                Trending</a>
            </li>
          </ul>
        </div>
        <div className="search_switch">
          <div className="header--search-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="var(--muted-foreground)" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" /></svg>
            <input onKeyDown={(e) => { handleSearchKey(e) }} onChange={(e) => { setSearch(e.target.value) }} value={search} type="text" placeholder="search here..." />
          </div>
          <div className="switch_theme">
            <button className="btn switch_theme--btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M19.524 14.721h.008c.644 0 1.275-.059 1.886-.172l-.063.01c-1.146 4.122-4.866 7.098-9.281 7.098h-.058h.003c-5.343-.006-9.673-4.336-9.678-9.679v-.001A9.76 9.76 0 0 1 9.37 2.665l.069-.017a10.013 10.013 0 0 0-.162 1.819v.007c.005 5.658 4.59 10.243 10.247 10.248h.001zM12.006.47a1.162 1.162 0 0 0-1.043-.465h.005C4.813.596.034 5.724 0 11.976v.003C.008 18.614 5.385 23.991 12.019 24h.061c6.243 0 11.367-4.786 11.905-10.889l.003-.045a1.168 1.168 0 0 0-.423-1.009l-.002-.002a1.164 1.164 0 0 0-1.084-.213l.008-.002l-.524.156a7.735 7.735 0 0 1-2.435.385h-.007a7.912 7.912 0 0 1-7.903-7.903V4.46c0-1.03.198-2.014.558-2.915l-.019.053a1.169 1.169 0 0 0-.155-1.134l.002.003z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
