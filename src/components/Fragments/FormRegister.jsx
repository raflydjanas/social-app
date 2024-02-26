import FormInput from "../Elements/Input/FormInput";
import Button from "../Elements/Button/IndexButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const username = e.target.text.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
    
            if(username && email && password) {
                localStorage.setItem('userName', username);
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
    
                let URl = 'https://api-mini-socmed.notneet.my.id/users';
                let payload = {
                    name: username,
                    email: email,
                    password: password
                }

                const response = await axios.post(URl, payload);
                if(response) {
                    navigate('/editProfile');
                } else {
                    alert('failed to submit')
                }
    
            } else {
                alert('place enter your username, email and password')
            }

        } catch (error) {
            alert(error);
        }
    }

    return (
        <form onSubmit={handleRegister}>
            <FormInput 
                label='Username'
                name='text'
                type='text'
                placeholder='enter your username here'                
            />
            <FormInput 
                label='Email'
                name='email'
                type='email'
                placeholder='enter your email'                
            />
            <FormInput 
                label='Password'
                name='password'
                type='password'
                placeholder='enter your password'                
            />
            <Button classname='bg-purple w-full' type="submit">
                Register
            </Button>
        </form>
    )
}

export default FormRegister;