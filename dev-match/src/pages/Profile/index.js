import './style.css'
import ProfileBar from "../../components/ProfileBar";
import InputPassword from "../../components/InputPassword";
import Skills from '../../components/Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'




function Profile() {
	return (
		<div>
			<ProfileBar />
			<div className='flex-column profile-container itens-center'>
				<h1>Perfil</h1>
				<form action="" className='flex-row'>
					<div>
						<div>
							<label htmlFor="name">Nome</label>
							<input type="text" id='name' />
						</div>
						<div>
							<label htmlFor="email">E-mail</label>
							<input type="email" id='email' />
						</div>
						<div>
							<label htmlFor="cep">CEP</label>
							<input type="text" id='cep' />
						</div>
						<div>
							<label htmlFor="city">Cidade</label>
							<input type="text" id='city' />
						</div>
						<InputPassword label='Senha' />
						<div>
							<h2>Habilidades</h2>
						</div>
						<Skills skills={['NodeJs', 'ReactJs', 'ExpresJS']} addButton={true} />
					</div>

					<div className='flex-column'>
						<div className='profile-pic flex-row content-center itens-center flex-grow'>
							<FontAwesomeIcon
								icon={faUser}
								size='5x'
								onClick={() => { }}
							/>
						</div>
						<button className='btn-dark-blue'>Salvar alterações</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Profile
