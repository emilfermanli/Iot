import React from "react";
import {
    Switch,
    Route,
    useRouteMatch,
    useParams,
    NavLink,
    useLocation,
    Redirect,
} from "react-router-dom";
import ProjectSettings from "./ProjectSetting"
import Certificate from "./Certificate";
import Messages from "./Messages"
import Logs from "./Logs";
import Statistic from "./Statistic";
import { useTranslation } from "react-i18next"



function Sidebar() {

    let { path, url } = useRouteMatch();
    let location = useLocation()
    console.log(location)

   

    const { t } = useTranslation()

    if (location.state === undefined) {
        return <Redirect to="/" />
    }

    return (
        <div style={{ display: "flex" }}>
            <div
                style={{
                    width: "15%",
                }}
            >
                <ul className="sidebar-items" style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        <NavLink to={{
                            pathname: `${url}/project`,
                            state: location.state
                        }} className="nav-itm" activeClassName="main-nav-active">{t("projectSettings")}</NavLink>
                    </li>
                    <li>
                        <a href="https://app.bdynamics.az/" target="_blank" rel="noopener noreferrer" className="nav-itm" activeClassName="main-nav-active" >
                            Beta live analytics
                            {/* {t("azureStream")} */}
                        </a>
                    </li>
                    <li>
                        <NavLink to={{
                            pathname: `${url}/certificate`,
                            state: location.state
                        }}
                            className="nav-itm" activeClassName="main-nav-active">{t("certificate")}</NavLink>
                    </li>
                    <li>
                        <NavLink to={{
                            pathname: `${url}/messages`,
                            state: location.state
                        }}
                            className="nav-itm" activeClassName="main-nav-active">{t("messages")}</NavLink>
                    </li>
                    <li>
                        <NavLink to={{
                            pathname: `${url}/static`,
                            state: location.state
                        }}
                            className="nav-itm" activeClassName="main-nav-active">{t("statics")}</NavLink>
                    </li>
                    <li>
                        <NavLink to={{
                            pathname: `${url}/logs`,
                            state: location.state
                        }}
                            className="nav-itm" activeClassName="main-nav-active">{t("logs")}</NavLink>
                    </li>
                </ul>
            </div>
            <div style={{ width: "83%" }}>
                {/* {
                  !location.state ? <Redirect to='/' /> : */}
                        <Switch>
                            <Route exact path={path}>
                                <ProjectSettings />
                            </Route>
                            <Route path={`${path}/:topicId`} 
                            render={(props) => <Redirect to={{
                                pathname: path + "/:topicId",
                                state: props.location.state
                                }}/>}
                            >
                                <System exact />
                            </Route>
                        </Switch>

                {/* } */}
            </div>
        </div>
    );




    function System() {

        let { topicId } = useParams();

        if (topicId === "project") {
            return (<ProjectSettings exact />)
        }

        // if (topicId === "azure") {
        //     return (<Azure />)
        // }

        if (topicId === "certificate") {
            return (<Certificate />)
        }
        if (topicId === "messages") {
            return (<Messages />)
        }
        if (topicId === "static") {
            return (<Statistic />)
        }
        if (topicId === "logs") {
            return (<Logs />)
        }

    }
}



export default Sidebar