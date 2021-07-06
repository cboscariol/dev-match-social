import React from 'react'
import './style.css'
import '../../styles/form.css'
import { Link } from 'react-router-dom'
import AllRightReserved from '../../components/AllRightReserved'
import InputPassword from '../../components/InputPassword'
import { useState } from 'react'

function SignIn() {
	const [password, setPassword] = useState('')

	return (
		<div className='container-form'>
			<form className='form form-sign-in'>
				<div className='text-center mb-lg'>
					<h1>Login</h1>
					<Link to='/sign-up'>CADASTRE-SE</Link>
				</div>
				<div>
					<div className='flex-column'>
						<label htmlFor='email'>E-mail</label>
						<input id="email " type="text" placeholder='Digite seu e-mail' />
					</div>
					<InputPassword label="Senha" placeholder="Digite sua senha" value={password} setValue={setPassword} />
					<button className='btn-dark-blue'>Entrar</button>
					<div className='flex-row itens-center'>
						<input type="checkbox" value="Lembrar-me" name="remember" id="" />
						<span htmlFor='remember'>Lembrar-me</span>
					</div>
				</div>
				<Link to="recovery-password" className='my-lg'>Esqueceu sua senha?</Link>
				<AllRightReserved />




			</form>
		</div>
	)
}

export default SignIn
