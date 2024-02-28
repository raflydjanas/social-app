import { CiCirclePlus } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
   const navigate = useNavigate('');
   return (
      <div className='flex justify-center items-center w-full bg-slate-700 p-4 fixed bottom-0 right-0 left-0 rounded-xl mt-[1.5rem]'>
         <CiCirclePlus
            onClick={() => navigate('/aploadPost')}
            className='text-purple text-4xl hover:text-slate-500 font-bold '
         />
      </div>
   );
};

export default BottomNav;
