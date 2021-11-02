import React, {useState} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MenuIcon from '@material-ui/icons/Menu';
import like from '../images/navIcons/like.png';
import user from '../images/navIcons/user.png';
import shopping from '../images/navIcons/shopping.png';
import SearchIcon from '@material-ui/icons/Search';


const CategoriesSec = () => {

    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
        <div className="categories">
            <ButtonDropdown className="categories_button" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    <MenuIcon className="menuIcon" />
                    All categories
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Menu 1</DropdownItem>
                    <DropdownItem>Menu 2</DropdownItem>
                    <DropdownItem>Menu 3</DropdownItem>
                    <DropdownItem id="responsiveIcon">
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
                    </DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <ul className="link__categories">
                <li className="link_item">
                    <a href="#" className="link active">
                        Home
                    </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">
                        New arrivals
                    </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">
                        Trending
                    </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">
                        Deals for you
                    </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">
                        Discounts
                    </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">
                        Weekly offers
                    </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">
                        Become a ventor
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default CategoriesSec;