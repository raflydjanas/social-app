// import BgIcons from '../assets/bg.jpg';
import '../index.css';

const CardImg = () => {
    return (  
        <div className=" max-w-[90%] rounded-lg mx-auto mt-[7rem] mb-[3rem]  bg-slate-800 p-4">
            <div className='columns-2 lg:columns-4'>
                <img src="https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='pb-3 rounded-lg'/>
                <img src="https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-[10rem] pb-3 rounded-lg'/>
                <img src="https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-[7rem] w-[10.5rem] pb-3 rounded-lg'/>
                <img src="https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-[14rem] pb-3 rounded-lg'/>
                <img src="https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='h-[11rem] pb-3 rounded-lg'/>
            </div>
        </div>
    )
}

export default CardImg;