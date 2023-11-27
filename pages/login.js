import { getProviders, signIn } from 'next-auth/react';

export default function LoginPage({ providers }) {
  return (
    <div className="flex items-center justify-center h-screen">
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button onClick={async()=> {await signIn(provider.id)}} className="bg-twitterwhite pl-3 pr-5  py-2 text-black rounded-full flex items-center" >
          <img src='google_icon.png' className='h-8'/>
            Sign in with {provider.name}
            
          </button>
          
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
