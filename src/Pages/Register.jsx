import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouth from "../components/Layout/AuthLayouth";


const RegisterPage = () => {
    return (
        <AuthLayouth title='Register' type='register'>
            <FormRegister />
        </AuthLayouth>
    )
}

export default RegisterPage;