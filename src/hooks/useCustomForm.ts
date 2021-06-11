import { useState, useCallback } from 'react';
/**
 *
 * @param {initial form values} initialState
 * @param {call back function for after form submission} callback
 */
export const useCustomForm = (initialState: any, callback: Function) => {
  const [inputs, setValues] = useState(initialState);
  const handleSubmit = useCallback(
    (event) => {
      event && event.preventDefault();
      callback && callback();
    },
    [callback]
  );
  const handleInputChange = useCallback((event) => {
    event.persist();
    setValues((values: any) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  }, []);
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};
