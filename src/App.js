import React from "react";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="userName"
        label="Username"
        error={!!errors.userName}
        helperText={errors.userName && "username required"}
        inputRef={register({ required: true, pattern: /^[A-Za-z]+$/i })}
      />
      <input
        name="firstName"
        ref={register({ required: true, maxLength: 20 })}
      />
      <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}

export default App;
