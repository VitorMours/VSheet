export default function Header() {
    return (
        <div className="navbar bg-base-200 shadow-md">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">VSheet</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-2 mr-5">
                    <li><a href="#">Login</a></li>
                    <div className="divider divider-horizontal"></div>
                    <li><a href="#">Sign in</a></li>
                </ul>
            </div>
        </div>
    );
}