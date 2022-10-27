import React from 'react';
import loader from './resources/iphoneSpiner.gif'
import './loader.scss'

function Loader () {
	return (
		<>
			<img className='loader' src={loader} alt="loading"/>
		</>
	);
}

export default Loader;