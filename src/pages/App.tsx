import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import * as buttons from 'react-social-login-buttons'

function App() {
  const [count, setCount] = useState(0)

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
      <div className="flex flex-col items-center">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="grid grid-cols-2 gap-x-4">
       <buttons.FacebookLoginButton />
        <buttons.GoogleLoginButton />
        <buttons.GithubLoginButton />
        <buttons.TwitterLoginButton />
        <buttons.AmazonLoginButton />
        <buttons.InstagramLoginButton />
        <buttons.LinkedInLoginButton />
        <buttons.MicrosoftLoginButton />
        <buttons.BufferLoginButton />
        <buttons.TelegramLoginButton />
        <buttons.AppleLoginButton />
        <buttons.DiscordLoginButton />
        <buttons.SlackLoginButton />
        <buttons.OktaLoginButton />
        <buttons.YahooLoginButton />
      </div>
    </div>
  )
}

export default App
