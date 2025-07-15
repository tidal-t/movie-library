import "./sidebar.css"

export default function Siderbar() {
    return (
        <aside className='sidebar'>
            <div className="sidebar__account">
                <button className="sidebar_login_btn">
                    <div className="login_btn--icon"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#BDA3FF" d="M12 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8zM6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8zm2 10a3 3 0 0 0-3 3a1 1 0 1 1-2 0a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5a1 1 0 1 1-2 0a3 3 0 0 0-3-3H8z" /></svg>   </div>
                    login to your account</button>
            </div>
            <div className="border"></div>
            <div>
                <ul className="items--list">
                    <li>
                        <button className="sidebar_nav_item active">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 5.75v7.5h8.5v-7.5m-10.5 1.5L8 1.75l6.25 5.5" /></svg>
                            <span>home</span>
                        </button>
                    </li>
                    <li>
                        <button className="sidebar_nav_item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.466l-2.667-4H20l.001 4zM9.535 9L6.868 5h2.597l2.667 4H9.535zm5 0l-2.667-4h2.597l2.667 4h-2.597zM4 5h.465l2.667 4H4V5zm0 14v-8h16l.002 8H4z" /></svg>
                            <span>movies</span>
                        </button>
                    </li>
                    <li>
                        <button className="sidebar_nav_item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="20" height="15" x="2" y="7" rx="2" ry="2" /><path d="m17 2l-5 5l-5-5" /></g></svg>
                            <span>tv shows</span>
                        </button>
                    </li>
                    <li>
                        <button className="sidebar_nav_item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M244 56v64a12 12 0 0 1-24 0V85l-75.51 75.52a12 12 0 0 1-17 0L96 129l-63.51 63.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0L136 135l67-67h-35a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12Z" /></svg>
                            <span>trending</span>
                        </button>
                    </li>
                    <li>
                        <button className="sidebar_nav_item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" /></svg>
                            <span>your favourites</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
