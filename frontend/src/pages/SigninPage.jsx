import AuthLayout from "../layout/AuthLayout.jsx";
import Signin from "../components/Signin.jsx";

export default function SigninPage(){

    return (<AuthLayout component={<Signin/>} />);

}