import { MdError } from 'react-icons/md';

const FormErrorMessage = (props: { message: string }) => {
 
  return (
    <div className={`flex gap-1 text-red-600 items-center pt-1 text-[0.75rem]`}>
      {props.message && (
        <>
          <MdError></MdError>
          <span className='text-red-600'>{props.message}</span>
        </>
      )}
    </div>
  );
};

export default FormErrorMessage;
