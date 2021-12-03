import Navbar from './Navbar'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'

const Layout = ({children, footer = true}) => {

    const router = useRouter();

    useEffect( () => {

        const handleRouteChange = url => {
            console.log(url)
            NProgress.start();
        }

        router.events.on('routeChangeStart', handleRouteChange)

        router.events.on('routeChangeComplete', () => NProgress.done());

        return () => {
            router.events.off('routerChangeStart', handleRouteChange)
        }
    },[])

    return (
        <>
        <Navbar/>
        <main className="container py-4">
            {children}
        </main>
    
        {
            footer && (
                <footer className="bg-info text-light text-center">
            <div className="container p-4">
                <h1>
                    &copy; Carlos Chin Portfolio 
                </h1>
                <p>2000 - {new Date().getFullYear()}</p>
                <p>Made on earth by humans... Trust me.</p>
            </div>
        </footer>
            )
        }
        </>
    )
}

export default Layout;