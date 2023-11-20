import { Col, Container, Row } from "react-bootstrap";
import { BsEmojiSmileFill, BsEmojiExpressionlessFill, BsEmojiFrownFill } from "react-icons/bs";
import { EmojiCard } from "./EmojiCard";

export const MainSection = () => {

    let feedbacks = [
        {id:'promoter', verdict:'EXCELLENT SERVICE!', emoji: <BsEmojiSmileFill className='text-warning' style={{fontSize:'200%'}} id='promoter' />, expression:'I am very happy with the customer service I was given!'},
        {id:'passive', verdict:'AVERAGE SERVICE!', emoji: <BsEmojiExpressionlessFill className='text-warning' style={{fontSize:'200%'}} id='passive'/>, expression:'The customer service I got is ok but it can get better'},
        {id:'detractor', verdict:'POOR SERVICE!', emoji: <BsEmojiFrownFill className='text-warning' style={{fontSize:'200%'}} id='detractor'/>, expression:'I am not happy with the customer service I got.'}
    ]
  
    return (
        <Container >
        <Row className="gy-1">
            {feedbacks.map((feedback,index) => (
                <Col className="col-12 col-md-4" key={index} >
                    <EmojiCard verdict={feedback.verdict} emoji={feedback.emoji} expression={feedback.expression} id={feedback.id}/>
                </Col>
            ))}
            
        </Row>
        </Container>
    );
};
