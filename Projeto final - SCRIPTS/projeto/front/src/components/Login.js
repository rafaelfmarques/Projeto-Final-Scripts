import React, { useState, useContext } from 'react';
import Logado from './Contexto';
import api from './api';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Row,
    Col,
    Alert
} from 'reactstrap';
import { Redirect } from 'react-router-dom';

export default function Login() {
    const [mail, setMail] = useState('a@teste.com')
    const [senha, setSenha] = useState('123456')
    const [message, setMessage] = useState('')
    const [result, setResult] = useState('')
    const [logado, setLogado] = useState(false)
    const [cadastro, setCadastro] = useState(false)
    const {sessao,setSessao} = useContext(Logado)

    const enviar = (e) => {
        e.preventDefault();
        setMessage('')
        if (mail === '')
            setMessage('Forneça o e-mail')
        else if (senha === '')
            setMessage('Forneça a senha')
        else {
            api.post('/login', { mail, senha })
                .then(res => {
                    if (res.data.result) {
                        setResult(res.data.result)
                        setMail('')
                        setSenha('')
                        setSessao(true)
                        setLogado(true)
                    }
                    else
                        setMessage(res.data.message)
                })
                .catch(e => setMessage(e.message))
        }
    }

    return (
        <Row className="justify-content-center mt-5">
            <Col xs='11' sm='9' md='6' lg='5' xl='3'>
                <Form onSubmit={enviar}>
                    <FormGroup>
                        <Label for="mail">Email</Label>
                        <Input
                            type="email"
                            placeholder="e-mail de login"
                            value={mail}
                            onChange={e => setMail(e.target.value.trim())}
                            required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="senha">Senha</Label>
                        <Input
                            type="password"
                            placeholder="senha de login"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value.trim())}
                            minLength="6" maxLength="10"
                            required />
                    </FormGroup>
                    <Button className="mr-2">Entrar</Button>

                    {
                        message !== '' &&
                        <Alert color="danger" className="mt-3">{message}</Alert>
                    }
                    {
                        result !== '' &&
                        <Alert color="success" className="mt-3">{result}</Alert>
                    }
                    {
                        logado && <Redirect to="/dados" />
                    }
                    
                    <Button color="primary" onClick={()=> setCadastro(true)} className="mr-2">Cadastrar-se</Button>
                    {
                        cadastro && <Redirect to="/cadastro" />
                    }

                    
                </Form>
            </Col>
        </Row>
    )
}