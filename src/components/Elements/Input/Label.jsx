const Label = ({ children, htmlFor }) => {
   return (
      <label htmlFor={htmlFor} className='text-sm font-semibold text-font'>
         {children}
      </label>
   );
};

export default Label;
