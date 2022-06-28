import React from 'react'
import { Formik } from 'formik';
import Validations from './Validations';
function SignUp() {
  return (
    <div>SignUp

<Formik
        initialValues={{
        
         email: '',
         password:``,
         passwordConfirm:``
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Validations}
      >
    {({handleSubmit,handleChange,values,errors,touched,handleBlur}) => (    <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input id="emai" name="email" placeholder="LoveU@gmail.com" onChange={handleChange} onBlur={handleBlur} />
          <br />

  {errors.email && touched && <div>{errors.email}</div>}
  <br />

          <label htmlFor="password">Paswword</label>
          <input type='text'   id="password" name="password" placeholder="" onChange={handleChange} onBlur={handleBlur}/>
          {errors.password && touched && <div>{errors.password}</div>}

          <br />

          <label htmlFor="passwordConfirm">PaswwordConfirmn</label>
          <input type='text'   id="passwordConfirm" name="passwordConfirm" placeholder="" onChange={handleChange} onBlur={handleBlur}/>
          {errors.passwordConfirm && touched && <div>{errors.passwordConfirm}</div>}
<br />
<button type="submit">Submit</button>
<br />

          {JSON.stringify(values)}

        </form>)}
      </Formik>
    </div>

  )
}

export default SignUp