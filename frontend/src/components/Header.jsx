import { NavLink } from "react-router";

export default function Header() {
    return (
        <div className="navbar bg-base-200 shadow-md">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">VSheet</a>
                <ul className="menu menu-horizontal px-2 mr-5">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-2 mr-5">
                    <li><NavLink to="/login">Login</NavLink></li>
                    <div className="divider divider-horizontal"></div>
                    <li><NavLink to="/signin">Sign in</NavLink></li>
                </ul>
            </div>
        </div>
    );
}