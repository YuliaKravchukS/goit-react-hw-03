import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup";
import css from './ContactForm.module.css'


const FeedbackSchema =
Yup.object().shape({
  name: Yup.string().min(3, "Too Short!Minimum 3 characters").max(50, "Too Long!Maximum 50 characters").required("Required"),
  number: Yup.string().min(3, "Too Short!Minimum 3 characters").max(50, "Too Long!Maximum 50 characters").required("Required"),
});
const ContactForm = ({onAdd}) => {
  const handleSubmit = (values, actions) => {
    onAdd(values);
		actions.resetForm();
    
  };
  

  return (
    <Formik 
      initialValues={{
       name: '',
        number: '',
      
      }} 
      onSubmit={handleSubmit}
    validationSchema={FeedbackSchema}>
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field className={css.field} type='text' name='name' placeholder='Please enter your name' /> 
          <ErrorMessage component="p" name="name" />
        </label>
        <label className={css.label}>
          <span>Number</span>
          <Field className={css.field} type='text' name='number' placeholder='Please enter your number'/> 
          <ErrorMessage component="p" name="number" />
          </label>
       
				<button type="submit" className={css.glowOnHover}>Add contact</button>
			</Form>

    </Formik>
  )
}

export default ContactForm