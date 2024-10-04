import { memo, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';

const FormInputPassword = (props: { register: UseFormRegisterReturn<string>; placeholder?: string }) => {
  const { register, placeholder } = props;
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleIsShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <div className='relative flex items-center'>
      <input
        {...register}
        name='password'
        type={isShowPassword ? 'text' : 'password'}
        required
        className='w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600'
        placeholder={!placeholder ? `Enter ${register.name}` : placeholder}
      />
      <button
        type='button'
        onClick={handleIsShowPassword}
        className='flex items-center justify-center hover:text-blue-700 active:text-blue-700 hover:fill-blue-700 active:fill-blue-700'
      >
        {isShowPassword && <FaRegEye className='w-4 h-4 absolute right-4' />}
        {!isShowPassword && <FaRegEyeSlash className='w-4 h-4 absolute right-4' />}
      </button>
    </div>
  );
};

export default memo(FormInputPassword);
