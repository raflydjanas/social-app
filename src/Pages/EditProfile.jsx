import { Link } from 'react-router-dom';
import { AiOutlineImport } from 'react-icons/ai';
import Headers from '../components/Headers';
import InputEditProfile from '../components/InputEditProfile';
import BottomNav from '../components/BottomNav';
import MyApp from '../components/Elements/MyApp/MyApp';

const EditProfile = () => {
   return (
      <div className='bg-dark'>
         <header className='bg-dark p-5 rounded border-b-2 border-purple fixed top-0 right-0 left-0'>
            <nav className='flex justify-between items-center'>
               <MyApp />
               <div className='flex gap-3  text-white hover:text-purple cursor-pointer'>
                  <Link to='/home' className='text-base'>
                     back to home
                  </Link>
                  <AiOutlineImport className='mt-1' />
               </div>
            </nav>
         </header>
         <Headers />
         <div className='mt-[10rem] p-4 bg-slate-700 max-w-[90%] mx-auto mb-20'>
            <InputEditProfile />
         </div>
         <BottomNav />
      </div>
   );
};

export default EditProfile;
