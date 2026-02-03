import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import ButtonPrincipal from './components/ButtonPrincipal';
import Contador from './components/Contador';

export default function Layout() {
    return (<>
        <Contador/>
        <Header/>

        <main>
            <Outlet/>
            <ButtonPrincipal/>
        </main>

        <Footer/>
    </>)
}