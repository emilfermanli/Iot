import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from 'reactstrap'
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import data from "../api/apidata"
import loading from "../../assets/img/load.gif"




function Statistic() {

    const { t } = useTranslation()


    const location = useLocation()
    const [statistic, setStatistic] = useState()

    useEffect(() => {
        setTimeout(function(){ 
            data.post(`/statistics`, { unique_id: location.state.UniqueId })
            .then(res => setStatistic(res.data.data))
         }, 3000);
    }, [location])

    console.log(statistic)

    return (
        <div className="pb-5 h-100">
            {
                statistic === undefined ? <Loading />
                :
                <Container fluid={true}>
                {
                    
                    <Row className="m-0">
                        
                        <Col md={6}>
                            
                                <ul className="list-unstyled statistic_box shadow_box ">
                                <li><h3>{t("headerMQ")}</h3></li>

                                <li>{t("maxConnected")}
                                    {
                                        statistic === undefined ? "" : statistic.MQTTConnections.MaxConnected
                                    }
                                </li>
                                <li>{t("online")}{
                                    statistic === undefined ? "" : statistic.MQTTConnections.Online
                                }

                                </li>
                                <li>{t("savedConnections")}
                                    {
                                        statistic === undefined ? "" : statistic.MQTTConnections.SavedConnections
                                    }
                                </li>
                            </ul>
                            
                            
                        </Col>
                        <Col md={6}>
                            <ul className="list-unstyled statistic_box shadow_box ">
                                <li><h3>{t("headerSSLMQ")} </h3></li>
                                <li>{t("maxConnected")} {
                                    statistic === undefined ? "" : statistic.SSLMQTTConnections.MaxConnected
                                }
                                </li>
                                <li>{t("online")}{
                                    statistic === undefined ? "" : statistic.SSLMQTTConnections.Online
                                }
                                </li>
                                <li>{t("savedConnections")} {
                                    statistic === undefined ? "" : statistic.SSLMQTTConnections.SavedConnections
                                }</li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <ul className="list-unstyled statistic_box shadow_box ">
                                <li><h3>{t("headerWebSocket")}</h3></li>
                                <li>{t("maxConnected")} {statistic === undefined ? "" : statistic.WebsocketConnections.MaxConnected}</li>
                                <li>{t("online")}{statistic === undefined ? "" : statistic.WebsocketConnections.Online}</li>
                                <li>{t("savedConnections")} {statistic === undefined ? "" : statistic.WebsocketConnections.SavedConnections}</li>
                            </ul>
                        </Col>
                    </Row>}
            </Container>
            }
            
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



export default Statistic


