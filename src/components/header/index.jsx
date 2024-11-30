import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>

            <Link to={'/'}>Home</Link>
            <Link to={'/actor'}>Actor</Link>
        </>
    )
}

export default Header