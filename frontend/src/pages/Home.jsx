import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export function Home() {
  const { user, logout } = useContext(UserContext)

  return (
    <div className='home'>
      <h1>Olá, {user?.user.name || 'usuário'}</h1>
      <h2>informações</h2>
      <p>nick: {user?.name}#{user?.tag}</p>
      <p>Level da conta: {user?.account_level}</p>
      <p>Rank Atual: {user?.current.tier.name}</p>
      <p>Peak: {user?.peak.tier.name} - Season: {user?.peak.season.short}</p>
      <button>Ver campeonatos</button>
      <button>Ver Duelos</button>
      <hr />
      <button>criar duelo</button>
      <button
        onClick={logout}
      >Sair</button>
    </div >
  )
}