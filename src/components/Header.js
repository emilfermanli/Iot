import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import User from "../assets/img/male.png";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"
import Logo from "../assets/img/real2.png"
import { useTranslation } from "react-i18next"




const Header = () => {

    const toggle = () => setIsOpen(!isOpen);
    const [isOpen, setIsOpen] = useState(false);

    const name = useSelector(state => state.dataReducer)

    const { t } = useTranslation()


    console.log(name)

    return (
        <div>
            <Navbar expand="md">
                <Link to="/"><img style={{ marginRight: "20px" }} height="25" src={Logo} alt="logo" /></Link>
                <Link to="/" className="btn custom-color text-white" >{t("allItm")}</Link>
                <Link to="/documentation" className="btn custom-color ml-2 text-white" >Documentation</Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="text-white">
                                <img style={{ borderRadius: "100%", marginRight: "10px" }} width="30px" height="30px" src={User} alt="user-img" />
                                {!name.username ? name.email : name.username}
                            </DropdownToggle>
                            <DropdownMenu right>
                                <Link to="/account">
                                    <DropdownItem>
                                        {t("accountSettings")}
                                    </DropdownItem>
                                </Link>
                                <Link to="/billing">
                                    <DropdownItem>
                                        {t("accountBilling")}
                                    </DropdownItem>
                                </Link>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <a href="/logout">
                                        {t("accountLog")}
                                    </a>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;