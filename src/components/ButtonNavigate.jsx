import IconPhoto from '../assets/icons8-photo-64.png';

export const ButtonNavigate = () => {

    return (

        <div className="bg-white mt-6 mx-auto w-[70%] rounded-full">
         <div className="flex justify-between items-center gap-4 p-4">          
            <button className="text-xl text-white hover:text-font hover:bg-purple hover:rounded-full hover:px-4 hover:transition hover:duration-300 hover:ease-in-out">
            <img src={IconPhoto} alt="" className='h-8'/>
            </button>
            <button className="text-xl text-white hover:text-font hover:bg-purple hover:rounded-full hover:px-4 hover:transition hover:duration-300 hover:ease-in-out">
            <img src={IconPhoto} alt="" className='h-8'/>
            </button>
            <div className="text-xl text-white hover:text-font hover:bg-purple hover:rounded-full hover:px-4 hover:transition hover:duration-300 hover:ease-in-out">
                <img src={IconPhoto} alt="" className='h-8'/>
            </div>
         </div>
        </div>
    )
}