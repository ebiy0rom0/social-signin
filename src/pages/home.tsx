import { useEffect, useState } from 'react'
import { useAuth } from "@/hooks/useAuth"
import { Session } from '@supabase/supabase-js'

const Home: React.FC = () => {
  const [ session, setSession ] = useState<Session | null>(null)
  const [ id, setID ] = useState("")
  const { supabase, redirect } = useAuth()

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.auth.getSession()
      if (error) redirect(error.message)
      if (data.session === null) redirect('session failed')

      // 確認用
      setSession(data.session)

      const r = await fetch("http://localhost:8080/verify", {
        headers: {
          Authorization: "Bearer " + data.session?.access_token
        }
      }).then(res => res).catch(e => new Error(e))

      if (r instanceof Error) {
        console.log("ERROR:" + r.message)
        return
      }
      if (r.status === 401) redirect('unverified')

      // サーバーからテキストでIDが返ってくる
      setID(await r.text())
    })()

    // サンプルのため、画面離脱時は強制サインアウト
    return () => { supabase.auth.signOut() }
  }, [])

  return (
    <div>
      <p>my status:: { JSON.stringify(session) }</p>
      <p>welcome! ID:{ id }!</p>
    </div> )
}

export default Home