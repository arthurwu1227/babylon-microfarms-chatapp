import themeIcon from '../assets/theme-icon-white.png';

export const SideMenu = ({isOpen, toggleMenu, toggleTheme}) => {
    return (
        <aside className={`side-menu ${isOpen ? "open" : "closed"}`}>
            <div className="menu-tabs">
                <p>About</p>
                <p>Additional Support</p>
                <p>FAQ</p>
                <p>Feedback</p>
            </div>

            <div className="theme-toggle-container" onClick={toggleTheme}>
                <img src={themeIcon} alt="Theme button" />
            </div>
        </aside>
    );
}

export default SideMenu;