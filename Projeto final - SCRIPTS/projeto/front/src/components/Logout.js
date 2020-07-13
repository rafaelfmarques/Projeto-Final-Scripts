import React, { useState, useEffect, useContext } from 'react';
import Logado from './Contexto';
import api from './api';
import {
    Row,
    Col
} from 'reactstrap';
import { Redirect } from 'react-router-dom';


export default function Logout() {
    const [result, setResult] = useState('Efetuando o logout')
    const [message, setMessage] = useState('')
    const {sessao,setSessao} = useContext(Logado)

    useEffect( () => {
        api.post('/logout')
            .then(res => {
                if (res.data.result){
                    setResult(res.data.result)
                    setMessage('')
                    setSessao(false)
                }
                else{
                    setResult('')
                    setMessage(res.data.message)
                }
            })
            .catch(e => {
                setResult('')
                setMessage(e.message)
            })
    }, [])  // componentDidMount componentDidUpdate

    return (
        <Row className="justify-content-center mt-5">
            <Col xs='11' sm='9' md='6' lg='5' xl='3'>
                { 
                    result !== '' && <p style={{textAlign:'center'}}>{result}</p>
                }
                { 
                    result !== '' && <p style={{textAlign:'center', color:'red'}}>{message}</p>
                }
            </Col>
            <Redirect to="/login" />
        </Row>
    )
}