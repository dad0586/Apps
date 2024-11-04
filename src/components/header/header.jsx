import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import ButtonComponent from '../button/button'
import styles from './header.module.scss'
import { MyContext } from '../../context/home-context'
import { useContext, useState } from 'react'
const Header = () => {
    const backgroundColorItem = "linear-gradient(225deg, #6675F7 0%, #57007B 100%)"


    const navigate = useNavigate()


    const { setValue } = useContext(MyContext);
    const pathname = window.location.pathname
    console.log(pathname);

    const [active, setActive] = useState(false)

    return (
        <>
            <header>
                <div className={`${styles.header} container`}>
                    <div className={styles.headerLogo}>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className={styles.headerLinks}>

                        <Link className={"header-link"} to={'/'}>Service</Link>
                        <div onClick={() => {
                            navigate('/about');
                        }}>About us</div>


                        <Link to={'/'}>Blog</Link>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header