import Input from './Input';
import Label from './Label';

const FormInput = ({ label, name, type, placeholder, value }) => {
   return (
      <div className='mb-5'>
         <Label htmlFor={name}>{label}</Label>
         <Input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
         />
      </div>
   );
};

export default FormInput;
