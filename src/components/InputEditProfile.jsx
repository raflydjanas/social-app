
export const InputEditProfile = () => {
    return (
        <div className='flex flex-col mb-4'>
            <h1 className='mb-3 text-2xl'>Edit Profile</h1>
            <input type="text" placeholder="your username" className='mb-4 w-full p-3 text-lg bg-slate-50 text-black focus:outline-none focus:ring-purple focus:ring-1 focus:border-purple'/>
            <input type="text" placeholder="your status" className='mb-4 w-full p-3 text-lg bg-slate-50 text-black focus:outline-none focus:ring-purple focus:ring-1 focus:border-purple'/>
            <textarea placeholder="description your profile" className='mb-4 w-full min-h-36 p-3 text-lg bg-slate-50 focus:outline-none focus:ring-purple focus:ring-1 focus:border-purple'></textarea>
        </div>
    )
}