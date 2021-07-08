import './style.css'
import Dislike from '../../assets/dislike-button.svg'
import Like from '../../assets/like-button.svg'
import { useState } from "react"
import ModalMatch from '../ModalMatch'

function ActionButtons() {
	const [open, setOpen] = useState(false)

	function handleAddLike() {
		setOpen(true)
	}


	return (
		<div className='flex-row'>
			<ModalMatch open={open} setOpen={setOpen} />
			<img className='button-icon' src={Like} alt="like" onClick={handleAddLike} />
			<img className='button-icon' src={Dislike} alt="dislike" />
		</div>
	)
}

export default ActionButtons
