import beckground from '../assets/bg.jpg';
import DescriptionProfile from './DescriptionProfile';
import Cound from './Cound';
import DescriptionAcound from './DescriptionAcound';
import ButtonNavigate from './ButtonNavigate';
import BottomNav from './BottomNav';


const LayoutHome = () => {

   return (
      <main>
         <div className='bg-dark relative'>
            <img
               src={beckground}
               alt='baground'
               className='rounded-t-lg mt-[4.8rem] w-full h-44 object-cover'
            />
            <div className='relative h-[26rem]'>
               <DescriptionProfile />
               <div className='border border-purple mt-12'></div>
               <Cound />
               <DescriptionAcound />
               <ButtonNavigate />
            </div>
         </div>
         <BottomNav />
      </main>
   );
};

export default LayoutHome;