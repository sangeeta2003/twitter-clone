import { useSession } from "next-auth/react"
import { useEffect,useState } from "react"

export default function Home() {
  const{data:session,status}=useSession();
  const[userInfo,setUserInfo] = useState();
  const[userInfoStatus,setUserInfoStatus]=useState(false);
  function getUserInfo(){
    if(status == 'loading'){
      return ""
    }
    const uri = '/api/users?id='+session.user.id
    fetch(uri)
    .then(response=>{
      response.json().then(json=>{
        setUserInfo(json.user);
        setUserInfoStatus(true);

console.log(json);
      })
    })
  }
  useEffect(() => {
    getUserInfo();
  },);
  if(userInfoStatus === 'loading'){
    return 'loading user info';
  }
  if(!userInfo?.username){
    return 'no username';
  }

  return(
    <div>Test</div>
  )
}
  