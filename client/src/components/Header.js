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
        <nav className="w-2/5 float-right">
            <ul className="flex justify-around font-thin mx-10">
                <li className="cursor-pointer">{aboutLocation ? <Link to="/about">About</Link> : <a target="_self" href="#about-home">About</a>}</li>
                <li className="cursor-pointer"><Link to="/borrow">Borrow</Link></li>
                <li className="cursor-pointer"><Link to="/offer">Offer</Link></li>
                <li className="cursor-pointer"><Link to="/ask">Ask</Link></li>
            </ul>
        </nav>
        <div className="mr-10 cursor-pointer">Account</div>
    </header>)
}

export default Header