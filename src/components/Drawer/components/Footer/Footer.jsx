import "./footer.css"

export default function Footer() {
    return (
        <footer className='main_footer'>
            <div className="footer_wrapper">
                <div className='footer_content'>
                    <section>
                        <div className="logo_wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 512 512"><path fill="currentColor" d="M126.12 315.1A47.06 47.06 0 1 1 79.06 268h47.06Zm23.72 0a47.06 47.06 0 0 1 94.12 0v117.84a47.06 47.06 0 1 1-94.12 0Zm47.06-188.98A47.06 47.06 0 1 1 244 79.06v47.06Zm0 23.72a47.06 47.06 0 0 1 0 94.12H79.06a47.06 47.06 0 0 1 0-94.12Zm188.98 47.06a47.06 47.06 0 1 1 47.06 47.1h-47.06Zm-23.72 0a47.06 47.06 0 0 1-94.12 0V79.06a47.06 47.06 0 1 1 94.12 0ZM315.1 385.88a47.06 47.06 0 1 1-47.1 47.06v-47.06Zm0-23.72a47.06 47.06 0 0 1 0-94.12h117.84a47.06 47.06 0 1 1 0 94.12Z" /></svg>
                        </div>
                    </section>
                    <section >
                        <ul className="footer_list">
                            <li><a href="/movies">movies</a></li>
                            <li><a href="/trending">trending</a></li>
                        </ul>
                    </section>
                    <section style={{ textAlign: "end" }}>
                        <a className="footer_tel btn-base" href="https://t.me/tidal_now">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M228.88,26.19a9,9,0,0,0-9.16-1.57L17.06,103.93a14.22,14.22,0,0,0,2.43,27.21L72,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L165,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L231.77,35A9,9,0,0,0,228.88,26.19Zm-61.14,36L78.15,126.35l-49.6-9.73ZM88,200V152.52l24.79,21.74Zm87.53,8L92.85,135.5l119-85.29Z"></path></svg>
                        </a>
                    </section>
                </div>
                <div className="line_footer"></div>
                <div className="footer_copyright">
                    <p>© 2025 Tidal . all right reserved.</p>
                </div>
            </div>
        </footer>
    )
}
