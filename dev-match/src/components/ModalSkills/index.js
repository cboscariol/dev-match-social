import './style.css'
import CloseIcon from '../../assets/close-icon.svg'
import { useState } from 'react'

function ModalSkills({ open, setOpen }) {
	const [newSkill, setNewSkill] = useState("")

	function handleAddNewSkill(e) {
		e.preventDefaut()
	}




	return (
		<>
			{open &&
				<div className='modal'>
					<div className='modal-content flex-column content-center itens-center'>
						<img src={CloseIcon} alt="close-button" className='modal-close-icon' onClick={() => setOpen(false)} />
						<div className='flex-column content-center itens-center'>
							<h2>Nova habilidade</h2>
							<input type="text" value={newSkill} onChange={setNewSkill} />
							<button className='btn-dark-blue' onClick={(e) => handleAddNewSkill(e)}>Adicionar</button>
						</div>
					</div>
				</div>
			}
		</>
	)
}

export default ModalSkills
