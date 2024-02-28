import BgIcons from '../assets/icons8-photo-64.png';
import ImageEditProfile from './ImageEditProfile';

const Headers = () => {
   return (
      <div className='rounded-t-lg mt-[4.8rem] relative w-full h-44 object-cover bg-slate-700'>
         <img src={BgIcons} alt='baground' className='pt-10 mx-auto ' />
         <div className='relative mt-[30rem]'>
            <ImageEditProfile className='' />
         </div>
      </div>
   );
};

export default Headers;
