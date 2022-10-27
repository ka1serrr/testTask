import React from 'react';
import './button.scss'

function Button ({className = 'btn', text, onRequest, disabled}) {
	return (
		<>
			<button disabled={disabled} onClick={onRequest} className={className}>{text}</button>
		</>
	);
}

export default Button;