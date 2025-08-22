import AuthLayout from "../layout/AuthLayout.jsx";
import Login from "../components/Login.jsx";

export default function LoginPage(){

    return (<AuthLayout component={<Login/>} />);

}