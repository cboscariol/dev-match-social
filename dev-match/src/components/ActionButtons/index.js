import React from 'react'
import './style.css'
import Dislike from '../../assets/dislike-button.svg'
import Like from '../../assets/like-button.svg'

function index() {
	return (
		<div className='button-icon'>
			<img src={Like} alt="like" />
			<img src={Dislike} alt="dislike" />
		</div>
	)
}

export default index
