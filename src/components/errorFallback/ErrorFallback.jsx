import React from 'react';
import error from './resources/error.gif'
import './errorFallback.scss'
function ErrorFallback() {
	return (
		<>
			<img className='error' src={error} alt="Error"/>
		</>
	);
}

export default ErrorFallback;