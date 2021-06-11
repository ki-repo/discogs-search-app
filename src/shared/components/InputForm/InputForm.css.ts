import styled from 'styled-components';

/** Input Form component*/
export const FormDivContainer = styled.div`
  border-radius: 5px;
  background-color: #c53e55;
  padding: 20px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 40rem) {
    flex-direction: column;
  }
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const FormLabelContainer = styled.div`
  margin-top: 6px;
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const FormInputContainer = styled.div`
  flex: auto;
  width: 50%;
  margin-top: 6px;
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const FormSubmitButton = styled.button`
  background-color: white;
  color: #c53e55;
  flex: auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &.hover {
    background-color: #c53e55;
  }
  margin-top: 0.4rem;
  margin-left: 1rem;
  height: 2.5rem;
  @media (max-width: 40rem) {
    width: 100%;
    margin: 0.5rem 0px;
  }
`;

export const FormLabel = styled.label`
  padding: 12px 12px 12px 0;
  display: inline-block;
  color: #dadada;
`;

export const FormTextInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;
