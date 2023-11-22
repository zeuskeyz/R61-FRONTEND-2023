import {Button, Container, Navbar } from 'react-bootstrap'
import Axios from "axios"
import { useEffect, useState } from 'react'

export const HeaderSection = () => {
  let [data, setData] = useState({});

  useEffect(() => {
    Axios.get('https://rate-me-zpzf.onrender.com').then(res=>setData(res.data)).catch()
  }, [data])

  return (
    <>
        <Navbar className="bg-body-dark" bg="dark" data-bs-theme="dark">
            <Container className='d-flex'>
                <Navbar.Brand className='text-light'>Retail Center Migori</Navbar.Brand>
                <Button variant="warning">{isNaN(data.nps) ?`No Data`: `NPS : ${data.nps}%`}</Button>
            </Container>
        </Navbar>
    </>
  )
}
