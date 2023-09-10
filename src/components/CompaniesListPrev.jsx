import React from "react";
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CompaniesListPrev = () => {
    const [companyList, setCompanyList] = React.useState([])
    const [companies, setCompanies] = React.useState(companyList.filter((company) => company.year === 2023));
    
    const filterCompanies = (searchString) => {
        const filteredCompanies = companyList.filter((company) => {
            return company.title.toLowerCase().includes(searchString.toLowerCase());
        });
        setCompanies(filteredCompanies.filter((company) => company.year === 2023));
    };

    useEffect(() => {
        axios.get("http://localhost:3001/api/companies/")
        .then((res) => {
            setCompanyList(res.data);
            setCompanies(res.data.filter((company) => company.year === 2023));
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])
  return(
    <>
      <Container className="d-flex justify-content-center">
        <InputGroup className="my-4 w-50">
            <FormControl placeholder="Search..." onChange={(e) => filterCompanies(e.target.value)}/>
            <Button variant="outline-secondary" id="search-button">
            <FontAwesomeIcon icon={faSearch} />
            </Button>
        </InputGroup>
      </Container>
      <Container className="px-4" style={{minHeight:"100vh"}}>
        <Row className="gy-5 gx-5">
            {
                companies.length === 0 ? <p className="text-center">No Companies Found</p> :
                companies.map((company,index) => {
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
    </>
  );
};
export default CompaniesListPrev;