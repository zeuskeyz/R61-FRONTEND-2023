import { Alert, Card } from "react-bootstrap";
import { useState } from "react";
import Axios from "axios"

export const EmojiCard = ({verdict, emoji, expression, id}) => {
  let [type, setType] = useState(id)
   
  const handleClick = (event)=>{
    setType(event.target.id)
    Axios.post('https://rate-me-zpzf.onrender.com/', {type}).then().catch(err=> {return <Alert variant="success">{err.message}</Alert>})    
  }

  return (
    <>
      <Card className="bg-dark text-center">
        <Card.Header className='text-light fs-3' > {verdict} </Card.Header>
        <Card.Body className='heading display-1' > 
          <Card.Link className="stretched-link" id = {id} onClick={(event)=>handleClick(event)}>{emoji}</Card.Link>
        </Card.Body>
        <Card.Footer className="text-light fs-6"> {expression} </Card.Footer>
      </Card>
    </>
  );
};
