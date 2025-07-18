import "./footer.css"

export default function Footer() {
    return (
        <footer className='main_footer'>
            <div className="footer_wrapper">
                <div className='footer_content'>
                    <div>
                        <div className="logo_wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 512 512"><path fill="currentColor" d="M126.12 315.1A47.06 47.06 0 1 1 79.06 268h47.06Zm23.72 0a47.06 47.06 0 0 1 94.12 0v117.84a47.06 47.06 0 1 1-94.12 0Zm47.06-188.98A47.06 47.06 0 1 1 244 79.06v47.06Zm0 23.72a47.06 47.06 0 0 1 0 94.12H79.06a47.06 47.06 0 0 1 0-94.12Zm188.98 47.06a47.06 47.06 0 1 1 47.06 47.1h-47.06Zm-23.72 0a47.06 47.06 0 0 1-94.12 0V79.06a47.06 47.06 0 1 1 94.12 0ZM315.1 385.88a47.06 47.06 0 1 1-47.1 47.06v-47.06Zm0-23.72a47.06 47.06 0 0 1 0-94.12h117.84a47.06 47.06 0 1 1 0 94.12Z" /></svg>
                        </div>
                    </div>
                    <div>
                        <ul className="footer_list">
                            <li><a href="/movies">movies</a></li>
                            <li><a href="/trending">trending</a></li>
                        </ul>
                    </div>
                    <div className="footer_email">darvishitaha@gmail.com</div>
                </div>
                <div className="line_footer"></div>
                <div className="footer_copyright">
                    <p>© 2025 Tidal . all right reserved.</p>
                </div>
            </div>
        </footer>
    )
}
