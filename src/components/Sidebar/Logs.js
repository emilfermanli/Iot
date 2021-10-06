import React, {useState, useEffect} from 'react'
import { Container, Col } from 'reactstrap'
import { useLocation } from "react-router-dom"
import data from "../api/apidata"

function Logs() {




    const location = useLocation()
    const [log, setLog] = useState()

    useEffect(() => {
        data.post(`/logs`, { unique_id: location.state.UniqueId })
            .then(res => setLog(res.data))
            
    }, [location])

    console.log(log)

    return (
        <div className="pb-5">
            <Container fluid={true}>
                <Col md={12}>
                    <div className="projects-header shadow_box p-3">
                        <ul className="list-unstyled list">
                            <li>Received</li>
                            <li>The total number of bytes received since the broker started.</li>
                            <li>Sent</li>
                            <li>The total number of bytes sent since the broker started.</li>
                            <li>Connected</li>
                            <li>The number of currently connected clients</li>
                            <li>Expired</li>
                            <li>The number of disconnected persistent clients that have been expired and removed through the persistent_client_expiration option.</li>
                            <li>Disconnected</li>
                            <li>The total number of persistent clients (with clean session disabled) that are registered at the broker but are currently disconnected.</li>
                            <li>Maximum</li>
                            <li>The maximum number of clients that have been connected to the broker at the same time.</li>
                            <li>Total</li>
                            <li>The total number of active and inactive clients currently connected and registered on the broker.</li>
                        </ul>
                    </div>
                </Col>
            </Container>
        </div>
    )
}


export default Logs