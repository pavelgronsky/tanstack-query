import { useFormik } from 'formik';
import * as Yup from 'yup';

import useCreateTodo from './useCreateTodo';
import { TFormValues } from '../types';

const useLogicOperationForm = () => {
  const { handleCreate, isPending } = useCreateTodo();

  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema: Yup.object({
      text: Yup.string().max(5, 'Must be 5 characters or less').required('Required'),
    }),
    onSubmit: (values: TFormValues, { resetForm }) => {
      handleCreate(values, resetForm)
    },
  });

  const formSection = () => {
    return (
      <form className='flex gap-2 mb-5' onSubmit={formik.handleSubmit}>
        <div className='flex flex-col'>
          <input
            className='rounded p-2 border border-teal-500'
            id="text"
            name="text"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.text}
          />
          <span>{formik.touched.text && formik.errors.text ? (
            <div className='text-rose-500'>{formik.errors.text}</div>
          ) : null}
          </span>
        </div>
        <button
          disabled={isPending}
          type="submit"
          className='rounded p-2 border border-teal-500 disabled:opacity-50 max-h-10' >
          Create
        </button>
      </form>
    )
  }


  return {
    formSection,
  }
}

export default useLogicOperationForm;