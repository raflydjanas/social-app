import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../../services/auth.services';
import Button from '../Elements/Button/IndexButton';
import FormInput from '../Elements/Input/FormInput';

const FormLogin = () => {
   const navigate = useNavigate('')
   const [messageErr, setMessageErr] = useState('');

   const handleLogin = async (e) => {
      e.preventDefault();

      try {
         const data = {
            email: e.target.email.value,
            password: e.target.password.value,
         }

         login(data, (status, res) => {
            if(status) {
               localStorage.setItem('token', res);
               navigate('/home');
            } else {
               setMessageErr(res.response.data.message);
            }
         })

      } catch (error) {
         console.log(error);
      }
   };

   return (
      <form onSubmit={handleLogin}>
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
         <Button classname='bg-purple w-full' type='submit'>
            Login
         </Button>
         {messageErr && <p className='text-red-500 text-center mt-5 text-base'>{messageErr}</p>}
      </form>
   );
};

export default FormLogin;
