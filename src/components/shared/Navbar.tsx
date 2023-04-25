import React from 'react';
import Button from '../ui/Button';
import { AiTwotoneFire } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import Link from 'next/link';

const Navbar = () => {
    return (
        <main className="w-[100%] h-12 border-b shadow">
            <nav className="max-w-[1200px] h-full mx-auto flex justify-between items-center">
                <Link href={'/'}>
                    <div className="flex">
                        <AiTwotoneFire className="text-2xl text-red-500" />
                        <p className="text-lg font-semibold uppercase">Fire</p>
                    </div>
                </Link>
                <ul>
                    <li>
                        <Link href={'/auth/login'}>
                            <Button classname="px-4 flex items-center space-x-2 duration-200 shadow-none border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white">
                                <FiLogIn />
                                <span>signin</span>
                            </Button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </main>
    );
};

export default Navbar;
