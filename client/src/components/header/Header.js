import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'
import styles from './header.module.css'


function Header() {
    const auth = useSelector(state => state.auth)
    const {user, isLogged} = auth
    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

    const userLink = () => {
        return <li className={styles.drop_nav}>
            <Link to="#" className={styles.avatar}>
            <img src={user.avatar} alt=""/> {user.name} <i className="fas fa-angle-down"></i>
            </Link>
            <ul className={styles.dropdown}>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </li>
    }

    const transForm = {
        transform: isLogged ? "translateY(-5px)" : 0
    }

    return (
        <header>
            <div className={styles.logo}>
                <h4><Link to="/">&#8592;</Link></h4>
            </div>

            <ul style={transForm}>
                {/* <li><Link to="/"><i className="fas fa-shopping-cart"></i> Cart</Link></li> */}
                {
                    isLogged
                    ? userLink()
                    :<li><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
                }
                
            </ul>
        </header>
    )
}
export default Header
