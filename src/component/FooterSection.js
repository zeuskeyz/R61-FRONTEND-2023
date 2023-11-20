import { Navbar, Container, Nav} from "react-bootstrap";
import { BsEnvelopeAtFill, BsWhatsapp, BsTelephoneOutbound } from "react-icons/bs";

export const FooterSection = () => {
  return (
    <>
      <Navbar className='d-none d-md-block' fixed = 'bottom' bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="">
            <Nav.Link href="#" className="text-secondary"> Media  </Nav.Link>
            <Nav.Link href="#home"><BsWhatsapp  className="text-warning"/> </Nav.Link>
            <Nav.Link href="#features"><BsEnvelopeAtFill className="text-warning"/> </Nav.Link>
            <Nav.Link href="#pricing"><BsTelephoneOutbound className="text-warning"/></Nav.Link>
          </Nav>
          <Nav className="mx-auto">
            <Nav.Link href="#" className="text-secondary"> Contacts  </Nav.Link>
            <Nav.Link href="#home"><BsWhatsapp  className="text-warning"/> </Nav.Link>
            <Nav.Link href="#features"><BsEnvelopeAtFill className="text-warning"/> </Nav.Link>
            <Nav.Link href="#pricing"><BsTelephoneOutbound className="text-warning"/></Nav.Link>
          </Nav>
          <Nav className="">

            <Nav.Link href="#" className="text-secondary"> Socials  </Nav.Link>
            <Nav.Link href="#home"><BsWhatsapp  className="text-warning"/> </Nav.Link>
            <Nav.Link href="#features"><BsEnvelopeAtFill className="text-warning"/> </Nav.Link>
            <Nav.Link href="#pricing"><BsTelephoneOutbound className="text-warning"/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
};
