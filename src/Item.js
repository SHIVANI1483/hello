import { useEffect, useState } from "react";
import{useLocation} from "react-router-dom"
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
import Footer from "./Footer";
function Item()
{
    const location=useLocation();
    const data=location.state
    const [apidata,setdata]=useState({})
    useEffect(()=>{
     fetch("https://fakestoreapi.com/products/"+data.pid).then((result)=>{
     result.json().then((data1)=>{
        console.log(data1)
        setdata(data1)
     })
     })
    },[])
    return(
        <>
        
       
         <MDBCard style={{ width:"auto", alignContent:"center",  margin:"70px"}}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
         <center> <MDBCardImage src={apidata.image} alt='...' width={"300px"} fluid /></center>
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle style={{fontFamily:"serif"}}>{apidata.title}</MDBCardTitle>
            <MDBCardTitle style={{color:"brown"}}>{apidata.price*80} rs</MDBCardTitle>
            <MDBCardTitle  style={{color:"green"}}>{apidata.category} </MDBCardTitle>
            {/* <MDBCardTitle>{apidata.rating}</MDBCardTitle> */}
            <MDBCardText>
             {apidata.description}
            </MDBCardText>
            <center><MDBBtn style={{backgroundColor:"Brown"}}>Buy Now</MDBBtn></center> 
            {/* <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText> */}
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    <Footer></Footer>
    
        </>
    )
}
export  default Item