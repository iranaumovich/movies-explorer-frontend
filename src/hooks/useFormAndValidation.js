import { useState, useCallback } from 'react';
import deepEqual from 'deep-equal';

export default function useFormAndValidation(inputValues) {
  const [dirty, setDirty] = useState(false);
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValues = { ...values, [name]: value };

    setDirty(!deepEqual(inputValues, newValues));
    setValues(newValues);
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(() => {
    setDirty(false);
    setValues(inputValues);
    setErrors({});
    setIsValid(false);
  }, [setValues, setErrors, setIsValid]);

  return {
    values,
    dirty,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
}
