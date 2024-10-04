import { memo } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

const FormTextInput = (props: {register: UseFormRegisterReturn<string>, placeholder?: string, icon?: JSX.Element}) => {
  const { register, placeholder, icon } = props;
  return (
    <div className='relative flex items-center'>
      <input
        {...register}
        type='text'
        required
        className='w-full text-text-color text-sm border border-border-color px-4 py-3 rounded-md outline-border-outline-color'
        placeholder={!placeholder ? `Enter ${register.name}` : placeholder}
      />
      {icon && <span className='w-4 h-4 absolute right-4 text-icon-color' >{icon}</span>}

    </div>
  );
};

export default memo(FormTextInput);
