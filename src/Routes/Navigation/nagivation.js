import { Fragment } from 'react';
import "./navigation.styles.scss";
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    <Link className='nav-link' to='/sign-in'>SIGN IN</Link>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;