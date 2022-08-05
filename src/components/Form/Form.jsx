import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const marker = e.currentTarget.name;
    this.setState({ [marker]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (this.props.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contact list`);
      return;
    }

    this.props.onSubmit(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Lable>
          name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Lable>
        <Lable>
          number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Lable>
        <Btn type="submit" disabled={!this.state.name || !this.state.number}>
          add contact
        </Btn>
      </StyledForm>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Lable = styled.label``;

const Input = styled.input`
  margin-left: 10px;
`;

const Btn = styled.button``;

export default Form;
