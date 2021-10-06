import React from 'react'
import { Container, Col, } from 'reactstrap'
import ProjectItem from './ProjectItem'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import loading from "../../assets/img/load.gif"
import { useTranslation } from "react-i18next"



const Projects = () => {

    const allProject = useSelector(state => state.projectReducer)
    const { t } = useTranslation();

    return (
        <div className="pb-5">
            <Container>
                <Col md={12} style={{ alignItems: "center" }} className="projects-header shadow_box">
                    <div className="header">
                        <h5 className="m-0">{t('header')}</h5>
                        <Link
                            className="btn btn-primary custom-button custom-color"
                            to="/newproject"
                        >{t("projectAction")}
                        </Link>
                    </div>
                </Col>
                <div className="project-item-box">
                    <ul style={{
                        height: "100%",
                        margin: "0px"
                    }} className="list-unstyled">
                        {
                            allProject.loading ? (<Loading />) :
                                allProject.project.length === 0 ?
                                    (<NoItem />) :
                                    allProject.project.map(index =>
                                        (
                                            <li className="project-item d-flex justify-content-between" key={index.UniqueId}>
                                                <ProjectItem
                                                    projectDetail={index}
                                                />
                                            </li>
                                        ))
                        }
                    </ul>
                </div>
            </Container>
        </div >
    )
};

const NoItem = () => {
    const { t } = useTranslation()
    return (
        <div className="text-center p-5">
            <h2>{t("project")}</h2>
            <p>
                <Link className="btn btn-primary custom-button custom-color" to="/newproject">
                    {t("projectAction")}
                </Link>
            </p>
        </div>
    )
}

const Loading = () => {
    return (
        <div className="h-100 d-flex align-items-center justify-content-center">
            <img height="60px" width="60px" src={loading} alt="loading" />
        </div>
    )
}




export default Projects
