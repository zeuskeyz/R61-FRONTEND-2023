import { Alert, Card } from "react-bootstrap";
import { useState } from "react";
import Axios from "axios"

export const EmojiCard = ({verdict, emoji, expression, id}) => {

  let [type, setType] = useState(id)
  let [styles, setStyles] = useState({backgroundColor: 'black', color: 'white', border: '2px solid yellow'})
   
  const handleClick = (event)=>{
    setType(event.target.id)
    Axios.post('https://rate-me-zpzf.onrender.com', {type}).then().catch(err=> {return <Alert variant="success">{err.message}</Alert>}) 
  }

  const handleMouseIn = () => setStyles({backgroundColor: 'transparent', color: 'black', border: '2px solid black'})

  const handleMouseOut = () => setStyles({backgroundColor: 'black', color: 'white', border: '2px solid yellow'})

  return (
    <>
      <Card className="text-center" style={styles}>
        <Card.Header className='fs-3' > {verdict} </Card.Header>
        <Card.Body className='heading display-1'  > 
          <Card.Link className="stretched-link linkers" id = {id} onClick={handleClick} onTouchStart={(handleMouseIn)} onTouchEnd={(event)=>handleMouseOut(event)}>{emoji}</Card.Link>
        </Card.Body>
        <Card.Footer className="fs-6"> {expression} </Card.Footer>
      </Card>
    </>
  );
};
