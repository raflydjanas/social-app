// import BgIcons from '../assets/bg.jpg';
import '../index.css';

const CardImg = () => {
   return (
      <div className='max-w-[98%] rounded-lg mx-auto mt-[1.5rem] mb-[3rem] p-3'>
         <div className='columns-2 lg:columns-4 relative'>
            <img
               src='https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg?auto=compress&cs=tinysrgb&w=600'
               alt=''
               className='pb-3 rounded-lg'
            />
            <img
               src='https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg?auto=compress&cs=tinysrgb&w=600'
               alt=''
               className='h-[10rem] pb-3 rounded-lg'
            />
            <img
               src='https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg?auto=compress&cs=tinysrgb&w=600'
               alt=''
               className='h-[7rem] w-[10.5rem] pb-3 rounded-lg'
            />
            <img
               src='https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg?auto=compress&cs=tinysrgb&w=600'
               alt=''
               className='h-[14rem] pb-3 rounded-lg'
            />
            <img
               src='https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg?auto=compress&cs=tinysrgb&w=600'
               alt=''
               className='h-[11rem] pb-3 rounded-lg'
            />
            <div className='w-[20rem] absolute left-0'>
            <img
               src='https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg?auto=compress&cs=tinysrgb&w=600'
               alt=''
               className='h-[7rem] pb-3 w-[20rem] rounded-lg bg-cover bg-center bg-no-repeat'
            />
            </div>
         </div>
      </div>
   );
};

export default CardImg;
