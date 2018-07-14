import React from 'react';
import 'tachyons';
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange, onButtonSubmit})=>{
	return (
		<div>
			<p className='f3'>
				{'This app detects your faces in a picture'}
			</p>
			<div className='center'>
				<div className='form center pa3 br3 shadow-3'>
					<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;