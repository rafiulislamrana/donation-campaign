import { NavLink } from "react-router-dom";
import "./header.css"

const Header = () => {
    return (
        <div className="navbar flex-col md:flex-row py-8 max-w-6xl mx-auto">
            <div className="flex-1">
                <img src="https://i.ibb.co/L8sjbxc/Logo.png" alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 flex gap-2">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/donations">Donation</NavLink></li>
                    <li><NavLink to="/statistics">Statistics</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;