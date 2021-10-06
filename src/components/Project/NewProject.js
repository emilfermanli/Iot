import React, { useState, useEffect } from 'react'
import { Container, Col, FormGroup, Input, Label, Form, Button } from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import data from "../api/apidata"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { addDataBase } from "../../redux/actions/userAction"


function NewProject() {
    const location = useLocation()
    const history = useHistory()
    const allData = useSelector(state => state.projectReducer)
    
    console.log(allData.project.length)
    

    const [project, setProject] = useState({
        ProjectName: location.state ? location.state.ProjectName : "",
        ProjectRegion: location.state ? location.state.ProjectRegion : "",
        Plan: Number(location.state) ? Number(location.state.Plan) : ""
    })

    const dispatch = useDispatch()

    const [err, setErr] = useState()
    const [regerr, setRegerr] = useState()
    const [planerr, setPlanerr] = useState()
    const [subbtn, setSubbtn] = useState()

    useEffect(() => {
        let emailInput = document.getElementById("exampleEmail")
        let region = document.getElementById("exampleSelect")
        let plan = document.getElementById("plan")
        let sub = document.getElementById("subbtn")
        setErr(emailInput)
        setRegerr(region)
        setPlanerr(plan)
        setSubbtn(sub)
    }, [err, regerr, planerr, subbtn])


    const [state, setState] = useState("custom-color ml-3 ")

    const handleSubmit = (e) => {
        e.preventDefault()
        setState("btn btn-loading btn-xl custom-color disabled ml-3")

        var lastDetails = {
            ProjectName: project.ProjectName,
            ProjectRegion: project.ProjectRegion,
            Plan: Number(project.Plan)
        }

        console.log(lastDetails)
        if (err.value === "") {
            err.style.border = "1px solid #dc3545"
        }
        if (regerr.value === "default") {
            regerr.style.border = "1px solid #dc3545"
        }
        if (planerr.value === "") {
            planerr.style.border = "1px solid #dc3545"
        }
        if (
            project.ProjectName === "" ||
            project.ProjectRegion === "" ||
            project.Plan === "" ||
            regerr.value === "default" ||
            planerr.value === "default"
        ) {
            setState("custom-color ml-3")
        } else {
            if (location.state) {
                data.post(`/update`, {
                    unique_id: location.state.UniqueId,
                    info: {
                        ...lastDetails
                    }
                })
                    .then(response => {
                        console.log(response)
                        if (response.data.error === false) {
                            dispatch(addDataBase(response.data.data))
                            setTimeout(function () { history.push("/") }, 500);
                            console.log(response.data.data)
                            toast.success("Postunuz deyisildi")
                        }else if (response.data.error === true) {
                            toast.warning("Proyekt əlavə olunmadı!")
                            setState("custom-color ml-3")
                        }
                    })
                    .catch(error => {
                        if (error) {
                            toast.warning("Proyekt əlavə olunmadı!")
                            setState("custom-color ml-3")
                            console.log(error)
                        }
                    })

                    console.log({
                        unique_id: location.state.UniqueId,
                        info: {
                            ...lastDetails
                        },
                    });

            } else {
                if (allData.project.length < 5) {
                    data.post(`/new`, {
                        info: {
                            ...lastDetails
                        }
                    })
                        .then(response => {
                            console.log(response)
                            if (response.error === true) {
                                setState("custom-color ml-3")
                                toast.success(JSON.parse(response.message))
                                console.log(response.message)
                            } else {
                                dispatch(addDataBase(response.data.data))
                                setTimeout(function () { history.push("/") }, 500);
                                toast.success("Postunuz elave edildi")
                            }
    
                        }).catch(error => {
                            if (error) {
                                toast.warning("Postunuz elave edilmədi")
                                console.log(error)
                            }
                        })
                } else {
                    setState("custom-color ml-3")
                    toast.warning("free user litim 3 project")
                    console.log("free user")
                }
            }
        }
    }


    const handleFocus = (e) => {
        e.target.style.border = "1px solid #ced4da"
    }

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        if (e.target.value.length >= 24) {
            return null
        }
        setProject({
            ...project,
            [name]: value
        })
    }




    const { t } = useTranslation()






    return (
        <div className="pb-5 pt-5">
            <Container >
                <Col md={{ size: 10, offset: 1 }} className="shadow_box p-3">
                    <h3 className="m-2">{location.state ? t("projectEdit") : t("projectAction")}</h3>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <FormGroup style={{ display: "flex", justifyContent: "center" }}>
                            <Label style={{ margin: "0px 40px" }} for="exampleEmail">{t("projectName")}</Label>
                            <Input
                                onFocus={(e) => handleFocus(e)}
                                onChange={(e) => handleChange(e)}
                                style={{ width: "51%" }}
                                type="text"
                                name="ProjectName"
                                id="exampleEmail"
                                placeholder="with a placeholder"
                                value={project.ProjectName} />
                        </FormGroup>
                        <FormGroup style={{ display: "flex", justifyContent: "center" }}>
                            <Label style={{ margin: "0px 40px" }} for="exampleSelect">{t("projectRegion")}</Label>
                            <Input
                                onFocus={(e) => handleFocus(e)}
                                onChange={(e) => handleChange(e)}
                                style={{ width: "51%" }}
                                type="select"
                                name="ProjectRegion"
                                value={
                                    !project.ProjectRegion ? "default" : project.ProjectRegion
                                }
                                id="exampleSelect">
                                <option value="default">Select Region</option>
                                <option value="USA">Usa</option>
                                <option value="ASIA">Asia</option>
                                <option value="EU">Europa</option>

                            </Input>
                        </FormGroup>
                        <FormGroup style={{ display: "flex", justifyContent: "center" }}>
                            <Label onChange={(e) => handleChange(e)} style={{ margin: "0px 40px", display: "flex", flexDirection: "column" }} for="plan">{t("projectPlan")}
                                <span className="mt-5">{t("projectKey")}</span>
                            </Label>
                            <Input
                                onChange={(e) => handleChange(e)}
                                style={{ width: "24%", marginLeft: "20px" }}
                                type="select"
                                name="Plan"
                                id="plan"
                                onFocus={(e) => handleFocus(e)}
                                value={
                                    !project.Plan ? "" : project.Plan
                                }
                            >
                                <option value="">Select Plan</option>
                                <option value="0">Free</option>
                                <option value="1">Pay for device</option>
                                <option value="2">Pay for traffic</option>
                            </Input>
                            <div style={{ width: "24%", marginLeft: "30px", resize: "none" }}>
                                {
                                    project.Plan === "" ? <p></p> : project.Plan === "Free" ?
                                        <div>
                                            <p>25 device max connection</p>
                                            <p>only QOS 0 allowed</p>
                                            <p>Max storage 50mb</p>
                                        </div> :
                                        <div>
                                            <p>unlimited connection </p>
                                            <p>no physical restrictions QOS 0-2</p>
                                        </div>
                                }
                            </div>
                        </FormGroup>
                        <FormGroup style={{ display: "flex", justifyContent: "flex-end" }}>
                            <Link className="btn btn-outline-secondary custom-color text-white"
                                to="/">{t("projectCancel")}</Link>
                            <Button id="subbtn" type="submit" className={state}>
                                {
                                    location.state ? t("projectEditButton") : t("projectStart")
                                }
                            </Button>
                        </FormGroup>
                    </Form>
                    <ToastContainer position="bottom-right" autoClose={3000} />
                </Col>
            </Container>
        </div >
    )
}


export default NewProject
