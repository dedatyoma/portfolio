import React from 'react'
import { Formik } from 'formik';
import './Form.css'
import { useTranslation } from 'react-i18next'
import '../../hooks/langConfig.js'

function Form () {
  const {t} = useTranslation()
  return (
    <>
     <div className='form-container'>
      <h1>{t("getInTouch")}</h1>
      <p>{t("connect")}</p>
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
          <span>{t("eMail")}</span>
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
           <span>{t("mobile")}</span>
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
           <span>{t("message")}</span>
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
             {t("submit")} &gt; 
           </button>
         </form>
       )}
      </Formik>
     </div>
    </>
  )
}

export default Form