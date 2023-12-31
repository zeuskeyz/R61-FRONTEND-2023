import React, { useState } from "react";
import { Col, Row, Container, ToastContainer, Button, Toast } from "react-bootstrap";
import Axios from "axios"
import { toast } from 'sonner'

export const Results = () => {
  const [show, setShow] = useState(false);
  const [stats, setStats] = useState({})

  const toggleShow = () => {
    Axios.get('https://rate-me-zpzf.onrender.com').then(res=>setStats(res.data)).catch(err=>{toast.error(`${err.code} : ${err.message}`, {toastId:'error3'});})
      setShow(!show);
  }

  return (
    <Container className='d-md-none'>
      <Row>
        <Col className="mb-2 text-center">
        <ToastContainer className="p-3" position='bottom-center' style={{ zIndex: 1 }}>
            <Toast onClose={toggleShow} show={show} animation={false} bg="warning">
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt=""/>
                    <strong className="me-auto">R61</strong>
                    <small>{new Date().toLocaleString()}</small>
                </Toast.Header>
                <Toast.Body>
                    <h5>Safaricom, Retail Center Migori</h5>
                    <br/>
                    <p className="fs-5 fw-bold">DETRACTORS: {stats.detractors}</p>
                    <p className="fs-5 fw-bold">PROMOTERS: {stats.promoters}</p>
                    <p className="fs-5 fw-bold">PASSIVES: {stats.passives}</p>
                    <p className="fs-5 fw-bold">RESPONSES: {stats.responses}</p>
                    <br/>
                    <h5>CURRENT NPS SCORE : {isNaN(stats.nps) ? `No Data`: stats.nps}%</h5>
                </Toast.Body>
            </Toast>
          </ToastContainer>

          <div className="container d-grid col-12 px-0 ">
            <Button variant={"warning"} onClick={toggleShow} className="mt-3 mx-0 col-12">RESULTS</Button>
          </div>

        </Col>
      </Row>
    </Container>
  );
};
