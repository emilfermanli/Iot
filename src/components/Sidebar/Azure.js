// import React, { useState, useEffect } from 'react'
// import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
// import data from "../api/apidata"
// import { useLocation } from "react-router-dom"
// import { ToastContainer, toast } from 'react-toastify';
// import { useTranslation } from "react-i18next"
// import { useDispatch, useSelector } from 'react-redux'
// import { addDataBase } from "../../redux/actions/userAction"

// function Azure() {

//     const dispatch = useDispatch()

//     const location = useLocation()

//     const certif = useSelector(state => state.projectReducer)

//     const x = certif.project.filter(c => c.UniqueId === location.state.UniqueId)

//     const { t } = useTranslation()

//     const [azure, setAzure] = useState({
//         AzureStreamName: x[0].AzureStreamName ? x[0].AzureStreamName : "",
//         AccessKey: x[0].AccessKey ? x[0].AccessKey : "",
//         SecretAccessKey: x[0].SecretAccessKey ? x[0].SecretAccessKey : "",
//         AzureRegion: x[0].AzureRegion ? x[0].AzureRegion : ""
//     })

//     const [inputs, setInputs] = useState({
//         streamName: "",
//         accessKey: "",
//         accessKeySecret: "",
//         exampleSelect: ""
//     })

//     useEffect(() => {
//         let streamName = document.getElementById("StreamName")
//         let accessKey = document.getElementById("AccessKey")
//         let accessKeySecret = document.getElementById("AccessKeySecret")
//         let exampleSelect = document.getElementById("exampleSelect")
//         setInputs({
//             streamName,
//             accessKey,
//             accessKeySecret,
//             exampleSelect
//         })
//     }, [])

//     const [state, setState] = useState("custom-color ml-3 ")

//     const handleSubmit = (e) => {
//         setState("btn btn-loading btn-xl custom-color disabled ml-3")
//         e.preventDefault()
//         if (
//             azure.AzureStreamName === "" ||
//             azure.AccessKey === "" ||
//             azure.SecretAccessKey === "" ||
//             azure.AzureRegion === "" ||
//             azure.AzureRegion === "def"
//         ) {
//             toast.warn("Postunuz Elave olunmadi")
//         } else {
//             data.post(`/azure`, { unique_id: location.state.UniqueId, azure: { ...azure } })
//                 .then(response => {

//                     if (response.data.error === false) {
//                         dispatch(addDataBase(response.data.data))
//                         setState("custom-color ml-3")
//                         toast.success("Postunuz muveqqeyyitle elave edildi")
//                     } 
//                 })
//                 .catch(error => {
//                     if (error) {
//                         toast.error(error.message)
//                         setState("custom-color ml-3")
//                     } 
//                 })


//         }

//         if (azure.AzureStreamName === "") {
//             inputs.streamName.style.border = "1px solid #dc3545"
//         }
//         if (azure.AccessKey === "") {
//             inputs.accessKey.style.border = "1px solid #dc3545"
//         }
//         if (azure.SecretAccessKey === "") {
//             inputs.accessKeySecret.style.border = "1px solid #dc3545"
//         }
//         if (azure.AzureRegion === "") {
//             inputs.exampleSelect.style.border = "1px solid #dc3545"
//         }
//     }

//     const handleChange = (e) => {
//         e.preventDefault()
//         let name = e.target.name
//         let value = e.target.value
//         setAzure({
//             ...azure,
//             [name]: value
//         })
//     }

//     const handleFocus = (e) => {
//         e.target.style.border = "1px solid #ced4da"
//     }



//     return (
//         <div className="pb-5">
//             <Container fluid={true}>
//                 <Col md={12} className="projects-header ">
//                     <div className="shadow_box p-3">
//                         <h3>{t("connect")}</h3>
//                         <div>
//                             <h6>{t("freePlan")}</h6>
//                         </div>
//                     </div>
//                 </Col>
//                 <Col md={12} >
//                     <div style={{ padding: "30px 150px" }} className="shadow_box">
//                         <Form onSubmit={(e) => handleSubmit(e)}>
//                             <FormGroup className="form-style">
//                                 <Label for="StreamName">{t("streamName")}</Label>
//                                 <Input
//                                     onFocus={(e) => handleFocus(e)}
//                                     onChange={(e) => handleChange(e)}
//                                     style={{ width: "66%" }}
//                                     name="AzureStreamName"
//                                     value={!location.state.AzureStreamName ? azure.AzureStreamName : location.state.AzureStreamName}
//                                     type="text"
//                                     id="StreamName" />
//                             </FormGroup>
//                             <FormGroup className="form-style">
//                                 <Label for="AccessKey">{t("azureKey")}</Label>
//                                 <Input
//                                     onFocus={(e) => handleFocus(e)}
//                                     onChange={(e) => handleChange(e)}
//                                     style={{ resize: "none", width: "66%" }}
//                                     type="textarea"
//                                     name="AccessKey"
//                                     value={azure.AccessKey}
//                                     id="AccessKey" />
//                             </FormGroup>
//                             <FormGroup className="form-style">
//                                 <Label for="AccessKeySecret">{t("azureSecretKey")}</Label>
//                                 <Input
//                                     onFocus={(e) => handleFocus(e)}
//                                     onChange={(e) => handleChange(e)}
//                                     style={{ resize: "none", width: "66%" }}
//                                     type="textarea"
//                                     name="SecretAccessKey"
//                                     value={azure.SecretAccessKey}
//                                     id="AccessKeySecret" />
//                             </FormGroup>
//                             <FormGroup className="form-style">
//                                 <Label for="Selectcart1">{t("azureRegion")}</Label>
//                                 <Input
//                                     onFocus={(e) => handleFocus(e)}
//                                     onChange={(e) => handleChange(e)}
//                                     style={{ width: "66%" }}
//                                     type="select"
//                                     name="AzureRegion"
//                                     id="exampleSelect"
//                                     value={!azure.AzureRegion ? "def" : azure.AzureRegion}
//                                 >
//                                     <option value="def">Select Region</option>
//                                     <option value="usa">Usa</option>
//                                     <option value="eu">Europa</option>
//                                     <option value="asia">Asia</option>
//                                 </Input>
//                             </FormGroup>
//                             <Col md={12} style={{ textAlign: "right", padding: "0px" }}>
//                                 <Button style={{ position: "relative" }} className={state}>
//                                     {
//                                         x[0].AzureStreamName === "" ? t("saveStream") : t("azureEdit")
//                                     }
//                                 </Button>
//                                 <br />
//                                 <span>{t("azureMessageCount")}<span>0</span></span>
//                             </Col>
//                         </Form>
//                         <ToastContainer position="bottom-right" autoClose={3000} />
//                     </div>
//                 </Col>
//             </Container>
//         </div>
//     )
// }

// export default Azure