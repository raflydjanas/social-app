
const InputEditAccount = () => {

    return (

        <div className='flex flex-col '>
            <h1 className='mb-3 text-2xl text-white'>Edit Eccount</h1>
            <input type="email" placeholder="email" className='mb-4 w-full p-3 text-lg bg-dark text-white focus:outline-none focus:ring-purple focus:ring-1 focus:border-purple'/>
            <input type="password" placeholder="password" className='mb-4 w-full p-3 text-lg bg-dark text-white focus:outline-none focus:ring-purple focus:ring-1 focus:border-purple'/>
            <div className="flex gap-6 py-2">
                <button className='bg-purple text-white rounded-2xl px-4 hover:bg-slate-500'>cancel</button>
                <button className='bg-purple text-white rounded-2xl px-4 hover:bg-slate-500'>save</button>
            </div>
         </div>
    )
}

export default InputEditAccount;