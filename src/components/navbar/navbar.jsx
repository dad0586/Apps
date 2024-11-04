
import styles from './navbar.module.scss'
import StarImage from '../../assets/icons/Combined Shape.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
const Navbar = () => {
    const path = window.location.pathname
    const navigate = useNavigate()
    return (
        <>
            <nav>
                <div className={`${styles.navbar} container`}>
                    <p>Up to 60% off selected items + 10% off all everything. Ends in 1d 10h 07m 55s </p>
                </div>
            </nav>
            <div className={styles.nav_info}>
                <div className={`${styles.info_inner} container`}>
                    <div className={styles.inner_left}>
                        <p>We are rated 4.8 out of 5</p>
                        <img src={StarImage} alt="" />
                        <img src={StarImage} alt="" />
                        <img src={StarImage} alt="" />
                        <img src={StarImage} alt="" />
                        <img src={StarImage} alt="" />
                        <p>TrustPilot</p>
                    </div>
                    <div className={styles.nav_links}>
                        <select onChange={() => navigate('/home')} name="" id="">
                            <option value="">nimadir</option>
                            <option onClick={() => navigate('/home')} value="">link</option>
                            <option value="">nimadir</option>
                        </select>
                        <Link to={"/"}>FAQs</Link>
                        <Link to={"/"}>Need help?</Link>
                        <Link to={"/"}>Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar