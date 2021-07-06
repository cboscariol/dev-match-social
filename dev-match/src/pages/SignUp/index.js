import React from 'react'
import './style.css'
import '../../styles/form.css'
import { Link } from 'react-router-dom'
import AllRightReserved from '../../components/AllRightReserved'
import InputPassword from '../../components/InputPassword'
import { useState, useEffect } from 'react'
import { getCityByCEP } from "../../services/viaCEP";
import { toast } from 'react-toastify';

function SignUp() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [cep, setCep] = useState('')
  const [city, setCity] = useState('')

  async function loadCityByCEP(myCep) {
    const cityByCep = await getCityByCEP(myCep);

    if (!cityByCep) {
      toast.error("Falha ao encontrar cidade, verifique corretamente o CEP!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return
    }
    setCity(cityByCep)
  }

  useEffect(() => {
    if (cep.length < 9 && city.length > 0) {
      setCity("")
    }

    if (cep.indexOf('-') !== -1) {
      if (cep.length === 9) {
        loadCityByCEP(cep);
      }
      return;
    }

    if (cep.length === 8)
      loadCityByCEP(cep);

  }, [cep])


  return (
    <div className='container-form'>
      <form className='form form-sign-up'>
        <div className='text-center mb-lg'>
          <h1>Cadastre-se</h1>
          <Link to='/sign-in'>Entrar</Link>
        </div>
        <div className='flex'>
          <div className='body-sign-up'>
            <div className='flex-column'>
              <label htmlFor='name'>Nome</label>
              <input id="name " type="text" placeholder='Digite seu nome' />
            </div>
            <div className='flex-column'>
              <label htmlFor='cep'>CEP</label>
              <input id="cep"
                type="text"
                placeholder='Digite seu CEP'
                value={cep}
                maxLength={9}
                onChange={(e) => setCep(e.target.value)} />
            </div>

            <InputPassword
              label="Senha"
              placeholder="Digite sua senha"
              value={password}
              setValue={setPassword} />
          </div>

          <div className='body-sign-up'>
            <div className='flex-column'>
              <label htmlFor='email'>E-mail</label>
              <input id="email " type="text" placeholder='Digite seu e-mail' />
            </div>
            <div className='flex-column'>
              <label htmlFor='cidade'>Cidade</label>
              <input id="cidade"
                type="text"
                placeholder='Digite sua cidade'
                value={city}
                onChange={(e) => setCity(e.target.value)} />
            </div>

            <InputPassword
              label="Confirme sua senha"
              placeholder="Digite sua senha novamente"
              value={confirmPassword}
              setValue={setconfirmPassword} />
          </div>
        </div>

        <button className='btn-dark-blue'>Cadastre-se</button>
        <AllRightReserved />




      </form>
    </div>
  )
}

export default SignUp
