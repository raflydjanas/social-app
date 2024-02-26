import FormLogin from "../components/Fragments/FormLogin"
import AuthLayouth from "../components/Layout/AuthLayouth"


const LoginPage = () => {

    return (

        <AuthLayouth title='Login' type='login'>
            <FormLogin />
        </AuthLayouth>
    )
}

export default LoginPage;