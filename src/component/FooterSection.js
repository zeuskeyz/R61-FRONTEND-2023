import { useEffect, useState } from "react";
import Axios from 'axios'
import { Navbar, Container, Nav} from "react-bootstrap";
import { toast } from 'sonner'

export const FooterSection = () => {
  let [data, setData] = useState({});

  useEffect(() => {
    Axios.get('https://rate-me-zpzf.onrender.com').then(res=>setData(res.data)).catch(err=>toast.error(`${err.code} : ${err.message}`, {toastId:'error2'}))
  }, [data])
  
  return (
    <>
      <Navbar className='d-none d-md-block' fixed = 'bottom' bg="dark" data-bs-theme="dark">
        <Container>
          <Nav>
            <Nav.Link href="#" className="text-warning"><small>RESPONSES :</small></Nav.Link>
            <Nav.Link href="#home" className="text-warning"><small>{data.responses}</small></Nav.Link>
          </Nav>
          <Nav className="mx-auto">
            <Nav.Link href="#" className="text-warning"><small>PROMOTERS :</small></Nav.Link>
            <Nav.Link href="#home" className="text-warning"><small>{data.promoters}</small></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className="text-warning"><small>DETRACTORS :</small></Nav.Link>
            <Nav.Link href="#home" className="text-warning"><small>{data.detractors}</small></Nav.Link>
          </Nav>
          <Nav className="mx-auto">
            <Nav.Link href="#" className="text-warning"><small>PASSIVES :</small></Nav.Link>
            <Nav.Link href="#home" className="text-warning"><small>{data.passives}</small></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className="text-warning"><small>NPS :</small></Nav.Link>
            <Nav.Link href="#home" className="text-warning"><small>{`${data.nps}%`}</small></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
};
