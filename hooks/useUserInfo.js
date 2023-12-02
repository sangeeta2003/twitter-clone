import {useState,useEffect} from 'react';
import { useSession } from 'next-auth/react';
export default function useUserinfo(){
    const{data:session,status:sessionStatus} = useSession();
    const[userInfo,setUserInfo] = useState();
  const[status,setStatus]=useState('loading');
  function getUserInfo(){
    if(sessionStatus == 'loading'){
      return ""
    }
    const uri = '/api/users?id='+session.user.id
    fetch(uri)
    .then(response=>{
      response.json().then(json=>{
        setUserInfo(json.user);
        setStatus('done');

console.log(json);
      })
    })
  }
  useEffect(() => {
    getUserInfo();
  },[sessionStatus]);
    return{userInfo,status}
}