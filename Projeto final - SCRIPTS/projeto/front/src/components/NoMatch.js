import React from 'react';
import { Row, Col } from 'reactstrap';

export default function NoMatch () {
        return (
            <Row className="justify-content-center mt-5">
                <Col md='8' lg='6'>
                    <h4 className='text-center'>Recurso não identificado</h4>
                </Col>
            </Row>
        )
    }
