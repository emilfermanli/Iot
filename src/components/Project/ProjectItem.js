import React, { useState } from 'react'
import { Button, Modal, ModalBody, Form, FormGroup, ModalHeader, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import data from "../api/apidata"
import { useDispatch } from "react-redux"
import { addDataBase } from "../../redux/actions/userAction"
import { ToastContainer, toast } from 'react-toastify';

function ProjectItem({ projectDetail, className }) {

    const [modal, setModal] = useState(false);

    const dispatch = useDispatch()

    const [pass, setPass] = useState("")

    const [state, setState] = useState("custom-color")

    const toggle = () => {  
        setModal(!modal)
    }

   

    const handleFocus = (e) => {
        e.target.style.border = "1px solid #ced4da"
    }

    const handleDelete = (e, id) => {
        e.preventDefault()

        setState("btn btn-loading btn-xl custom-color disabled ")

        if (pass === "") {
             toast.error("Şifrənizi Daxil edin")
             setState("custom-color")
        } else {
            data.post(`/delete`, {
                password: pass,
                unique_id: id
            })
                .then(response => {
                    if (response.data.error === false) {
                        
                        toast.success("Proyekt müvəffəqiyyətlə silindi")
                        setTimeout(function(){ dispatch(addDataBase(response.data.data)) }, 3000);
                        console.log(response)
                    } 
                })
                .catch(error => {
                    if (error) {
                        setState("custom-color")
                        toast.error("Şifrə Yalnışdır")
                    } 
                });

        }
    };

    const { t } = useTranslation();
    return (
        <div style={{ width: "100%" }} className="d-flex justify-content-between">
            <div className="d-flex align-items-center" style={{ width: "70%" }}>
                <Link
                    style={{ width: "100%" }}
                    className="d-flex justify-content-start"
                    to={{
                        pathname: `/project`,
                        state: projectDetail
                    }}>
                    <div style={{ width: "50%" }}>
                        <span>
                            {projectDetail.ProjectName}
                        </span>
                    </div>
                    <div >
                        <span>
                            {projectDetail.Plan}
                        </span>
                    </div>
                </Link>
            </div>
            <div style={{ width: "30%" }} className="text-right">
                <Link
                    to={{
                        pathname: "/newproject",
                        state: projectDetail
                    }} className="btn ml-1 mr-1 btn-primary">
                    {t("edit")}
                </Link>

                <Button onClick={toggle} className="btn ml-1 mr-1 btn-danger">
                    X
                </Button>
            </div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Əminsinizmi?</ModalHeader>
                <ModalBody className="p-3">
                    <Form onSubmit={(e) => handleDelete(e, projectDetail.UniqueId)}>
                        <FormGroup>
                            <Label className="mb-2" for="examplePassword">Password</Label>
                            <Input
                                id="unipassword"
                                onClick={(e) => handleFocus(e)}
                                className="mb-2"
                                type="password"
                                autocomplete="on"
                                name="password"
                                onChange={(e) => { setPass(e.target.value) }}
                                placeholder="password"
                            />
                        </FormGroup>
                        <div className="text-right">
                            <Button className="mr-2" color="secondary" onClick={toggle}>Xeyr</Button>
                            <Button type="submit" className={state} color="success" >Bəli</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    )
}



export default ProjectItem
