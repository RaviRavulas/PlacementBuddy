import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { BASE_URL } from "../services/helper";


const Delete = () => {
    const params = useParams();
    const navigate = useNavigate();
    const adminpage = () => {  
        navigate("/adminpage");
    }
    
    const deleteCompany = () => {
        axios.delete(`${BASE_URL}/api/companies/` + params.id, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        .then((res) => {
            console.log(res.data);
            navigate("/adminpage");
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <>
        <Container>
        <h1 style={{background:"rgb(124, 148, 167)"}} className='text-center my-3'>Are You Confirm?</h1>
        <Container className="d-flex justify-content-center mt-5">
        <button className="btn btn-primary me-5" onClick={deleteCompany}>Yes</button>
        <button className="btn btn-primary" onClick={adminpage}>No</button>
        </Container>
        </Container>
        </>
    );
}

export default Delete;