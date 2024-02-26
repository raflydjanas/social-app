

const Label = ({ children, htmlFor }) => {

    return (
        <label htmlFor={htmlFor} className='text-sm font-semibold'>
            {children}
        </label>
    )
}

export default Label;