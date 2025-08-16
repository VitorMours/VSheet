import Header from "../components/Header.jsx";
import CompactFooter from "../components/CompactFooter.jsx";
import Login from "../components/Login.jsx"
export default function AuthLayout() {
    return (
        <div className="min-h-screen">
            <Header />
            <Login/>
            <CompactFooter />
        </div>
    );
}