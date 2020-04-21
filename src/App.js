import React from "react";
import { TextField, MenuItem } from "@material-ui/core";
import { Form, Formik, Field } from "formik";

function App() {
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    age: "",
    userType: "",
  };

  return (
    <div>
    <h2>Register</h2>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {({ values }) => (
          <Form>
            <Field name="name" as={TextField} label="Name" />
            <Field name="surname" as={TextField} label="Surname"/>
            <Field name="email" as={TextField} label="Email" type="email"/>
            <Field name="age" type="number" as={TextField} label="Age" />
            <Field name="userType" as={TextField} select label="User Type">
              <MenuItem value={0}>Administrator</MenuItem>
              <MenuItem value={1}>Normal</MenuItem>
            </Field>
            <pre>{JSON.stringify(values, null, 4)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
