import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import {
    useLocation,
    Redirect
} from "react-router-dom";
import { useTranslation } from "react-i18next"
import data from "../api/apidata"


function ProjectSetting() {


    const location = useLocation()


    const handleRandom = () => {
        data.post(`/password`, { unique_id: location.state.UniqueId })
    }

    // const handleDownload = () => {
    //     data.post(`/project/download`, { unique_id: location.state.UniqueId })
    // }

    // const handleReset = () => {
    //     data.post(`/project/reset`, { unique_id: location.state.UniqueId })
    // }


    const { t } = useTranslation()

    if (location.state === undefined) {
        return <Redirect to="/" />
    }

    return (
        <div className="pb-5">
            <Container fluid={true}>
                <Row className="m-0">
                    <Col md={12} className="projects-header">
                        <div className="shadow_box p-3">
                            <h3>{t("projectName")}:
                            {location.state.ProjectName}
                            </h3>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="project-detail shadow_box p-3">
                            <ul className="list-unstyled">
                                <li>
                                    <span style={{ marginRight: "60px" }}>{t("projectServer")}</span>
                                </li>
                                {/* <li>
                                    <span style={{ marginRight: "60px" }}>{t("token")}</span>
                                </li> */}
                                <li>
                                    <span>{t("username")}</span>
                                </li>
                                <li>
                                    <span>{t("password")}</span>
                                </li>
                                <li>
                                    <span style={{ marginRight: "60px" }}>{t("port")}</span>
                                </li>
                                <li>
                                    <span style={{ marginRight: "60px" }}>{t("sslPort")}</span>
                                </li>
                                <li>
                                    <span style={{ marginRight: "60px" }}>Websocket port:</span>
                                </li>
                                <li>
                                    <span style={{ marginRight: "60px" }}>{t("planLimits")}</span>
                                </li>
                            </ul>
                            <ul className="list-unstyled">
                                <li>
                                    <span>www.bdynamics.az</span>
                                </li>
                                {/* <li>
                                    <span>eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9</span>
                                </li> */}
                                <li>
                                    <span>
                                        {location.state.Username}
                                    </span>
                                </li>
                                <li>
                                    <span className="mr-2">
                                        {location.state.Password}
                                    </span>
                                    <Button onClick={() => handleRandom()} color="primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-3.31 0-6.291 1.353-8.459 3.522l-2.48-2.48-1.061 7.341 7.437-.966-2.489-2.488c1.808-1.808 4.299-2.929 7.052-2.929 5.514 0 10 4.486 10 10s-4.486 10-10 10c-3.872 0-7.229-2.216-8.89-5.443l-1.717 1.046c2.012 3.803 6.005 6.397 10.607 6.397 6.627 0 12-5.373 12-12s-5.373-12-12-12z" /></svg>
                                    </Button>
                                </li>
                                <li>
                                    <span>
                                        {location.state.Port}
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        {location.state.SSLPort}
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        ...
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        {location.state.Plan === "Free" ?
                                            <span>25 device max connection
                                            only QOS 0 allowed
                                    Max storage 50mb</span> : <span>unlimited connection no physical restrictions QOS 0-2</span>}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    {/* <Col md={12} className="projects-header">
                        <div className="shadow_box p-3">
                            <h3>{t("database")}</h3>

                            <div>
                                <ul className="list-unstyled w-100">
                                    <li className="form-style mb-3"><span>{t("downloadText")}</span>
                                        <Button onClick={() => handleDownload()} className="custom-btn custom-color">{t("download")}</Button></li>
                                    <li className="form-style mb-3"><span>{t("resetText")}</span>
                                        <Button onClick={() => handleReset()} className="custom-btn custom-color">{t("reset")}</Button></li>
                                </ul>
                            </div>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}



export default ProjectSetting