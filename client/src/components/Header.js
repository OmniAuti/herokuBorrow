import { Link, useLocation } from "react-router-dom"
import {useState, useEffect }from 'react'

const Header = () => {

    const [aboutLocation, setAboutLocation] = useState(false)

    const location = useLocation()

    useEffect(() => {
        if (location.pathname !== '/') {
            setAboutLocation(true);
            return;
        }
        setAboutLocation(false)
    }, [location])


    return (
    <header className="h-20 flex items-center w-full bg-black">
        <div className="float-left ml-10 w-3/5 cursor-pointer"><Link to="/">Logo</Link></div>
        <nav className="w-2/5 h-full flex items-center float-right">
            <ul className="flex justify-around font-thin mx-10 w-full h-full">
                <li className="cursor-pointer grow flex items-center justify-center group">{aboutLocation ? <Link className="group-hover:underline grow flex h-full items-center justify-center" to="/about">About</Link> : <a className="group-hover:underline grow flex h-full items-center justify-center" target="_self" href="#about-home">About</a>}</li>
                <li className="cursor-pointer grow flex items-center justify-center group"><Link className="group-hover:underline grow flex h-full items-center justify-center" to="/borrow">Borrow</Link></li>
                <li className="cursor-pointer grow flex items-center justify-center group"><Link className="group-hover:underline grow flex h-full items-center justify-center" to="/offer">Offer</Link></li>
                <li className="cursor-pointer grow flex items-center justify-center group"><Link className="group-hover:underline grow flex h-full items-center justify-center" to="/ask">Ask</Link></li>
            </ul>
        </nav>
        <div className="mr-10 cursor-pointer hover:underline">Account</div>
    </header>)
}

export default Header