import { useEffect, useState } from 'react';
import ImageProfile from './ImageProfile';
import { getUsername } from '../services/auth.services';
import { useNavigate } from 'react-router-dom';

const DescriptionProfile = () => {
   const [username, setUsername] = useState('');
   const navigate = useNavigate();
   
   useEffect(() => {
      const token = localStorage.getItem('token');
      if(token) {
         setUsername(getUsername(token));
      } else{
         navigate('/login');
      }
   }, [navigate]);

   return (
      <>
         <ImageProfile />
         <div className='ml-[5.5rem] pt-5'>
            <div className='text-center text-md text-white ml-10'>{username}</div>
            <p className='text-base text-center text-font pt-1 pl-[3rem]'>
               title/status
            </p>
         </div>
      </>
   );
};

export default DescriptionProfile;
