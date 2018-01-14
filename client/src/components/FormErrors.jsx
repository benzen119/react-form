import React from 'react';
import './FormErrors.css';

 const FormErrors = ({ formErrors }) =>

    <div className="errors-wrapper my-2">
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <p key={i}>{formErrors[fieldName]}</p>
                )
            } else {
                return '';
            }
        })}
    </div>

    export default FormErrors;