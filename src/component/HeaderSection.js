import {Button, Container, Navbar } from 'react-bootstrap'
import Axios from "axios"

export const HeaderSection = () => {

  let handleClick = (event)=>{
    Axios.get('https://rate-me-zpzf.onrender.com').then(res=>{
      isNaN(res.data.NPS) ? event.target.innerText = `No Data`: event.target.innerText = `NPS : ${res.data.NPS}%`
    }).catch(err=>alert(err.message))
  }

  return (
    <>
        <Navbar className="bg-body-dark" bg="dark" data-bs-theme="dark">
            <Container className='d-flex'>
                <Navbar.Brand className='text-light'>Retail Center Migori</Navbar.Brand>
                <Button variant="warning" onClick={handleClick}>Daily Score</Button>
            </Container>
        </Navbar>
    </>
  )
}
