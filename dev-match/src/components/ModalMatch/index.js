import './style.css'
import CloseIcon from '../../assets/close-icon.svg'
import Match from '../../assets/match.svg'

function ModalMatch({ open, setOpen }) {
	return (
		<>
			{open &&
				<div className='modal'>
					<div className='modal-content'>
						<img className='modal-close-icon' src={CloseIcon} alt="Close Button" onClick={() => setOpen(false)} />
						<div>
							<h1>MATCH</h1>
							<h3>Google gostou de você também!</h3>
						</div>
						<img src={Match} alt="Match" className='match-icon' />
					</div>
				</div>
			}
		</>
	)
}

export default ModalMatch

