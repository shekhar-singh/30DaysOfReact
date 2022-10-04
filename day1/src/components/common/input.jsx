import React from 'react';

const Input = ({name, label, value, type, onChange, error }) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
            type={type}
            onChange={onChange}
            value={value}
            name={name}
            id={name} 
            className="form-control" 
            />
          {error && <div className='alert alert-danger'>{ error }</div>}
          </div>

     );
}
 
export default Input;