import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../Elements/Button/IndexButton';
import FormInput from '../Elements/Input/FormInput';
import axios from 'axios';

const FormLogin = () => {
   const navigate = useNavigate('');
   const [accessToken, setAccessToken] = useState('');

   useEffect(() => {
      const token = localStorage.getItem('accessToken');
      console.log(token);
      if (token) {
         setAccessToken(token);
      }
   }, []);
   const handleLogin = async (e) => {
      e.preventDefault();

      try {
         const email = e.target.email.value;
         const password = e.target.password.value;

         if (email && password) {
            localStorage.setItem('email ', email);

            let URl = 'https://api-mini-socmed.notneet.my.id/auth/login';
            let payload = {
               email: email,
               password: password,
            };

            if (payload.password === '') {
               delete payload.password;
            }

            const response = await axios.post(URl, payload, {
               headers: {
                  Authorization: `Bearer ${accessToken}`,
               },
            });


            if (response) {
               navigate('/home');
            } else {
               alert('failed to submit');
            }
         } else {
            alert('place enter your email and password');
         }
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
      </form>
   );
};

export default FormLogin;
