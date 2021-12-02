import React from 'react'
import { getProviders, signIn } from "next-auth/react"


const Login = ({ providers }) => {
    return (
        <div>
            <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="spotify logo" />

            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button>Login with {provider.name}</button>
                </div>
            ))}

        </div>
    );
}

export default Login;

export async function getServerSidEProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        }
    }
}