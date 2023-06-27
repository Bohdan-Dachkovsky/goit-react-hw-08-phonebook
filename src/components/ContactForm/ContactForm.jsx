import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import styled from 'styled-components';
import { addUser } from '../../redux/operations.js';
import { getTasks } from '../../redux/contacts/selectors.js';
import nextId from 'react-id-generator';

const Label = styled.label`
  display: flex;
  text-align: start;
  align-iteams: center;
  margin-top: 50px;
  color: rgba(0, 0, 0, 0.5);
`;
const Form = styled.form`
  display: flex;
  font-family: 'Roboto Condensed';
  font-size: 14px;
  flex-direction: column;
  margin-left: 55px;
  padding: 12px 12px 24px;
  width: 600px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin-bottom: 16px;
`;
const Input = styled.input`
  font-size: 1em;
  border: 2px solid DarkSlateBlue;
  border-radius: 3px;
  &:required:focus {
    color: DarkBlue;
    box-shadow: 0px 0px 2px DodgerBlue;
  }
`;
const StyledLabel = styled(Label)`
  margin-top: 25px;
  position: relative;
`;
const SubmButton = styled.button`
  background-color: #3f51b5;
  border: 0;
  outline: 0;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);
  text-transform: uppercase;
  user-select: none;
  transition: background-color 200ms ease-in-out;
  display: block;
  flex-direction: row;
  flex-wrap: wrap;
  width: 220px;
  height: 130px;
  text-align: center;
  align-self: end;
  position: absolute;
  margin-left: 50px;
`;
export default function ContactForm() {
  const contacts = useSelector(getTasks);
  const [state, setState] = useState({
    name: '',
    number: '',
  });
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    if (state.name && state.number) {
      dispatch(
        addUser({
          ...state,
          id: nextId(),
        })
      );
      setState({
        name: '',
        number: '',
      });
    }
    const searchSameName = contacts.name === state.name;

    if (state.name.length === 0) {
      alert('Fields must be filled!');
    }
    if (searchSameName) {
      alert(`${state.name} is already in contacts`);
    } else if (state.name.length === 0) {
      alert('Fields must be filled!');
    } else {
      console.log(`new persons added`);
    }
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name &nbsp;&nbsp;&nbsp;&nbsp;
        <Input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </Label>
      <StyledLabel>
        Number &nbsp;
        <Input
          type="text"
          name="number"
          value={state.number}
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </StyledLabel>
      <SubmButton type="submit">Add contact</SubmButton>
    </Form>
  );
}
