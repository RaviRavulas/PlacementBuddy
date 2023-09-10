import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BASE_URL } from "../services/helper";
const DetailsBody = (fields) => {

    const [company, setCompany] = useState({});

    useEffect(() => {
        console.log(fields.company);
        axios.get(`${BASE_URL}/api/companies/${fields.company}`)
            .then((res) => {
                console.log(res.data);
                setCompany(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <Container>
                <Container className="shadow py-5 text-center">
                    <h1>{company.title}</h1>
                    <b>CGPA:</b> {company.cgpa}
                    <br/>
                    <b>Package:</b> {company.package}LPA
                    <br/>
                    <b>Branch:</b> {company.EligibleBranches}
                    <br/>
                    <b>Offered Students:</b> {company.OfferedStudents}
                    <p>
                        <b>Role</b>: {company.JobProfile}<br/>
                        <b>Job Location</b>: {company.JobLocation}<br/>
                        <b>Description</b>:<br /> {company.JobDescription}<br />
                        <b>Internship</b>: {company.intership}<br />
                        <b>Process</b>:<br /> {company.process}<br />
                    </p>
                    <a className="btn btn-primary me-3" href={company.companyWebsite} target="_blank" rel="noreferrer">Visit Website</a>
                    <a className="btn btn-primary" href={company.archiveslink} target="_blank" rel="noreferrer">Archives Link</a>
                </Container>
            </Container>
        </>
    )
}
export default DetailsBody;