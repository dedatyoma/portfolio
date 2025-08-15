import React from 'react'
import { Formik } from 'formik';
import './Form.css'

function Form () {
  return (
    <>
     <div className='form-container'>
      <h1>Get In Touch</h1>
      <p>I’d love to hear from you! Whether you have a question, a project idea, or just want to say hello — feel free to reach out using the form below. We’ll get back to you as soon as possible.</p>
       <Formik 
        initialValues={{email: '', mobile: '', message: ''}}
        validate={values => {
          const errors = {};
          if (!values.email && !values.mobile && !values.message) {
            errors.email = 'Email is required'
            errors.mobile = 'Phone number is required'
            errors.message = 'Typing message is required'
          } else if (
             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
           return errors;
        }}
        onSubmit={(values,  { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false)
          }, 400)
        }}
      >
         {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}>
          <span>Email</span>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             placeholder='Please enter your email'
             className='email'
           />
           {errors.email && touched.email && <div className="error-message">{errors.email}</div>}
           <span>Mobile</span>
           <input
             type="text"
             name="mobile"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.mobile}
             placeholder='Enter mobile'
             className='mobile'
           />
           {errors.mobile && touched.mobile && <div className="error-message">{errors.mobile}</div>}
           <span>Message</span>
           <input 
            type="text"
            name="message"
            onChange={handleChange}
            value={values.message}
            placeholder='Enter your message'
            className='message'
           />
           {errors.message && touched.message && <div className="error-message">{errors.message}</div>}
           <button type="submit" disabled={isSubmitting} className='submit'>
             Submit &gt; 
           </button>
         </form>
       )}
      </Formik>
     </div>
    </>
  )
}

export default Form