import {Outlet} from 'react-router-dom'
import Nav from './pages/NavBar/nav'

function LayOut() {
    return (
        <>
        <Nav/>
        <Outlet/>
        </>
    )
}

export default LayOut