import React, { useState, useEffect } from 'react';
import { FormGroup, Label, Input, Col, Button, Container, Form } from "reactstrap"
import data from "../api/apidata"
import { useLocation, Redirect } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from 'react-redux'
import { addDataBase } from "../../redux/actions/userAction"

function Certificate() {

    const dispatch = useDispatch()
    const location = useLocation()
    const certif = useSelector(state => state.projectReducer)
    const { t } = useTranslation()

  

    const x = certif.project.filter(c => c.UniqueId === location.state.UniqueId)



    const [certificate, setCertificate] = useState({
        DomainName: x[0].DomainName ? x[0].DomainName : "",
        CaChain: x[0].CaChain ? x[0].CaChain : "",
        Certificate: x[0].Certificate ? x[0].Certificate : "",
        PrivateKey: x[0].PrivateKey ? x[0].PrivateKey : ""
    })


   

    const [domain, setDomain] = useState()
    const [chain, setChain] = useState()
    const [privateKey, setPrivateKey] = useState()
    const [certificateIn, setCertificateIn] = useState()

    useEffect(() => {

        if (location.state === undefined) {
            return <Redirect to="/" />
        }

        let domainInput = document.getElementById("domain")
        let chainInput = document.getElementById("chain")
        let privateKeyInput = document.getElementById("private")
        let certificateInput = document.getElementById("certificate")
        setDomain(domainInput)
        setChain(chainInput)
        setPrivateKey(privateKeyInput)
        setCertificateIn(certificateInput)

    }, [])




    const handleFocus = (e) => {
        e.target.style.border = "1px solid #ced4da"
    }

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        setCertificate({
            ...certificate,
            [name]: value
        })
    }

    const [state, setState] = useState("custom-color ml-3 ")

    const handleSubmit = (e) => {
        e.preventDefault()
        setState("btn btn-loading btn-xl custom-color disabled ml-3")

        if (certificate.DomainName === "") {
            domain.style.border = "1px solid #dc3545"
        }
        if (certificate.CaChain === "") {
            chain.style.border = "1px solid #dc3545"
        }
        if (certificate.PrivateKey === "") {
            privateKey.style.border = "1px solid #dc3545"
        }
        if (certificate.Certificate === "") {
            certificateIn.style.border = "1px solid #dc3545"
        }

        if (certificate.DomainName === "" ||
            certificate.CaChain === "" ||
            certificate.Certificate === "" ||
            certificate.PrivateKey === "") {
            toast.warn("Postunuz Elave olunmadi")
        } else {
            data.post(`/certificate`,
                {
                    unique_id: location.state.UniqueId,
                    ssl: {
                        ...certificate
                    }
                })
                .then(response => {
                    if (response.data.error === false) {
                        
                        dispatch(addDataBase(response.data.data))
                        setState("custom-color ml-3")
                        toast.success("Sertificatınız muveqqeyyitle elave edildi")
                    }
                    
                })
                .catch(error =>{
                        toast.error("Sertificatınız elave edilmədi")
                        setState("custom-color ml-3")
                })
        }
    }

   




    return (
        <div className="pb-5">
            <Container fluid={true}>
                <Col md={12} style={{ margin: "30px 0px 0px" }} className="pb-3">
                    <div className="shadow_box p-3">
                        <h3>{t("certificate")}</h3>
                        <div>
                            <h6>lorem ipsum dolor sit amet</h6>
                        </div>
                    </div>
                </Col>

                <Col md={12} className="mt-3">
                    <div style={{ padding: "30px 150px" }} className="shadow_box">
                        <Form onSubmit={(e) => handleSubmit(e)}>
                            <FormGroup className="form-style">
                                <Label for="Domain">{t("certificateDomain")}</Label>
                                <Input
                                    onFocus={(e) => handleFocus(e)}
                                    onChange={(e) => handleChange(e)}
                                    name="DomainName"
                                    style={{ width: "66%" }}
                                    value={certificate.DomainName}
                                    type="text"
                                    id="domain"
                                />
                            </FormGroup>
                            <FormGroup className="form-style">
                                <Label for="Chain">{t("certificateChain")}</Label>
                                <Input
                                    onFocus={(e) => handleFocus(e)}
                                    onChange={(e) => handleChange(e)}
                                    name="CaChain"
                                    style={{ resize: "none", width: "66%" }}
                                    type="textarea"
                                    value={certificate.CaChain}
                                    id="chain"
                                />
                            </FormGroup>
                            <FormGroup className="form-style">
                                <Label for="Certificate">{t("certificateCertificate")}</Label>
                                <Input
                                    onFocus={(e) => handleFocus(e)}
                                    onChange={(e) => handleChange(e)}
                                    style={{ resize: "none", width: "66%" }}
                                    type="textarea"
                                    name="Certificate"
                                    value={certificate.Certificate}
                                    id="certificate"
                                />
                            </FormGroup>
                            <FormGroup className="form-style">
                                <Label for="Key">{t("certificatePrivateKey")}</Label>
                                <Input
                                    onFocus={(e) => handleFocus(e)}
                                    onChange={(e) => handleChange(e)}
                                    style={{ resize: "none", width: "66%" }}
                                    type="textarea"
                                    name="PrivateKey"
                                    value={certificate.PrivateKey}
                                    id="private"
                                />
                            </FormGroup>
                            <Col md={12} style={{ textAlign: "right", padding: "0px" }}>
                                <Button className={state}>{
                                    x[0].DomainName === "" ?
                                        t("certificateChange") : t("certificateEdit")
                                }
                                </Button>
                            </Col>
                        </Form>
                    </div>
                </Col>
                <ToastContainer position="bottom-right" autoClose={3000} />
            </Container>
        </div>
    )
}


export default Certificate
