import Link from 'next/link';
import React from 'react';

const Register = () => {
    return (
        <div className="w-[400px] min-h-[300px] p-4 border space-y-4">
            <p className="text-2xl text-center font-semibold">register</p>
            <form className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="username"
                    className="p-2 outline-none rounded shadow-md bg-slate-50 focus:bg-sky-100"
                />
                <input
                    type="text"
                    placeholder="password"
                    className="p-2 outline-none rounded shadow-md bg-slate-50 focus:bg-sky-100"
                />
                <input
                    type="text"
                    placeholder="confirm password"
                    className="p-2 outline-none rounded shadow-md bg-slate-50 focus:bg-sky-100"
                />
                <button
                    type="submit"
                    className="p-2 uppercase shadow-md outline-none rounded text-white bg-sky-600"
                >
                    register
                </button>
            </form>
            <p className="text-center cursor-pointer hover:underline underline-offset-2">
                <Link href={'/auth/login'}>sign in</Link>
            </p>
        </div>
    );
};

export default Register;
