import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup";


const FeedbackSchema =
Yup.object().shape({
  userName: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!"),
});
const ContactForm = ({onAdd}) => {
  const handleSubmit = (values, actions) => {
    onAdd(values);
		actions.resetForm();
    
  };
  

  return (
    <Formik 
      initialValues={{
       userName: '',
       number: ''
      }} 
      onSubmit={handleSubmit}
    validationSchema={FeedbackSchema}>
      <Form>
        <label>
          <span>Name</span>
          <Field type='text' name='userName' /> 
          <ErrorMessage component="p" name="userName" />
        </label>
        <label>
          <span>Number</span>
          <Field type='text' name='number' /> 
          <ErrorMessage component="p" name="number" />
          </label>
       
				<button type="submit">Add contact</button>
			</Form>

    </Formik>
  )
}

export default ContactForm