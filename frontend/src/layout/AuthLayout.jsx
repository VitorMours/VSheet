import Header from "../components/Header.jsx";
import CompactFooter from "../components/CompactFooter.jsx";

export default function AuthLayout({ component }) {
    return (
        <div className="min-h-screen">
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-base-300">
                {component}
            </div>
            <CompactFooter />
        </div>
    );
}