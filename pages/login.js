import { getProviders, signIn, useSession } from "next-auth/react";

export default function LoginPage({ providers }) {
  const { data: session, status } = useSession();
  console.log({ session, status });

  return (
    <div className="flex items-center justify-center h-screen">
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button
            onClick={async () => {
              try {
                await signIn(provider.id);
              } catch (error) {
                console.error('Error signing in:', error);
              }
            }}
            className="bg-twitterWhite pl-3 pr-5 py-2 text-black rounded-full flex items-center hover:bg-gray-200 transition-colors"
          >
            <img src={`/${provider.id}_icon.png`} alt={`${provider.name} Icon`} className="h-8" />
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
    props: { providers }
  };
}
