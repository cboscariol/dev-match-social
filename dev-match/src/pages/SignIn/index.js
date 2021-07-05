import React from 'react'
import './style.css'
import '../../styles/form.css'
import { Link } from 'react-router-dom'

function SignIn() {
	return (
		<div className='container-form'>
			<form className='form-sign-in'>
				<div className='text-center mb-lg'>
					<h1>ENTRAR</h1>
					<Link to='/sign-up'>CADASTRE-SE</Link>
				</div>
				<div>
					<div className='flex-column'>
						<label htmlFor='email'>E-mail</label>
						<input id="email " type="text" placeholder='Digite seu e-mail' />
					</div>
					<div className='flex-column'>
						<label htmlFor='senha'>Senha</label>
						<input id="senha " type="password" placeholder='Digite sua senha' />
					</div>
					<button className='btn-dark-blue'>Entrar</button>
					<div>
						<input type="checkbox" value="Lembrar-me" name="remember" id="" />
						<span htmlFor='remember'>Lembrar-me</span>
					</div>
				</div>
				<Link to="recovery-password" className='my-lg'>Esqueceu sua senha?</Link>
				<span className='light-label'>©2021 Todos os Direitos Reservados</span>




			</form>
		</div>
	)
}

export default SignIn
