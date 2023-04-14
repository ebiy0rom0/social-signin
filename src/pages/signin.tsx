import { useAuth } from '@/hooks/useAuth'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeMinimal, ThemeSupa } from '@supabase/auth-ui-shared'
import { Link } from 'react-router-dom'

const Signin: React.FC = () => {
  const { supabase } = useAuth()

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-slate-100">
      <div className="w-96">
        <Auth
          supabaseClient={ supabase }
          appearance={{
            theme: ThemeSupa,
            style: {
              button: {
                color: '#2e2e2e'
              }
            }
          }}
          providers={['google', 'github']}
          socialLayout='horizontal'
          redirectTo={'http://localhost:5173/home'}
          showLinks={false}
        />
        <div className="grid justify-items-end">
          <Link to="/">sign up is here</Link>
        </div>
      </div>
    </div>
  )
}

export default Signin