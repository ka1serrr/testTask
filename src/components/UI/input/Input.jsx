import React from 'react';
import './input.scss'

const Input = ({id, label, className = 'input',  placeholder}) => {
	return (
		<div className="input__container">
			<label htmlFor={id}>{label}</label>
			<input className={className} placeholder={placeholder} id={id} type="text" />
		</div>
	);
};

export default Input;
