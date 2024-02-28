const Button = ({
   children,
   classname,
   type = 'button',
   onClick = () => {},
}) => {
   return (
      <button
         type={type}
         className={`h-10 px-6 font-semibold rounded ${classname} text-white hover:bg-slate-800`}
         onClick={() => onClick()}
      >
         {children}
      </button>
   );
};

export default Button;
