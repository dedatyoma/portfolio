import React, { useState } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import './styles/LoginSignup.css'

const validationSchema = Yup.object({
  name: Yup.string()
  .required("Name is required")
  .min(2,"Name must have at least 2 characters"),
  email: Yup.string()
  .required("Email is required")
  .email("Invalid email"),
  password: Yup.string()
  .required("Password is required")
  .min(6,"Password must have at least 6 characters"),
  agreeToTerms: Yup.boolean()
  .required("You must accept the terms and conditions")
  .oneOf([true], "You must accept the terms and conditions")
});

const LoginSignup = () => {
  
  const [isLogin, setLogin] = useState(false);

  const handleSubmit = (values, {setSubmitting}) => {

    console.log('Form values:', values)
    setSubmitting(false)
  };
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <Formik 
        initialValues={{
          name: '',
          email: '',
          password: '',
          agreeToTerms: false
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
          {({isSubmitting, errors, touched}) => (
            <Form className='loginsignup-fields'>
              {!isLogin && (
                <div className="field-container">
                  <Field 
                  type='text' 
                  name='name' 
                  placeholder='Name' 
                  className={errors.name && touched.name ? 'error' : ''}/>
                  <ErrorMessage name='name' component="div" className='error-message'/>
                </div>
              )}
              <div className="field-container">
              <Field 
                  type='text' 
                  name='email' 
                  placeholder='Email Address' 
                  className={errors.email && touched.email ? 'error' : ''}/>
                  <ErrorMessage name='email' component="div" className='error-message'/>
              </div>
              <div className="field-container">
              <Field 
                  type='password' 
                  name='password' 
                  placeholder='Password' 
                  className={errors.password && touched.password ? 'error' : ''}/>
                  <ErrorMessage name='email' component="div" className='error-message'/>
              </div>
              {!isLogin && (
                <div className="agree">
                  <Field 
                  type="checkbox"
                  name="agreeToTerms"
                  id="agreeToTerms"
                  />
                  <label htmlFor="agreeToTerms">
                    By continuing, I agree to the terms of use & policy
                  </label>
                  <ErrorMessage name='agreeToTerms' component="div" className='error-message'/>
                </div>
              )}
              <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : (isLogin ? 'Login' : 'Continue')}
              </button>
            </Form>
          )}
        </Formik>
        <p className="login">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  )
}
export default LoginSignup