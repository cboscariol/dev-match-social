import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import './style.css'
import ProfileIcon from '../../assets/profile-icon.svg'
import CloseIcon from '../../assets/close-icon.svg'


function ProfileBar() {
	const [open, setOpen] = useState(false)
	const location = useLocation();
	const history = useHistory()
	function handleOpenProfilePage() {
		if (location.pathname === '/profile') {
			history.push('/')
			return
		}
		return history.push('/profile')
	}

	useEffect(() => {
		if (location.pathname === '/profile') {
			setOpen(true);
		}
	}, [location])



	return (
		<div>
			<img
				className='icon'
				src={open ? CloseIcon : ProfileIcon}
				alt="Profile"
				onClick={() => handleOpenProfilePage()} />
		</div>
	)
}

export default ProfileBar
