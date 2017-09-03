import React from 'react';
import './App.css';

export const FormErrors = ({ formErrors }) =>
    <div>
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <div className='Form-Errors Middle' key={i}><span className="glyphicon glyphicon-info-sign Icon" aria-hidden="true"></span>Field '{fieldName}' value {formErrors[fieldName]}</div>
                )
            } else {
                return '';
            }
        })}
    </div>

export default FormErrors;