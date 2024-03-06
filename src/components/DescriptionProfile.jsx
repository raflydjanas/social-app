import { useEffect, useState } from 'react';
import ImageProfile from './ImageProfile';
import { getUsername } from '../services/auth.services';
import { useNavigate } from 'react-router-dom';

const DescriptionProfile = () => {

   const name = localStorage.getItem('username');
   const title = localStorage.getItem('title');

   return (
      <>
         <ImageProfile />
         <div className='ml-[5.5rem] pt-5'>
            <div className='text-center text-md text-white ml-10'>
               {name}
            </div>
            <p className='text-base text-center text-font pt-1 pl-[3rem]'>
               {title}
            </p>
         </div>
      </>
   );
};

export default DescriptionProfile;
