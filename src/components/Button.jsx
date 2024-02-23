import IconPhoto from '../assets/icons8-photo-64.png';


export const Button = () => {
    return (
        <button className="text-xl text-white hover:text-font hover:bg-purple hover:rounded-full hover:px-4 hover:transition hover:duration-300 hover:ease-in-out">
            <img src={IconPhoto} alt="" className='h-8'/>
        </button>
    )
}