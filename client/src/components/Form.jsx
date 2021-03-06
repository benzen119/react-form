import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postUser } from '../actions';
import FormErrors from './FormErrors';
import './Form.css';

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
      dateValid: false
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
        formErrors.email = emailValid ? '' : 'Invalid email format';
        if (value === '') {
          formErrors.email = false;
        }
        break;
      case 'firstName':
        firstNameValid = value.length > 1;
        formErrors.firstName = firstNameValid ? '' : 'First name needs to be at least 2 characters long';
        if (value === '') {
          formErrors.firstName = false;
        }
        break;
      case 'lastName':
        lastNameValid = value.length > 1;
        formErrors.lastName = lastNameValid ? '' : 'Last name needs to be at least 2 characters long';
        if (value === '') {
          formErrors.lastName = false;
        }
        break;
      case 'date':
        const dateRegex = /^[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])/;
        dateValid = value.match(dateRegex);
        formErrors.date = dateValid ? '' : 'Invalid date format';
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
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, date, emailValid, firstNameValid, lastNameValid, dateValid } = this.state;
    
    if(firstNameValid && lastNameValid && emailValid && dateValid){
      this.props.postUser({

        'first_name': firstName,
        'last_name': lastName,
        'email': email,
        'date': date
      })
    }
  }

  render() {
    const { success } = this.props.status;
    return ( 
        <div className="container form-wrapper my-5">

        { success ? (

          <div className="text-center my-5">
            <p className="success-text">User successfully saved in database!</p>
          </div>

        ) : (
            <div>
              <form onSubmit={this.handleSubmit}>
                <h3 className="my-3">Brainhub app</h3>
                <div className="form-group">
                  <label htmlFor="first_name">First name</label>
                  <input type="text" className="form-control" id="first_name" name="firstName" onChange={this.handleUserInput}
                    placeholder="Type your first name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last name</label>
                  <input type="text" className="form-control" id="last_name" name="lastName" onChange={this.handleUserInput}
                    placeholder="Type your last name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" onChange={this.handleUserInput}
                    placeholder="Type your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Event date</label>
                  <input type="date" className="form-control" id="date" name="date" onChange={this.handleUserInput} />
                </div>
                <button type="submit" className=" my-2 btn btn-primary">Send data</button>
              </form>
              <div className="container">
                <FormErrors formErrors={this.state.formErrors} />
              </div>
            </div>
        )}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state
  }
}

export default connect(mapStateToProps, { postUser })(Form);
