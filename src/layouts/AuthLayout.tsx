import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="w-[100%] h-[600px]">
            <div className="max-w-[1200px] mx-auto">
                <div className="w-full mt-[20px] flex justify-center">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default AuthLayout;
