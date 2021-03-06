import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import {Form, Col, Button, Row} from "react-bootstrap"
import { useHistory } from 'react-router-dom'

const RegisterAdmin = () => {
    const [brand, setBrand] =  useState("");
    const [email, setEmail] =  useState("");
    const [phone, setPhone] =  useState("");
    const [fax, setFax] =  useState("");
    const [edra, setEdra] =  useState("");
    const [afm, setAfm] =  useState("");
    const [doy, setDoy] =  useState("");
    const [gemh, setGemh] =  useState("");
    const [password, setPassword] =  useState("");
    const [confirmPassword, setConfirmPassword] =  useState("");

    const history = useHistory();
    const handleSubmit = e=>{
        e.preventDefault();

        if(password !== confirmPassword){
            toast.error("Password and confirm password doesn't match!");
            return;
        }
        const body = JSON.stringify({brand, email, phone, fax, edra, afm, doy, gemh, password});
        
        axios.post(`/registerAdmin`, body)
            .then(res=> {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('isAdmin', res.data.isAdmin);
                history.push("/homeadmin");
                window.location.reload();
            })
            .catch(err=>{
                toast.error(err.response.data.msg);
            });
    }

    return (
        <div className="d-flex justify-content-center vh-100 py-5" style={{
            textAlign :"center",
            backgroundImage: "url('/img/bgLayout.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}>
            <Col md={10}>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>
                        <h1>
                            <b>Register as Partner</b>&nbsp;
                            <i className="fas fa-store-alt" style={{fontSize: "35px"}}></i>
                            <i className="fas fa-plus" style={{fontSize: "20px"}}></i>
                        </h1>
                    </Form.Label>
                    <Row>
                         <Col md={6}>
                            <Form.Group>
                                <Form.Label>????????????????</Form.Label>
                                <Form.Control type="text" placeholder="????????????????" onChange={e=>setBrand(e.target.value)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>????????????????</Form.Label>
                                <Form.Control type="tel" placeholder="????????????????" onChange={e=>setPhone(e.target.value)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Fax</Form.Label>
                                <Form.Control type="tel" placeholder="Fax" onChange={e=>setFax(e.target.value)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>????????</Form.Label>
                                <Form.Control type="text" placeholder="????????" onChange={e=>setEdra(e.target.value)}/>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>??.??.??.</Form.Label>
                                <Form.Control type="Number" maxLength="10" placeholder="??.??.??." onChange={e=>setAfm(e.target.value)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>??.??.??.</Form.Label>
                                <Form.Control type="text" placeholder="??.??.??." onChange={e=>setDoy(e.target.value)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>?????????????? ??.??.????.</Form.Label>
                                <Form.Control type="Number"  placeholder="?????????????? ??.??.????." onChange={e=>setGemh(e.target.value)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>??????????????</Form.Label>
                                <Form.Control type="password" autoComplete="on" placeholder="??????????????" onChange={e=>setPassword(e.target.value)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>?????????????????????? ??????????????</Form.Label>
                                <Form.Control type="password" autoComplete="on" placeholder="?????????????????????? ??????????????" onChange={e=>setConfirmPassword(e.target.value)}/>
                            </Form.Group>
                        </Col>
                    </Row >

                    {/*<Form.Label className="py-4">
                        <h2>???????????? ????????????????</h2>
                    </Form.Label>
                    <Form.Group>
                        <Form.Label></Form.Label>
                        <Form.Control />
                    </Form.Group>*/}
                    <div className="py-5">
                        <Button style={{textAlign: 'center', margin: 'auto' , display: 'flex'}} variant="primary" type="submit"> Submit</Button>
                    </div>
                    
                </Form>
            </Col>
        </div>
    );
}

export default RegisterAdmin;