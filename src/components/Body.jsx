import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./Body.css";
const Body=()=>{
    return(
        <>
            <Container fluid="md">
                <Row className="shadow mt-2 bg-white">
                    <Col>
                        <img className="py-2" src="https://kahedu.edu.in/n/wp-content/uploads/2021/11/7-suggestions-for-getting-a-good-job-during-campus-placements-990x500-1-990x500.jpg" alt="flag" />
                    </Col>
                </Row>
                <Row className="shadow mt-2 border border-white">
                    <Col>
                    
                            <p className="matter"><b>Welcome to Placement Buddy – Your Ultimate Placement Information Hub!</b><br/><br/>


                            Are you curious about the placement details of top companies? Look no further! Placement Buddy is here to assist you in exploring the latest and previous year's placement data of various renowned companies. Whether you're a student preparing for placements or simply interested in tracking the career journeys of your favorite companies, our user-friendly platform provides a seamless experience.<br/>

                            <br/>🎓 <b>Explore Previous Year's Success:</b> Dive into the placement histories of leading companies. Discover how many students were placed, the recruitment process, and more!

                            <br/>🔍 <b>Search with Ease:</b> Our intuitive search bar lets you quickly find detailed information about specific companies. Just type the company name, and we'll fetch the relevant details for you.

                            <br/>🌟 <b>Stay Up-to-Date:</b> Check out ongoing placements and stay informed about the companies where opportunities are still open.


                            <br/><br/>Experience the power of knowledge at your fingertips with Placement Buddy. Start your journey towards informed decisions today!"

                            </p>
                    </Col>
                </Row>
            </Container> 
      </>
    );
}
export default Body;