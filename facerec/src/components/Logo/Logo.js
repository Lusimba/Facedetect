import React from 'react';
import Tilt from 'react-tilt';
import trophy from './trophy.png';
import './Logo.css';

const Logo = ()=>{
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 150}} style={{ height: 150, width: 150 }} >
			<div className="Tilt-inner"><img alt='' src={trophy} height='150' width='150'/></div>
			</Tilt>
		</div>
	);
}

export default Logo;