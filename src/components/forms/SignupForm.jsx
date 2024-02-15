import { useState } from "react";

const Signup = () => {
  const { values, errors, handleChange, handleBlur, handleSubmit } =
    useFormValidation({ name: "", email: "" }, validate);

  return (
    <>
      <p>Working Signup forms..</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Signup;

const useFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Call your submit function here, as validation passed
      console.log("Form submitted successfully:", values);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

// Example validation function
const validate = (values) => {
  let errors = {};

  // Example validation rules
  if (!values.name) {
    errors.name = "Name is required";
  }else if(values.name.length <2){
    errors.name = "Name should be at least 3 char";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  return errors;
};
