import {useEffect, useState} from 'react';
import {Form, Button, Nav, Container} from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { BASE_URL } from '../services/helper';

const UpdateCompany = () => {
    const [companies,setCompanies]= useState({});
    const params = useParams();
    const navigate = useNavigate();

    const updateCompany = async (e) => {
        e.preventDefault();
        companies._id = null
        companies.__v = null
        companies.createdAt = null
        companies.updatedAt = null
        try {
            const response = await axios.put(`${BASE_URL}/api/companies/${params.id}`, companies, {
                headers: {
                    "Authorization": `Bearer ${Cookies.get("token")}`
                }
            });
            console.log(response.data);
            navigate("/adminpage");
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        axios.get(`${BASE_URL}/api/companies/${params.id}`)
        .then((res)=>{
            console.log(res.data);
            setCompanies(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return (
        <>
        <NavBar/>
        <Container>
        <h1 style={{background:"rgb(124, 148, 167)"}} className='text-center my-3'>Add Companies</h1>
        <Container className='addbox'>
            <Form>
                <Form.Group controlId="year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text" placeholder="Enter Year" name="year" value={companies.year} onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="status">
                    <Form.Label>Status</Form.Label>
                    <Form.Control as="select" name="status" value={companies.status} onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}>
                    <option>Choose...</option>
                    <option>completed</option>
                    <option>ongoing</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" name="title" value={companies.title} onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="cgpa">
                    <Form.Label>CGPA</Form.Label>
                    <Form.Control type="text" placeholder="Enter CGPA" name="cgpa" value={companies.cgpa} onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="package">
                    <Form.Label>Package</Form.Label>
                    <Form.Control type="text" placeholder="Enter Package" name="package" value={companies.package} onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="intership">
                    <Form.Label>Intership</Form.Label>
                    <Form.Control type="text" placeholder="Enter Intership" name="intership" value={companies.intership} onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="EligibleBranches">
                    <Form.Label>Eligible Branches</Form.Label>
                    <Form.Control type="text" placeholder="Enter Eligible Branches" name="EligibleBranches" value={companies.EligibleBranches} onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="OfferedStudents">
                    <Form.Label>Offered Students</Form.Label>
                    <Form.Control type="text" placeholder="Enter Offered Students" name="OfferedStudents" value={companies.OfferedStudents} onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="JobLocation">
                    <Form.Label>Job Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter Job Location" name="JobLocation" value={companies.JobLocation} onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="JobProfile">
                    <Form.Label>Job Profile</Form.Label>
                    <Form.Control type="text" placeholder="Enter Job Profile" name="JobProfile" value={companies.JobProfile} onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>

                <Form.Group controlId="JobDescription">
                    <Form.Label>Job Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Job Description" name="JobDescription" value={companies.JobDescription} onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="process">
                    <Form.Label>Process</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Process" name="process" value={companies.process} onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="companyWebsite">
                    <Form.Label>Company Website</Form.Label>
                    <Form.Control type="text" placeholder="Enter Company Website" name="companyWebsite" value={companies.companyWebsite} onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="archiveslink">
                    <Form.Label>Archives Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter Archives Link" name="archiveslink" value={companies.archiveslink} onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Button onClick={updateCompany} variant="primary" type="submit">
                    UPDATE
                </Button>
                </Form>
            </Container>
            </Container>
            <Footer/>
        </>
    )



}
export default UpdateCompany;