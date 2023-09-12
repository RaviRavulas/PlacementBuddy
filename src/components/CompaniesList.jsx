import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../services/helper";


const CompaniesList = () => {
    const [companyList, setCompanyList] = React.useState([])
    const [ongoingCompanies, setOngoingCompanies] = React.useState(companyList.filter((company) => company.year === 2024 && company.status === "ongoing"));
    const [completedCompanies,setcompletedCompanies]= React.useState(companyList.filter((company)=> company.year===2024 && company.status==="completed"));
    const [loading, setLoading] = useState(true);
    const filterCompanies = (searchString) => {
        const filteredCompanies = companyList.filter((company) => {
            return company.title.toLowerCase().includes(searchString.toLowerCase());
        });
        setOngoingCompanies(filteredCompanies.filter((company) => company.year === 2024 && company.status==="ongoing"));
        setcompletedCompanies(filteredCompanies.filter((company) => company.year === 2024 && company.status==="completed"));
    };
    useEffect(() => {
        axios.get(`${BASE_URL}/api/companies/`)
        .then((res) => {
            setLoading(false);
            setCompanyList(res.data);
            setOngoingCompanies(res.data.filter((company) => company.year === 2024 && company.status==="ongoing"));
            setcompletedCompanies(res.data.filter((company) => company.year === 2024 && company.status==="completed"));
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

  return(
    <>
    {loading? <div className="d-flex align-items-center justify-content-center text-center py-5" style={{minHeight:"100vh"}}>
        <FontAwesomeIcon className="fa-spin" style={{fontSize:"3rem"}} icon={faSpinner}></FontAwesomeIcon>
    </div> : 
    <div>
      <Container className="d-flex justify-content-center">
        <InputGroup className="my-4 w-50">
            <FormControl placeholder="Search..." onChange={(e) => filterCompanies(e.target.value)}/>
            <Button variant="outline-secondary" id="search-button">
            <FontAwesomeIcon icon={faSearch} />
            </Button>
        </InputGroup>
      </Container>
      <Container style={{minHeight:"100vh"}}>
      <Container>
        <h1 style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}} className="text-center">OnGoing...</h1>
      </Container>
      <Container className="px-4">
            <Row className="gy-3 gx-5">
                {
                    ongoingCompanies.length === 0 ? <p className="text-center">No companies found</p> :
                    ongoingCompanies.map((company,index) => {
                        return(
                            <Col xs="12" sm="6" md="4" lg="3" key={index}>
                                <Card style={{ width: '100%',textAlign:"center"}} className="my-2">
                                    <Card.Body>
                                        <Card.Title style={{color:"Red"}}><b>{company.title}</b></Card.Title>
                                        <Card.Text>
                                        <b>CGPA:</b> {company.cgpa}
                                        <br/>
                                        <b>Package:</b> {company.package}LPA
                                        <br/>
                                        <b>EligibleBranches:</b> {company.EligibleBranches}
                                        <br/>
                                        <b>Offered Students:</b> {company.OfferedStudents}
                                        </Card.Text>
                                        <Link to={"/details/"+company._id} className="btn btn-primary">More Details</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
      </Container>
      <hr />
      <Container>
            <h1 style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}} className="text-center">Completed</h1>
        </Container>
        <Container className="px-4">
        <Row className="gy-3 gx-5">
            {
                completedCompanies.length === 0 ? <p className="text-center">No companies found</p> :
                completedCompanies.map((company,index) => {
                    return(
                        <Col xs="12" sm="6" md="4" lg="3" key={index}>
                            <Card style={{ width: '100%',textAlign:"center"}} className="my-2">
                                <Card.Body>
                                    <Card.Title style={{color:"Red"}}><b>{company.title}</b></Card.Title>
                                    <Card.Text>
                                    <b>CGPA:</b> {company.cgpa}
                                    <br/>
                                    <b>Package:</b> {company.package}LPA
                                    <br/>
                                    <b>EligibleBranches:</b> {company.EligibleBranches}
                                    <br/>
                                    <b>Offered Students:</b> {company.OfferedStudents}
                                    </Card.Text>
                                    <Link to={"/details/"+company._id} className="btn btn-primary">More Details</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
      </Container>
      </Container>
      </div>}
    </>
  );
};
export default CompaniesList;