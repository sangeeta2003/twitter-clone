import { useSession } from "next-auth/react"
import { useEffect } from "react"

export default function Home() {
  const{data:session,status}=useSession();
  function getUserInfo(){
    if(status == 'loading'){
      return ""
    }
    const uri = '/api/users?id='+session.user.id
    fetch(uri)
  }
  useEffect(() => {
    
  }, []);

  return(
    <div>Test</div>
  )
}
  