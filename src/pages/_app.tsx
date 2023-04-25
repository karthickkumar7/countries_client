import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/shared/Navbar';
import AuthLayout from '@/layouts/AuthLayout';
import HomeLayout from '@/layouts/HomeLayout';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
    const { pathname } = useRouter();
    return (
        <>
            <Navbar />
            {pathname.startsWith('/auth') ? (
                <AuthLayout>
                    <Component {...pageProps} />
                </AuthLayout>
            ) : (
                <HomeLayout>
                    <Component {...pageProps} />
                </HomeLayout>
            )}
        </>
    );
}
