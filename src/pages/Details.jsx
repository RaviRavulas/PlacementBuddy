import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DetailsBody from "../components/DetailsBody";
import { useParams } from "react-router-dom";
const Details = () => {
  const params = useParams();
  return (
    <>
        <NavBar />
        <DetailsBody company={params.id}/>
        <Footer />
    </>
  );
}
export default Details;