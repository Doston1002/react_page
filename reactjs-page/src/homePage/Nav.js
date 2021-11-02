import React from 'react';
import navLogo from '../images/logo.png';
import like from '../images/navIcons/like.png';
import user from '../images/navIcons/user.png';
import shopping from '../images/navIcons/shopping.png';
import SearchIcon from '@material-ui/icons/Search';
import ResponsiveModal from './ResponsiveModal';

const Nav = () => {
    return (
        <>
            <nav className="navigation">
                <a href="#" className="nav-logo">
                    <img src={navLogo} alt="Navbar logo" />
                </a>

                <ResponsiveModal />

                <div className="searchSec">
                    <form>
                        <input 
                            type="text" 
                            className="searchInput"
                            placeholder="Search For Products, Brands & Categories"
                        />
                        <button className="searchBtn" type="button">
                            <SearchIcon />
                        </button>
                    </form>
                </div>

                <div className="icons">
                    <a href="#" className="bolimlar">
                        <img src={like} alt="like icon" />
                    </a>
                    <a href="#" className="bolimlar">
                        <img src={user} alt="user icon" />
                    </a>
                    <a href="#" className="bolimlar">
                        <img src={shopping} alt="shopping icon" />
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Nav;