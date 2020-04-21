import React from "react";
import { Form, Formik, Field } from "formik";

function App() {
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    address: "",
    birthDate: new Date()
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {({ values }) =>(
        <Form>
        <Field name="name"/>
        <Field name="surname"/>
        <Field name="email"/>
        <pre>{JSON.stringify(values, null, 4)}</pre>
        </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
