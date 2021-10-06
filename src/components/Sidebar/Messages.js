import React, { useState, useEffect } from 'react'
import {wssocket} from "../socket"
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Table } from 'reactstrap'
import { useTranslation } from "react-i18next"
import { useLocation,Redirect } from "react-router-dom"
import {currentWebsocketStatus} from "../../redux/actions/userAction"
import {useDispatch} from "react-redux"



const Messages = () => {

    const { t } = useTranslation()
    const location = useLocation()
    const dispatch = useDispatch()    
    
    
    useEffect(() => {
        wssocket.onopen = () => {   
            console.log("connected")  
            dispatch(currentWebsocketStatus(1))  
        }
    }, [dispatch]) 
  
    var wsReconnectedTime = Math.floor(Math.random() * (10 - 5)) + 5

    useEffect(() => {
        wssocket.onmessage =  (event) => {
            console.log(JSON.parse(event.data))
            const subRes = JSON.parse(event.data)
            if (subRes.Action === false) {
                setMessage(message.concat(JSON.parse(event.data)))
            } else {
                return null
            } 
            if (subRes.Subscribe === true && subRes.Action === false) {
                setTag(tag.concat({"name": subRes.Topic}))
                // console.log(tag)            
            }
            console.log(event)
        }

        wssocket.onerror = (error) => {
            if (error) {
                dispatch(currentWebsocketStatus(2))
                setTimeout(function () {
                    wssocket.onopen = () => {
                    console.log("re connected");
                    dispatch(currentWebsocketStatus(1))
                  };
                }, Number(wsReconnectedTime + "000"));
              }
        }
        return () => {
            wssocket.onclose = () => {
                console.log("disconnected")    
                dispatch(currentWebsocketStatus(2))   
            }
            
        }
        
    }, [message, tag,wsReconnectedTime,dispatch])

    

    

    const [message, setMessage] = useState([])
    const [devices, setDevices] = useState([])

    const reverseDevice = [...message].reverse()
    const reverseArray = [...devices].reverse()

    const [tag, setTag] = useState([])
    
    

    const [retain, setRetain] = useState(false)
    
    const [mss, setMss] = useState({
        Action: true,
        ProjectUniqueId: location.state.UniqueId,
        Topic: "",
        QOS: 0,
        Retain: retain,
        PayloadType: 0,
        Payload: "",
   
    })
    
    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        if (name === "QOS") {
            value = Number(e.target.value)
        }
        if ( name === "PayloadType") {
            value = Number(e.target.value)
        }
    
        setMss({
            ...mss,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (mss.QOS === "Payload" || mss.Topic === "") {
            return null
        } else {
        wssocket.send(JSON.stringify(mss))
        console.log("gonderdiyim" + JSON.stringify(mss))
        }
    }

    const [subTop, setSubTop] = useState({
        ProjectUniqueId: location.state.UniqueId,
        Action: false,
        Subscribe: true,
        QOS: 0,
        Topic: "",
    })

    const handleTopics = (e) => {
        let name = e.target.name
        let val = e.target.value

        if (name === "QOS" ) {
            val = Number(e.target.value)
        } else {
            val = e.target.value
        }
        setSubTop({
            ...subTop,
            [name]: val,
        })
    }
    
    const topicSubmit = (e) => {
        e.preventDefault()
        const input = document.getElementById("Client")
        if (subTop.Topic === "") {
            return null
        } else {
            wssocket.send(JSON.stringify(subTop))
            console.log("gonderdiyim" + JSON.stringify(subTop))
            input.value = ""
        }
    }


    const [bigbar, setBigbar] = useState(2)

    const handleClick = (num) => {
        setBigbar(num)
    }

    const subDelete = (name) => {
        const x = tag.filter(c => c.name !== name)
        var unsubscribe = {
            ProjectUniqueId: subTop.ProjectUniqueId,
            Action: subTop.Action,
            Subscribe: false,
            QOS: subTop.QOS,
            Topic: subTop.Topic,
       
        }
        wssocket.send(JSON.stringify(unsubscribe))
        // socket.send(JSON.stringify(subTop))
        setTag(x)
    }
    
    if (location.state === undefined) {
        return <Redirect to="/" />
    }
    

    


    return (
        <div className="pb-5">
            <Container fluid={true}>
                <Row className="m-0">
                    <Col md={12}>
                        <Col md={12} className="projects-header shadow_box p-3" >
                            <h3>
                             {t("messagesProject") + ": " + location.state.ProjectName}  
                            </h3>
                            <div>
                                <h6>{t("messagesInfo")}</h6>
                            </div>
                        </Col>
                    </Col>
                    <Col md={4} style={{ padding: "0px" }}>
                        <Col md={12} >
                            <Col md={12} className="message-box shadow_box">
                                <h6>{t("messagesSend")}</h6>
                                <Form onSubmit={(e) => handleSubmit(e)}>
                                    <FormGroup>
                                        <Label for="Topic">{t("messagesTopic")}</Label>
                                        <Input
                                            onChange={(e) => handleChange(e)}
                                            type="text"
                                            id="Topic"
                                            name="Topic"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="Topic">QoS</Label>
                                        <Input
                                            onChange={(e) => handleChange(e)}
                                            type="select"
                                            id="exampleSelect"
                                            name="QOS"
                                        >
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup >
                                        <Label className="mr-4" for="Topic">Retain</Label>
                                        <Input
                                            onChange={() => {setRetain(!retain)}}
                                            type="checkbox"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleS">Payload Type</Label>
                                        <Input
                                            type="select"  
                                            name="PayloadType" 
                                            onChange={(e) => handleChange(e)}
                                            id="exampleS"
                                        >
                                            <option value="0">Json</option>
                                            <option value="1">XML</option>
                                            <option value="2">String</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="py">Payload</Label>
                                        <Input
                                            onChange={(e) => handleChange(e)}
                                            style={{ resize: "none", }}
                                            type="textarea"
                                            name="Payload"
                                            id="py"
                                        />
                                    </FormGroup>
                                    <Button className="custom-color">{t("send")}</Button>
                                    <br />
                                    <br />
                                    <span style={{fontSize: "14px"}} className="text-danger">{t("debugMessagesInfo")} <a className="text-primary" href="https://app.bdynamics.az/" rel="noopener noreferrer" target="_blank">app.bdynamics.az</a></span>
                                </Form>
                            </Col>
                        </Col>
                        <Col md={12}>
                            <Col md={12} className="message-mini shadow_box">
                                <h6>{t("messagesClearSession")}</h6>
                                <Form onSubmit={(e) => topicSubmit(e)}>
                                    <FormGroup>
                                        <Label for="Client">{t("messagesClient")}</Label>
                                        <Input
                                            onChange={(e) => handleTopics(e)}
                                            style={{ resize: "none", }}
                                            type="text"
                                            name="Topic"
                                            id="Client"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="Client">QoS</Label>
                                        <Input
                                            type="select"
                                            name="QOS"                                     
                                            onChange={(e) => handleTopics(e)}
                                            id="Client">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </Input>
                                    </FormGroup>
                                    <Button className="custom-color">{t("subscription")}</Button>
                                </Form>
                                <div>
                                    <ul className="sub-tag">
                                        {
                                            tag && tag.map(index => (
                                                <li key={index.name}><button onClick={() => subDelete(index.name)} className="delete-sub">x</button> {index.name}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </Col>
                        </Col>
                    </Col>
                    <Col md={8}>
                        <Col md={12} className="message-box shadow_box h-100" style={{ overflowY: "scroll" }}>
                            <div className="mb-3 d-flex mss-btn-box">
                                <Button onClick={() => handleClick(2)}
                                    color="white"
                                    style={{ outline: "none !important", marginRight: "15px" }}
                                    className={bigbar === 2 ? "tabs-index" : "tabs-index-inactive"}  >Table</Button>
                                <Button onClick={() => handleClick(1)}
                                    color="white"
                                    style={{ outline: "none !important" }}
                                    className={bigbar === 1 ? "tabs-index" : "tabs-index-inactive"}
                                >Devices</Button>
                            </div>
                            {
                                bigbar === 1 ? <div>
                                    <Col lg={12}>
                                        <h6 style={{ border: "none" }}>{t("messagesReceive")}</h6>
                                    </Col>
                                    <Table borderless >
                                        <thead className="big">
                                            <tr>
                                                <th>Client ID</th>
                                                <th>Status</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                reverseArray.map(indexMes => (
                                                    <tr key={indexMes.length}>
                                                        <td>{indexMes.QOS}</td>
                                                        <td>{indexMes.Topic}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </Table>
                                </div> :
                                    <div>
                                        <Table borderless >
                                            <thead className="big">
                                                <tr>
                                                    {/* <th>Client ID</th> */}
                                                    <th>QOS</th>
                                                    <th>Topic</th>
                                                    <th>Retain</th>
                                                    <th>Payload Type</th>
                                                    <th>Payload</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    reverseDevice.map(index => index.Payload === null ? null :
                                                        <tr key={index.length}>
                                                            {/* <td>{index.ProjectUniqueId}</td> */}
                                                            <td>{index.QOS}</td>
                                                            <td>{index.Topic}</td>
                                                            <td>{JSON.stringify(index.Retain)}</td>
                                                            <td>{index.PayloadType}</td>
                                                            <td>{index.Payload}</td>
                                                        </tr>    
                                                    )
                                                }
                                            </tbody>
                                        </Table>
                                    </div>
                            }
                        </Col>
                    </Col>
                    
                </Row >
            </Container >
            
        </div >
    )
};


export default Messages
