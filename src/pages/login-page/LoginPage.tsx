import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormErrorMessage from '../../components/form-components/FormErrorMessage';
import FormInputPassword from '../../components/form-components/FormInputPassword';
import FormTextInput from '../../components/form-components/FormTextInput';
import { FaUser } from 'react-icons/fa';
import { useCallback } from 'react';

const LoginPage = () => {
  const schema = yup
    .object()
    .shape({
      username: yup.string().required('Username is required.').min(6, 'Username must be at least 6 characters.'),
      password: yup.string().required('Password is required.'),
    })
    .required();

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = form;

  const onLogin = useCallback(async (data: any) => {
    console.log(data);
    console.log('Handle submit....');
  }, []);

  return (
    <div>
      <div className='bg-gray-300 font-[sans-serif]'>
        <div className='min-h-screen flex flex-col items-center justify-center py-6 px-4'>
          <div className='max-w-md w-full'>
            <div className='p-8 rounded-2xl bg-background-color shadow'>
              <h2 className='text-text-color text-center text-2xl font-bold'>Log in</h2>
              <form onSubmit={handleSubmit(onLogin)} className='mt-8 space-y-4'>
                <div>
                  <label className='text-text-color text-sm mb-2 block'>User name</label>
                  <FormTextInput register={register('username')} icon={<FaUser />}></FormTextInput>
                  <FormErrorMessage message={errors.username?.message || ''}></FormErrorMessage>
                </div>

                <div>
                  <label className='text-text-color text-sm mb-2 block'>Password</label>
                  <FormInputPassword register={register('password')}></FormInputPassword>
                  <FormErrorMessage message={errors.password?.message || ''}></FormErrorMessage>
                </div>

                <div className='flex flex-wrap items-center justify-between gap-4'>
                  <div className='flex items-center'>
                    <input id='remember-me' name='remember-me' type='checkbox' className='h-4 w-4 shrink-0 border-border-color rounded' />
                    <label htmlFor='remember-me' className='ml-3 block text-sm text-text-color'>
                      Remember me
                    </label>
                  </div>
                  {/* <div className='text-sm'>
                    <button className='text-blue-600 hover:underline font-semibold'>Forgot your password?</button>
                  </div> */}
                </div>

                <div className='!mt-8'>
                  <button
                    disabled={Object.keys(errors).length > 0 || Object.keys(touchedFields).length === 0}
                    type='submit'
                    className='w-full disabled:opacity-60 py-3 px-4 text-sm tracking-wide rounded-lg text-submit-btn-text bg-submit-btn-bg hover:brightness-[80%] focus:outline-none'
                  >
                    Log in
                  </button>
                </div>
                {/* <p className='text-text-color text-sm !mt-8 text-center'>
                  Don't have an account?{' '}
                  <button type='button' className='text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold'>
                    Register here
                  </button>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
