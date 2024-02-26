
 const InputEditProfile = () => {
    return (
        <div className='flex flex-col mb-4 '>
            <h1 className='mb-3 text-2xl text-white'>Edit Profile</h1>
            <input type="text" placeholder="your username" className='mb-4 w-full p-3 text-lg bg-dark text-white focus:outline-none focus:ring-purple focus:ring-1 focus:border-purple'/>
            <input type="text" placeholder="your status" className='mb-4 w-full p-3 text-lg bg-dark text-white focus:outline-none focus:ring-purple focus:ring-1 focus:border-purple'/>
            <textarea placeholder="description your profile" className='mb-4 w-full min-h-36 p-3 text-lg bg-dark text-white focus:outline-none focus:ring-purple focus:ring-1 focus:border-purple'></textarea>
        </div>
    )
}

export default InputEditProfile;