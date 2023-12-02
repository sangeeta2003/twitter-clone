import { useSession } from "next-auth/react"
import { useEffect,useState } from "react"
import UsernameForm from "../components/usernameform";
import useUserinfo from "../hooks/useUserInfo";
export default function Home() {
  const{data:session,status}=useSession();
  const {userInfo,setUserInfo,status:userInfoStatus} = useUserinfo();
  
  if(userInfoStatus === 'loading'){
    return 'loading user info';
  }
  if (userInfo && !userInfo?.username) {
    return <UsernameForm />;
  }
  return(
    <div>Test</div>
  )
}
  