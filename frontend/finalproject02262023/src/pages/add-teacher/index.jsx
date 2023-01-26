import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.scss'
const SignupSchema = Yup.object().shape({
  
   
    position: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too !')
    .required('vezife daxil edin'),
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('ad daxil edin'),
    description: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('aciqlama qeyd edin'),
    price: Yup.number()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('qiymet teyin edin'),
    image: Yup.string().required('sekil linki elave edin'),
});
const AddTeacher = () => {
    const navigate = useNavigate()
  return (
<>
<div className='addData'>

<Formik
       initialValues={{
        name: '',
        position: '',
        description: '',
        price: '',
        image: ''
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
    axios.post("http://localhost:8800/teacher/", values)
    navigate('/')
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="name" placeholder="name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <Field name="position" placeholder="position"/>
           {errors.position && touched.position ? (
             <div>{errors.position}</div>
           ) : null}
           <Field name="description" placeholder="description"/>
           {errors.description && touched.description ? <div>{errors.description}</div> : null}
           <Field name="price" placeholder="price" type="number"/>
           {errors.price && touched.price ? <div>{errors.price}</div> : null}
           <Field name="image" placeholder="image"/>
           {errors.image && touched.image ? <div>{errors.image}</div> : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
</div>
</>
    )
}

export default AddTeacher