import { useCallback, useState } from "react";

export default function useFormValidation() {
  const initialValues = {
    searchInput: "",
    name: "",
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isInputValid, setIsInputValid] = useState({});

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    let validationMessage = e.target.validationMessage;
    const valid = e.target.validity.valid;
    const form = e.target.form;

    if (name === "email") {
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!emailRegex.test(value)) {
        validationMessage = "Неверный формат email адреса";
      }
    }

    setValues((values) => {
      return { ...values, [name]: value };
    });

    setErrors((errors) => {
      return { ...errors, [name]: validationMessage };
    });

    setIsValid(form.checkValidity());

    setIsInputValid((previousIsInputValid) => {
      return { ...previousIsInputValid, [name]: valid };
    });
  }

  const resetForm = useCallback((data = {}) => {
    setValues(data);
    setErrors({});
    setIsInputValid({});
    setIsValid(false);
  }, []);

  const setValue = useCallback((name, value) => {
    setValues((values) => {
      return { ...values, [name]: value };
    });
  }, []);

  return {
    values,
    errors,
    isValid,
    isInputValid,
    handleChange,
    resetForm,
    setValue,
  };
}
