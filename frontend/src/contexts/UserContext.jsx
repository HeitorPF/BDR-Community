import { createContext, useState } from 'react';
import axios from 'axios'

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

const API_KEY = import.meta.env.VITE_API_KEY

export function UserProvider({ children }) {
  const [user, setUser] = useState();

  async function register(name, email, password, nameInGame, tag) {
    const response = await axios.get(`https://api.henrikdev.xyz/valorant/v2/account/${nameInGame}/${tag}`, {
      headers: {
        Authorization: API_KEY,
        Accept: '*/*'
      }
    })
    const player = {
      user: {
        name,
        email,
        password,
        wallet: 10
      },
      puuid: response.data.data.puuid,
      region: response.data.data.region,
      account_level: response.data.data.account_level,
      name: response.data.data.name,
      tag: response.data.data.tag,
      platforms: response.data.data.platforms,
    }
    setUser(player)
    localStorage.setItem('user', JSON.stringify(player))
  }

  async function getDataUser() {
    let player = JSON.parse(localStorage.getItem('user'))
    const response = await axios.get(`https://api.henrikdev.xyz/valorant/v3/by-puuid/mmr/${player.region}/pc/${player.puuid}`, {
      headers: {
        Authorization: API_KEY,
        Accept: '*/*'
      }
    })
    player = {
      ...player,
      name: response.data.data.account.name,
      tag: response.data.data.account.tag,
      peak: response.data.data.peak,
      current: response.data.data.current
    }
    setUser(player)
    localStorage.setItem('user', JSON.stringify(player))
  }

  function login(userData) {
    setUser(userData);
  };

  function logout() {
    setUser(null);
    localStorage.removeItem('user')
  };

  return (
    // Tudo que passarmos na prop "value" ficará acessível globalmente
    <UserContext.Provider value={{ user, login, logout, register, getDataUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
}