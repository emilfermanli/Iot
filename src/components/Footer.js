import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from "react-router-dom"
import Logo from "../assets/img/logo.png"
import { useTranslation } from "react-i18next"

function Footer() {

    const { t } = useTranslation()

    return (
        <div className="footer ">
            <Container fluid={true}>
                <Row>
                    <Col md={12} lg={4} xl={4} sm={12} className="footer-logo">
                        <div>
                            <Link to="/">
                                <img height="50" src={Logo} alt="logo" />
                            </Link>
                        </div>
                    </Col>
                    <Col md={6} lg={2} xl={2} sm={12}>
                        <ul className="list-unstyled">
                            <li>
                                {t("footerAbout")}
                            </li>
                            <li>
                                <a rel="noopener noreferrer" target='_blank' href="https://bdynamics.az/about-us">
                                    {t("footerHistory")}
                                </a>
                            </li>
                            <li>
                                <Link to="/">
                                    {t("footerProduct")}
                                </Link>
                            </li>



                        </ul>
                    </Col>
                    <Col md={6} lg={2} xl={2} sm={12} >
                        <ul className="list-unstyled">
                            <li>
                                Beta Dynamics
                            </li>
                            <li>
                                <a rel="noopener noreferrer" target='_blank' href="https://bdynamics.az/contact-us">
                                    {t("footerContact")}
                                </a>
                            </li>
                            <li>
                                <Link to="/">
                                    {t("footerCareer")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    {t("footerTerms")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    {t("footerPrivacy")}
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6} lg={2} xl={2} sm={12}>
                        <ul className="list-unstyled ">

                            <li>{t("footerService")}</li>
                            <li>
                                <Link to="/">{t("footerIot")}</Link>
                            </li>
                            <li>
                                <Link to="/">Beta Track</Link>
                            </li>
                            <li>
                                <Link to="/">Zero drone</Link>
                            </li>

                        </ul>
                    </Col>
                    <Col md={6} lg={2} xl={2} sm={12}>
                        <ul className="list-unstyled ">

                            <li>{t("footerSocial")}</li>
                            <li>
                                <a rel="noopener noreferrer" target='_blank' href="https://www.facebook.com/Beta-Dynamics-620404405073312">
                                    <svg fill="#ffffffb3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" /></svg>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" target='_blank' href="https://twitter.com/BetaDynamics">
                                    <svg fill="#ffffffb3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" /></svg>
                                    Twitter</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" target='_blank' href="https://www.instagram.com/betadynamics/">
                                    <svg fill="#ffffffb3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" /></svg>
                                    Instagram</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" target='_blank' href="https://github.com/betadynamics">
                                    <svg fill="#ffffffb3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    Github</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" target='_blank' href="https://wa.me/994516989815">
                                    <svg fill="#ffffffb3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" /></svg>
                                    Whatsapp</a>
                            </li>

                        </ul>
                    </Col>
                    <Col lg={12} className="footer-mini">
                        <p>{t("footerlaw")} © Beta Dynamics 2017 - 2020.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer