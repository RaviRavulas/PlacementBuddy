import {useState} from 'react';
import {Form, Button, Nav, Container} from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../services/helper';

const AddCompanies = () => {
    const [companies,setCompanies]= useState({}); 
    const navigate=useNavigate();
    const addcompany=async(e)=>{ 
        e.preventDefault();
        try{
            const response=await axios.post(`${BASE_URL}/api/companies`,companies, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                }
            });
            navigate("/adminpage");
            console.log(response);
        }catch(err){
            console.log(err);
        }
    }
    return (
        <>
        <NavBar/>
        <Container>
        <h1 style={{background:"rgb(124, 148, 167)"}} className='text-center my-3'>Add Companies</h1>
        <Container className='addbox'>
            <Form>
                <Form.Group controlId="year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="text" placeholder="Enter Year" name="year" onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="status">
                    <Form.Label>Status</Form.Label>
                    <Form.Control as="select" name="status"  onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}>
                    <option>Choose...</option>
                    <option>completed</option>
                    <option>ongoing</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" name="title"  onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="cgpa">
                    <Form.Label>CGPA</Form.Label>
                    <Form.Control type="text" placeholder="Enter CGPA" name="cgpa"  onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="package">
                    <Form.Label>Package</Form.Label>
                    <Form.Control type="text" placeholder="Enter Package" name="package"  onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="intership">
                    <Form.Label>Intership</Form.Label>
                    <Form.Control type="text" placeholder="Enter Intership" name="intership" onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="EligibleBranches">
                    <Form.Label>Eligible Branches</Form.Label>
                    <Form.Control type="text" placeholder="Enter Eligible Branches" name="EligibleBranches"  onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="OfferedStudents">
                    <Form.Label>Offered Students</Form.Label>
                    <Form.Control type="text" placeholder="Enter Offered Students" name="OfferedStudents"  onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="JobLocation">
                    <Form.Label>Job Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter Job Location" name="JobLocation" onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="JobProfile">
                    <Form.Label>Job Profile</Form.Label>
                    <Form.Control type="text" placeholder="Enter Job Profile" name="JobProfile"  onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>

                <Form.Group controlId="JobDescription">
                    <Form.Label>Job Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Job Description" name="JobDescription" onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="process">
                    <Form.Label>Process</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Process" name="process"  onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="companyWebsite">
                    <Form.Label>Company Website</Form.Label>
                    <Form.Control type="text" placeholder="Enter Company Website" name="companyWebsite"  onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="archiveslink">
                    <Form.Label>Archives Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter Archives Link" name="archiveslink"  onChange={(e)=>setCompanies({...companies,[e.target.name]:e.target.value})}/>
                </Form.Group>
                <Button onClick={addcompany} variant="primary" type="submit">
                    ADD COMPANY
                </Button>
                </Form>
            </Container>
            </Container>
            <Footer/>
        </>
    )



}
export default AddCompanies;