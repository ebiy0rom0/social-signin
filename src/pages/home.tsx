import { useEffect, useState } from 'react'
import { useAuth } from "@/hooks/useAuth"
import { Session } from '@supabase/supabase-js'
import { redirect } from 'react-router'

const Home: React.FC = () => {
  const [ session, setSession ] = useState<Session | null>(null)
  const [ id, setID ] = useState("")
  const { supabase } = useAuth()

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.auth.getSession()
      if (error || data.session == null) {
        alert('no session')
        window.location.href = '/'
      }
      console.log(data)

      const r = await fetch("http://localhost:8080/verify", {
        headers: {
          Authorization: "Bearer " + data.session?.access_token
        }
      }).then(res => res.text()).catch(e => new Error(e))

      if (typeof r === 'string') {
        setID(r)
      } else {
        console.log(r)
      }
    })()

    // サンプルのため、画面離脱時は強制サインアウト
    return () => { supabase.auth.signOut() }
  }, [])

  return (
    <div>
      <p>my status:: { JSON.stringify(session) }</p>
      <p>welcome { id }!</p>
    </div> )
}

export default Home