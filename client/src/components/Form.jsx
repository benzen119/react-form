import React, { Component } from 'react';
import FormErrors from './FormErrors';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      date: '',
      formErrors: { firstName: '', lastName: '', email: '', date: '' },
      firstNameValid: false,
      lastNameValid: false,
      emailValid: false,
      dateValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {

    let { formErrors, emailValid, firstNameValid, lastNameValid, dateValid} = this.state;

    switch (fieldName) {
      case 'email':
        const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        emailValid = value.match(emailRegex);
        formErrors.email = emailValid ? '' : 'is invalid';
        if (value === '') {
          formErrors.email = false;
        }
        break;
      case 'first_name':
        firstNameValid = value.length > 1;
        formErrors.firstName = firstNameValid ? '' : 'is too short';
        if (value === '') {
          formErrors.firstName = false;
        }
        break;
      case 'last_name':
        lastNameValid = value.length > 1;
        formErrors.lastName = lastNameValid ? '' : 'is too short';
        if (value === '') {
          formErrors.lastName = false;
        }
        break;
      case 'date':
        const dateRegex = /^[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])/;
        dateValid = value.match(dateRegex);
        formErrors.date = dateValid ? '' : 'is invalid';
        if (value === '') {
          formErrors.date = false;
        }
        break;    
      default:
        break;
    }
    
    this.setState({
      formErrors,
      emailValid,
      firstNameValid,
      lastNameValid,
      dateValid
    }, this.validateForm);
  }

  validateForm = () => {
    this.setState({ formValid: this.state.firstName && this.state.lastName && this.state.email && this.state.date });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName } = this.state;

    fetch('http://localhost:4001/api/adduser', {
      method: 'POST',
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json',
      // },
      data: {
        firstName,
        lastName
      }
    })
        .then( res => {
          alert("xd");
        console.log(res);
        }).catch( err => {
          console.log(err);
          alert("err");
        });
    }

  render() {
    return (
        <div className="container my-4">
        <form onSubmit={this.handleSubmit}>
          <h2>Sign up</h2>
            <div className="form-group my-4">
              <label htmlFor="first_name">First name</label>
            <input type="text" className="form-control" id="first_name" name="first_name" onChange={this.handleUserInput}
              placeholder="Type your first name" required />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last name</label>
            <input type="text" className="form-control" id="last_name" name="last_name" onChange={this.handleUserInput}
              placeholder="Type your last name" required />
            </div>
            {/* <div className="form-group">
              <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" onChange={this.handleUserInput}
              placeholder="Type your email"  />
            </div>
            <div className="form-group">
              <label htmlFor="date">Event date</label>
            <input type="date" className="form-control" id="date" name="date" onChange={this.handleUserInput} />
            </div> */}
            <button type="submit" className="btn btn-primary">Send data</button>
          </form>
          <div className="container">
          <FormErrors formErrors={this.state.formErrors} />
          </div>
        </div>
    );
  }
}

export default Form;
