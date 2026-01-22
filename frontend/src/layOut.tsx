import {Outlet} from 'react-router-dom'
import Nav from './pages/NavBar/nav'
import Footer from './pages/Footer/footer'

function LayOut() {
    return (
        <>
        <Nav/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default LayOut