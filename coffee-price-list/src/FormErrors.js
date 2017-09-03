import React from 'react';
import './CoffeeForm.css';

export const FormErrors = ({ formErrors }) =>
    <div>
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <div className='Form-errors Middle' key={i}><span className="glyphicon glyphicon-info-sign Error-icon" aria-hidden="true"></span>Field '{fieldName}' value {formErrors[fieldName]}</div>
                )
            } else {
                return '';
            }
        })}
    </div>

export default FormErrors;