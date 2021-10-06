import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import {
    Switch,
    Route,
    useRouteMatch,
    useParams,
    NavLink,
} from "react-router-dom";

function Documentation() {


    let { path, url } = useRouteMatch();

    return (
        <div className="pt-5 pb-5">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="doc-section">
                            <ul className="sidebar-items" style={{ listStyleType: "none", padding: 0 }}>
                                <li>
                                    <NavLink to={{
                                        pathname: `${url}/doc_1`,

                                    }} className="nav-itm" activeClassName="main-nav-active">test</NavLink>
                                </li>
                                <li>
                                    <NavLink to={{
                                        pathname: `${url}/doc_2`,

                                    }} className="nav-itm" activeClassName="main-nav-active" >quest 1</NavLink>
                                </li>
                                <li>
                                    <NavLink to={{
                                        pathname: `${url}/doc_3`,

                                    }}
                                        className="nav-itm" activeClassName="main-nav-active">quest 1</NavLink>
                                </li>
                                <li>
                                    <NavLink to={{
                                        pathname: `${url}/doc_4`,

                                    }}
                                        className="nav-itm" activeClassName="main-nav-active">quest 1</NavLink>
                                </li>
                                <li>
                                    <NavLink to={{
                                        pathname: `${url}/doc_5`,

                                    }}
                                        className="nav-itm" activeClassName="main-nav-active">quest 1</NavLink>
                                </li>
                                <li>
                                    <NavLink to={{
                                        pathname: `${url}/doc_6`,

                                    }}
                                        className="nav-itm" activeClassName="main-nav-active">test</NavLink>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="doc-box">
                            <Switch>
                                <Route exact path={path}>
                                    <p>asdasd</p>
                                </Route>
                                <Route path={`${path}/:topicId`}>
                                    <System />
                                </Route>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


function System() {

    let { topicId } = useParams();

    if (topicId === "doc_1") {
        return (<p>sallam</p>)
    }
    if (topicId === "doc_2") {
        return (<p>sagol</p>)
    }
    if (topicId === "doc_3") {
        return (<p>hello</p>)
    }
    if (topicId === "doc_4") {
        return (<p>bye</p>)
    }
    if (topicId === "doc_5") {
        return (<p>track</p>)
    }
    if (topicId === "doc_6") {
        return (<p>track</p>)
    }

}

export default Documentation
