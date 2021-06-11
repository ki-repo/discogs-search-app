import React, { ReactElement, useCallback, useState } from 'react';
import {
  FormDivContainer,
  FormInputContainer,
  FormLabel,
  FormLabelContainer,
  FormRow,
  FormSubmitButton,
  FormTextInput,
} from '../InputForm/InputForm.css';
interface SelectInputProps {
  label: string;
  filterKey: string;
  placeHolder: string;
  onChange: Function;
}

/**
 * This component is used as a select component
 * it can be imporved as now the options are used for both labels and values
 */
const SearchInput = ({
  label,
  onChange,
  filterKey,
  placeHolder,
}: SelectInputProps): ReactElement => {
  const [inputValue, setInputValue] = useState(placeHolder);

  //   // handle selection change callback by propagating the event and setting the new selection value
  const handleChange = (ev: any) => {
    setInputValue(ev.target.value);
  };

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    onChange(inputValue);
  };

  const handleClick = (ev: any) => {
    ev.target.select();
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormDivContainer>
        <FormRow>
          <FormLabelContainer>
            <FormLabel htmlFor={filterKey}>{label}</FormLabel>
          </FormLabelContainer>
          <FormInputContainer>
            <FormTextInput
              onClick={handleClick}
              type="text"
              value={inputValue}
              onChange={handleChange}
              required
              name={filterKey}
              placeholder={placeHolder}
            ></FormTextInput>
          </FormInputContainer>
          <FormSubmitButton type="submit">Filter</FormSubmitButton>
        </FormRow>
      </FormDivContainer>
    </form>
  );
};

export default SearchInput;
