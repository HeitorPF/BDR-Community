import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './contexts/UserContext'
import Modal from './components/Modal'
import './App.css'

export function App() {
  const { setUser, register, getDataUser } = useContext(UserContext)
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'))
    if (userData) {
      setUser(userData)
    }
  }, [])

  const [option, setOption] = useState('')
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
    nameInGame: '',
    tag: ''
  })

  function attRegisterForm(event) {
    const { name, value } = event.target
    setRegisterForm({
      ...registerForm,
      [name]: value
    })
  }

  return (
    <>
      <div className='cabecalho'>
        <div>Badaroska Community</div>
        <div onClick={() => { setOption('logar') }}>Logar</div>
        <div onClick={() => { setOption('registrar') }}>Registrar</div>
      </div>
      <h1>Bem vindo ao Badaroska Community</h1>

      <button onClick={getDataUser}>
        DataUser
      </button>


      <Modal isOpen={option === 'logar'} onClose={() => setOption('')}>
        <div className='logar'>
          <label htmlFor="name">Nome:</label>
          <input type="text" id='name' name='name' />
          <label htmlFor="password">Senha:</label>
          <input type="password" id='password' name='password' />
          <Link to="/home">Login</Link>
        </div>
      </Modal>

      <Modal isOpen={option === 'registrar'} onClose={() => setOption('')}>
        <div className='registrar'>
          <label htmlFor="name">Nome:</label>
          <input type="text" id='name' value={registerForm.name} onChange={attRegisterForm} name='name' />
          <label htmlFor="email">Email:</label>
          <input type="email" id='email' value={registerForm.email} onChange={attRegisterForm} name='email' />
          <label htmlFor="password">Senha:</label>
          <input type="password" id='password' value={registerForm.password} onChange={attRegisterForm} name='password' />
          <label htmlFor="name-in-game">Nome no Valorant:</label>
          <input type="text" id='name-in-game' value={registerForm.nameInGame} onChange={attRegisterForm} name='nameInGame' />
          <label htmlFor="tag-ing-game">Tag no Valorant</label>
          <input type="text" id='tag-in-game' value={registerForm.tag} onChange={attRegisterForm} name='tag' />
          <button onClick={() => {
            register(registerForm.name, registerForm.email, registerForm.password, registerForm.nameInGame, registerForm.tag)
          }}>Registrar</button>
        </div>
      </Modal>


    </>
  )
}
