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

  const signup = async () => await auth.signUp({ email, password })

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
      <form className="w-96">
        <div className="grid gap-5">
          <div>
            <label htmlFor="email" className="block mb-2 ms-1 font-medium">e-mail</label>
            <input
              id="email"
              type="text"
              className="
                w-full
                ps-3 py-1
                border
                rounded-md
                placeholder-gray-400
                bg-slate-50
                border-gray-300
                focus:outline-blue-400
              "
              value={email}
              placeholder="your.address@sekareco.jp"
              onChange={ e => setEmail(e.target.value) }
            />
          </div>
          <div>
            <label htmlFor="passwd" className="block mb-1 ms-1 font-medium">password</label>
            <input
              id="passwd"
              type="password"
              className="
                w-full
                ps-3 py-1
                border
                rounded-md
                placeholder-gray-400
                bg-slate-50
                border-gray-300
                focus:outline-blue-400
              "
              value={password}
              placeholder="•••••••••"
              onChange={ e => setPassword(e.target.value) }
            />
          </div>
          <button
            className="
              w-full
              px-5 py-1.5
              text-white
              font-medium
              border-none
              rounded-md
              bg-blue-400
              border-blue-400/80
              hover:bg-blue-500/90
              active:bg-blue-500
            "
            onClick={ async () => console.log(await signup()) }
          >
            Sign Up
          </button>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
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
