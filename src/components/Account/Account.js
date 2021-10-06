import React, { useState } from 'react'
import { Container, Col, Row, Form, Modal, ModalBody, ModalHeader, FormGroup, Label, Input, Button } from "reactstrap"
import data from "../api/apidata"
import i18next from 'i18next';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from "react-i18next"

function Account({ className }) {
    

    const [newMail, setnewMail] = useState({
        new_mail: "",
        repeat_mail: ""
    })

    const [lang, setLang] = useState("")

    const handleMail = (e) => {
        let name = e.target.name.trim()
        let value = e.target.value.trim()

        setnewMail({
            ...newMail,
            [name]: value
        })
    }

    const handleChange = (e) => {
        let name = e.target.name.trim()
        let value = e.target.value.trim()

        setnewPassword({
            ...newPassword,
            [name]: value
        })
    }

    const handleSubmitMail = (e) => {
        e.preventDefault()
        if (newMail.new_mail === "" &&
            newMail.repeat_mail === "" &&
            newMail.new_password === newMail.repeat_password
        ) {
            toast.warning("Mail eyni deyil")
        } else {

            data.post("/mail", { ...newMail })
            toast.success("email ugurla dəyişildi")
        }
    }

    

    const handleChangeLanguage = (e) => {
        let val = e.target.value
        setLang(val)
    }

    const handleLanguage = (e) => {
        e.preventDefault()
        i18next.changeLanguage(lang)
        toast.success("Dil ugurla deyisildi")
    }


    
    const [passInput, setPassInput] = useState()

    const { t } = useTranslation()
    

    // const handleDeleteAccount = (e) => {
    //     e.preventDefault()
    //     let date = new Date()
    //     let year = date.getFullYear()
    //     let day = date.getDate()
    //     let mounth = date.getMonth() + 1
    //     let deleteTime = year + "-" + mounth + "-" + day

    //     data.post(`/settings`, { deleteTime })

    //     toast.success("Proyekt ugurla silindi")
    // }


    //---------------------------------- Modal actions
    const [newPassword, setnewPassword] = useState({
        new_password: "",
        repeat_password: ""
    })
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [pass, setPass] = useState("")
    const [pass2, setPass2] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newPassword.new_password === "" &&
            newPassword.repeat_password === "" &&
            newPassword.new_password === newPassword.repeat_password
        ) {
            toast.warning("Şifrələr eyni deyil")
        } else {
            data.post(`/project/delete`, {
                password: pass2,
            })
                .then(response => {
                    if (response.data.error === false) {
                     data.post("/password", { ...newPassword })
                     .then(response => {
                        if (response.data.error === false) {
                            toast.success("Şifrə dəyişildi")
                        }
                     })
                     
                    } 
                }).catch(error => {
                    passInput.style.border = "1px solid #dc3545"
                    toast.error("Şifrə Yalnışdır")
                })
            
        }
        
    }

    const toggle = () => {
        let x = document.getElementById("unipassword")
        setPassInput(x)
        setModal(!modal)
    }
    const toggle2 = () => {
        setModal2(!modal2)
    }

   //---------------------------------- Modal actions

    const handleFocus = (e) => {
        e.target.style.border = "1px solid #ced4da"
    }


    const handleDelete = (e, id) => {
        e.preventDefault()
        if (pass === "") {
             passInput.style.border = "1px solid #dc3545"
             toast.error("Şifrənizi Daxil edin")
        } else {
            data.post(`/delete`, {
                password: pass,
                unique_id: id
            })
                .then(response => {
                    if (response.data.error === false) {
                      
                        toast.success("Proyekt müvəffəqiyyətlə silindi")
                    } 
                }).catch(error => {
                    passInput.style.border = "1px solid #dc3545"
                    toast.error("Şifrə Yalnışdır")
                })

        }
    };

    


    return (
        <Container fluid={true} className="pb-5 pt-5">
            <Col md={12} className="projects-header p-0">
                <div className="shadow_box p-3">
                    <h3>{t("accountSettings")}</h3>
                </div>
            </Col>
            <Row>
                <Col md={6}>
                    <div className="shadow_box p-3">
                            <FormGroup style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Label style={{ margin: "0px 40px" }} for="examplePass">{t("newPassword")}</Label>
                                <Input onChange={(e) => handleChange(e)} style={{ width: "51%" }} type="password" name="new_password" id="examplePass" placeholder="New password" />
                            </FormGroup>
                            <FormGroup style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Label style={{ margin: "0px 40px" }} for="examplePass1">{t("confirmPassword")}</Label>
                                <Input onChange={(e) => handleChange(e)} style={{ width: "51%" }} type="password" name="repeat_password" id="examplePass1" placeholder="Confirm password" />
                            </FormGroup>
                            <div style={{ textAlign: "right" }}>
                            <Button onClick={toggle2} className="custom-color">{t("changePassword")}</Button>
                    </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="shadow_box p-3">
                        <Form onSubmit={(e) => handleSubmitMail(e)}>
                            <FormGroup style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Label style={{ margin: "0px 40px" }} for="exampleEmail1">{t("newEmail")}</Label>
                                <Input onChange={(e) => handleMail(e)} style={{ width: "51%" }} type="email" name="new_email" id="exampleEmail1" placeholder="New email" />
                            </FormGroup>
                            <FormGroup style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Label style={{ margin: "0px 40px" }} for="exampleEmail2">{t("confirmEmail")}</Label>
                                <Input onChange={(e) => handleMail(e)} style={{ width: "51%" }} type="email" name="repeat_mail" id="exampleEmail2" placeholder="Confirm email" />
                            </FormGroup>
                            <div style={{ textAlign: "right" }}>
                                <Button className="custom-color">{t("changeEmail")}</Button>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col md={6} className="mt-4">
                    <div className="shadow_box h-100 p-3">
                        <Form onSubmit={(e) => handleLanguage(e)}>
                            <FormGroup style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Label style={{ margin: "0px 40px" }} for="exampleSelect1">{t("language")}</Label>
                                <Input onChange={(e) => handleChangeLanguage(e)} style={{ width: "35%", marginLeft: "20px" }} type="select" name="select" id="exampleSelect1">
                                    <option>{t("selectLanguage")}</option>
                                    <option>az</option>
                                    <option>en</option>
                                    <option>ru</option>
                                </Input>
                            </FormGroup>
                            <div className="text-right">
                                <Button className="custom-color">{t("language")}</Button>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col md={6} className="mt-4" >
                    <div className="shadow_box p-3">
                        <h4 className="mt-3 mb-3">{t("deleteAccount")}</h4>

                        <div style={{ display: "flex" }}>
                            <div style={{ width: "60%" }}>
                                <p>
                                    {t("deleteInfo")}
                                </p>
                            </div>
                            <div style={{ width: "40%", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                                <Button onClick={toggle} className="custom-color">{t("deleteAccount")}</Button>
                            </div>
                        </div>

                    </div>
                </Col>
                
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Əminsinizmi?</ModalHeader>
                <ModalBody className="p-3">
                    <Form onSubmit={(e) => handleDelete(e)}>
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
                            <Button type="submit" color="success" >Bəli</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>

            <Modal isOpen={modal2} toggle={toggle2} className={className}>
                <ModalHeader toggle={toggle2}>Əminsinizmi?</ModalHeader>
                <ModalBody className="p-3">
                    <div className="modal-info">
                        <p className="text-danger">
                            Siz passwordun deyisdilrilmesine eminsinizmi? bu gune qeder qosulmus cihazlariniz password deyisikliyinden sonra duzgun islemeyecek.
                        </p>
                    </div>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <FormGroup>
                            <Label className="mb-2" for="examplePassword">Password</Label>
                            <Input
                                id="unipassword"
                                onClick={(e) => handleChange(e)}
                                className="mb-2"
                                type="password"
                                autocomplete="on"
                                name="password"
                                onChange={(e) => { setPass2(e.target.value) }}
                                placeholder="password"
                            />
                        </FormGroup>
                        <div className="text-right">
                            <Button className="mr-2" color="secondary" onClick={toggle2}>Xeyr</Button>
                            <Button type="submit" color="success" >Bəli</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
            <ToastContainer position="bottom-right" autoClose={3000} />
            </Row>
        </Container>
    )
}


export default Account