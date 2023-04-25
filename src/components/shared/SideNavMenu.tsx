import { useRouter } from 'next/router';
import React from 'react';

const sideMenuItems = [
    {
        id: 1,
        name: 'countries',
        href: '/',
    },
    {
        id: 2,
        name: 'continents',
        href: '/continent',
    },
    {
        id: 3,
        name: 'compare',
        href: '/compare',
    },
];

const SideNavMenu = () => {
    const router = useRouter();
    return (
        <section className="hidden md:block w-[20%] h-[calc(100vh-48px)] p-4">
            <ul className="space-y-3 mt-8">
                {sideMenuItems.map((item) => (
                    <li
                        key={item.id}
                        className="text-xl font-semibold cursor-pointer"
                        onClick={() => router.push(item.href)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default SideNavMenu;
