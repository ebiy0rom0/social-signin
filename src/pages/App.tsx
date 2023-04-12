import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import * as buttons from 'react-social-login-buttons'
import { useAuth } from '@/hooks/useAuth'

function App() {
  const [count, setCount] = useState(0)

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const { auth } = useAuth()

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <div className="flex gap-x-10 h-12">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold my-4">Vite + React</h1>
      <form className="flex flex-col items-center gap-3">
        <div className="inline-flex w-full">
          <label htmlFor="email" className="w-16 me-4">e-mail</label>
          <input id="email" className="border rounded-xl w-full" value={email} onChange={ e => setEmail(e.target.value) } />
        </div>
        <div className="inline-flex w-full">
          <label htmlFor="passwd" className="w-16 me-4">password</label>
          <input id="passwd" className="border rounded-xl w-full" value={password} onChange={ e => setPassword(e.target.value) } />
        </div>
        <button className="border px-5 py-1 rounded-full w-full bg-sky-500/80 font-bold text-white" onClick={ () => auth.signUp({ email, password }) }>
          Sign Up
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </form>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="grid grid-cols-2 gap-x-4">
        <buttons.GoogleLoginButton />
        <buttons.GithubLoginButton />
      </div>
    </div>
  )
}

export default App
