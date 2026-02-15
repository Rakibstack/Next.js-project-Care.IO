
'use client'

import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = () => {
    const session = useSession()
    return (
        <div>
            {session.status === 'authenticated' ? (
                <button
                    onClick={() => signOut()}
                    className="px-4 cursor-pointer py-2 rounded-full border border-gray-300 hover:border-indigo-500 transition"
                >
                    LogOut
                </button>
            ) : (<>
                <button
                    onClick={() => signIn()}
                    className="px-4 cursor-pointer py-2 rounded-full border border-gray-300 hover:border-indigo-500 transition"
                >
                    Login
                </button>
            </>)}

        </div>
    );
};

export default AuthButton;