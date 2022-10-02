import React from 'react';

const Input = ({name, label, value, type, onChange }) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
            type={type}
            onChange={onChange}
            value={value}
            name={name}
            id={name} 
            className="form-control" />
          </div>

     );
}
 
export default Input;