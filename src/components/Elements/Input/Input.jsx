

const Input = ({ type, placeholder, name }) => {
    return (
        <input
            className='text-md rounded border w-full py-2 px-3 placeholder:opacity-50 bg-black text-white mt-3 focus:outline-none focus:ring-purple focus:ring-1 focus:border-purple' 
            type={type} 
            placeholder={placeholder}
            name={name}
            id={name} />
    )
}

export default Input;