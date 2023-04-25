import SideNavMenu from '@/components/shared/SideNavMenu';
import React, { ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="w-[100%]">
            <div className="max-w-[1200px] flex mx-auto">
                <SideNavMenu />
                <section className="w-full py-2 px-4 md:w-[80%] md:p-0">
                    {children}
                </section>
            </div>
        </main>
    );
};

export default HomeLayout;
